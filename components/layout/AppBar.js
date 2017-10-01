// external imports
import React from "react"
import { AppBar } from "quark-native"

export default ({ style, ...unused }) => (
    <AppBar
        {...unused}
        style={[styles.container, style]}
        statusBarStyle={styles.statusBar}
    />
)

const styles = {
    container: {
        backgroundColor: "#252528",
        height: 80,
        paddingLeft: 55
    },
    statusBar: {
        backgroundColor: "#0E0E0F",
        barStyle: "light-content"
    }
}
