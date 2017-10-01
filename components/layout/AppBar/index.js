// external imports
import React from "react"
import { AppBar } from "quark-native"
import { Route, Switch } from "react-router-native"
import { Text } from "react-native"
import Title from "../../Title"

export default ({ style, ...unused }) => (
    <AppBar
        {...unused}
        style={[styles.container, style]}
        statusBarStyle={styles.statusBar}
    >
        <Switch>
            <Route
                path="/army/:id"
                render={() => <Title style={styles.title}>Foo</Title>}
            />
            <Route
                render={() => <Title style={styles.title}>My Armies</Title>}
            />
        </Switch>
    </AppBar>
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
    },
    title: {
        color: "white"
    }
}
