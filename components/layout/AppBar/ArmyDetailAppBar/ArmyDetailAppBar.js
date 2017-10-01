// external imports
import React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { View, Text, StyleSheet } from "react-native"
// local imports
import { Title } from "~/components"

const ArmyDetailAppBar = ({ army }) => (
    <View style={styles.container}>
        <Title style={{ color: "white" }}>{army.name}</Title>
        <View>
            <Text>more</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})

export default createFragmentContainer(
    ArmyDetailAppBar,
    graphql`
        fragment ArmyDetailAppBar_army on Army {
            name
        }
    `
)
