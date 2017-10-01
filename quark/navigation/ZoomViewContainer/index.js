// @flow
// external imports
import React from "react"
import { StyleSheet, View } from "react-native"

type Props = {}

class ZoomGridContainer extends React.Component<Props> {
    state: {
        showZoom: boolean
    } = {
        showZoom: false
    }

    render() {
        const { children, style, ...unused } = this.props
        return (
            <View style={[styles.container, style]}>
                {this.state.showZoom && <View>hello</View>}
                {children(this._transitionTo)}
            </View>
        )
    }

    _transitionTo = () => {}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative"
    }
})

export default ZoomGridContainer
