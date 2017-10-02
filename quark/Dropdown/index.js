// external imports
import React from "react"
import {
    View,
    Modal,
    Animated,
    Text,
    TouchableWithoutFeedback
} from "react-native"
// local imports
import { Button, Card } from "quark-native"

type Props = {
    children: React.Component<*>,
    toggle: React.Component<*>,
    style: {},
    toggleStyle: {}
}

// the distance for the dropdown to fall over the course of its animatino
const distance = 0
const duration = 150

class Dropdown extends React.Component<Props> {
    state: {
        showMenu: boolean,
        dropdown: {
            x: Animated.Value,
            y: Animated.Value,
            width: Animated.Value,
            height: Animated.Value,
            opacity: Animated.Value
        }
    } = {
        showMenu: false,
        dropdown: {}
    }

    _toggle = () => {
        // figure out where the toggle is located
        this._toggleElement.measure((_, __, width, height, x, y) => {
            // if we have to hide the dropdown
            if (this.state.showMenu) {
                // fade in
                Animated.spring(this.state.dropdown.opacity, {
                    toValue: 0
                }).start(() => this.setState({ showMenu: false }))
            } else {
                // otherwise we have to show the showdown
                // start the view the proper distance
                this.setState(
                    {
                        showMenu: true,
                        dropdown: {
                            x: x - 100,
                            y: y + height,
                            opacity: new Animated.Value(0)
                        }
                    },
                    () => {
                        // fade in
                        Animated.timing(this.state.dropdown.opacity, {
                            toValue: 1,
                            duration
                        }).start()
                    }
                )
            }
        })
    }

    render() {
        const { children, toggle, style, toggleStyle } = this.props
        return (
            <View style={[style]}>
                <View
                    ref={ele => (this._toggleElement = ele)}
                    style={{ flex: 1 }}
                >
                    <Button
                        defaultColor="#252528"
                        activeColor="#222225"
                        textColor="white"
                        style={toggleStyle}
                        onPressOut={this._toggle}
                    >
                        {toggle}
                    </Button>
                </View>
                <Modal visible={this.state.showMenu} transparent={true}>
                    <TouchableWithoutFeedback onPress={this._toggle}>
                        <View style={{ flex: 1 }} />
                    </TouchableWithoutFeedback>
                    <Animated.View
                        style={[
                            {
                                position: "absolute",
                                width: 275,
                                height: 100,
                                transform: [
                                    { translateY: this.state.dropdown.y },
                                    { translateX: this.state.dropdown.x }
                                ]
                            },
                            {
                                opacity: this.state.dropdown.opacity
                            }
                        ]}
                    >
                        <View style={{ flex: 1 }} pointerEvents="none">
                            <Card style={{ flex: 1 }}>
                                <Text>hello</Text>
                            </Card>
                        </View>
                    </Animated.View>
                </Modal>
            </View>
        )
    }
}

export default Dropdown
