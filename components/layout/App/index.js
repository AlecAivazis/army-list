// external imports
import React from "react"
import { StyleSheet, Text, View, StatusBar } from "react-native"
import { QueryRenderer, graphql } from "react-relay"
import { Card } from "quark-native"
import { grey2 } from "quark-native/styles"
// local imports
import { Title, AppBar } from "~/components"
import environment from "~/App/environment"
import { Loader } from "~/quark"

export default ({ children, header }) => (
    <View style={styles.container}>
        <AppBar style={styles.appBar}>
            <StatusBar backgroundColor="black" />
            <View style={styles.title}>{header}</View>
        </AppBar>
        <View style={styles.content}>{children}</View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    content: {
        flex: 1,
        backgroundColor: grey2
    },
    appBar: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 20
    },
    title: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
