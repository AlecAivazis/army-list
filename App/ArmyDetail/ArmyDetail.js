// external imports
import React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { View, Text, StyleSheet } from "react-native"
import { Button } from "quark-native"

type Props = {
    close: () => void,
    unused: {}
}

const ArmyDetail = ({ army, close, ...unused }: Props) => (
    <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.header}>
                <Text>{army.name}</Text>
                <Button onPressOut={close}>
                    <Text>close</Text>
                </Button>
            </View>
            <View style={styles.body}>
                <Text>hello</Text>
            </View>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    content: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    body: {
        flex: 1
    }
})

export default createFragmentContainer(
    ArmyDetail,
    graphql`
        fragment ArmyDetail_army on Army {
            name
        }
    `
)
