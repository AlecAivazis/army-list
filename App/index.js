// external imports
import React from "react"
import { StyleSheet, Text, View, StatusBar } from "react-native"
import { Card } from "quark-native"
import { grey2 } from "quark-native/styles"
// local imports
import { CardGrid } from "~/quark"
import { AppBar, Title } from "~/components"

export default () => (
    <View style={styles.container}>
        <AppBar style={styles.appBar}>
            <StatusBar backgroundColor="black" />
            <Title style={{ color: "white" }}>My Armies</Title>
        </AppBar>
        <CardGrid style={styles.content}>
            <Card style={{ height: 200 }}>
                <Text>hello world</Text>
            </Card>
            <Card style={{ height: 200 }}>
                <Text>hello world</Text>
            </Card>
            <Card style={{ height: 200 }}>
                <Text>hello world</Text>
            </Card>
            <Card style={{ height: 200 }}>
                <Text>hello world</Text>
            </Card>
        </CardGrid>
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
    }
})
