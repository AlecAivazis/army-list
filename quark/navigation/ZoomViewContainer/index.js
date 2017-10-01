// @flow
// external imports
import React from "react"
import { StyleSheet, View, Text, Animated } from "react-native"

type BoundingBox = {
    x: number,
    y: number,
    width: number,
    height: number
}

type TransitionHandler = (info: BoundingBox) => void

type Props = {
    children: (transitionTo: TransitionHandler) => null,
    style: {},
    unused: {}
}

const animationDuration = 150

class ZoomGridContainer extends React.Component<Props> {
    state: {
        showView: boolean,
        loading: boolean,
        data: {},
        modal: { width: number, height: number, x: number, y: number },
        viewport: ?BoundingBox,
        origin: ?BoundingBox
    } = {
        showView: false,
        loading: false,
        data: {},
        viewport: null,
        origin: null
    }

    componentDidMount() {
        // update the notion of the viewport
        setTimeout(this._updateRootMeasure, 0)
    }

    render() {
        const { children, style, ...unused } = this.props
        return (
            <View
                style={[styles.container, style]}
                ref={ele => (this._root = ele)}
            >
                {children(this._openView)}
                {this.state.showView && (
                    <Animated.View
                        style={{
                            width: this.state.modal.width,
                            height: this.state.modal.height,
                            top: this.state.modal.x,
                            left: this.state.modal.y,
                            bottom: 0,
                            right: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "absolute",
                            backgroundColor: "white"
                        }}
                    >
                        {this.state.loading
                            ? this.props.loading(this.state.data)
                            : this.props.view(this.state.data)}
                    </Animated.View>
                )}
            </View>
        )
    }

    _openView: TransitionHandler = ({ data, ...origin }) => {
        // grab the used state
        const { viewport } = this.state

        // shift the origin to accomodate the viewport
        const relOrigin = {
            x: origin.x - this.state.viewport.x,
            y: origin.y - this.state.viewport.y,
            height: origin.height - this.state.viewport.height,
            width: origin.width - this.state.viewport.width
        }

        // save the user's provided data
        this.setState(
            {
                data,
                origin: relOrigin,
                showView: true,
                loading: true,
                modal: {
                    x: new Animated.Value(origin.x),
                    y: new Animated.Value(origin.y),
                    width: new Animated.Value(origin.width),
                    height: new Animated.Value(origin.height)
                }
            },
            () => {
                Animated.parallel([
                    Animated.timing(this.state.modal.width, {
                        toValue: this.state.viewport.width,
                        duration: animationDuration
                    }),
                    Animated.timing(this.state.modal.height, {
                        toValue: this.state.viewport.height,
                        duration: animationDuration
                    }),
                    Animated.timing(this.state.modal.x, {
                        toValue: 0,
                        duration: animationDuration
                    }),
                    Animated.timing(this.state.modal.y, {
                        toValue: 0,
                        duration: animationDuration
                    })
                ]).start(() => this.setState({ loading: false }))
            }
        )
    }

    _closeView: () => void = () => {
        // we have a few things we need to animate at once
        Animated.parallel([
            Animated.timing(this.state.modal.width, {
                toValue: this.state.origin.width,
                duration: animationDuration
            }),
            Animated.timing(this.state.modal.height, {
                toValue: this.state.origin.height,
                duration: animationDuration
            }),
            Animated.timing(this.state.modal.x, {
                toValue: this.state.origin.x,
                duration: animationDuration
            }),
            Animated.timing(this.state.modal.y, {
                toValue: this.state.origin.y,
                duration: animationDuration
            })
        ]).start(() => {
            this.setState({
                showView: false
            })
        })
    }

    _updateRootMeasure: () => void = () => {
        this._root.measure((_, __, width, height, x, y) => {
            // save the viewport dimensions
            this.setState({
                viewport: {
                    width,
                    height,
                    x,
                    y
                }
            })
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative"
    }
})

export default ZoomGridContainer
