// external imports
import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { createFragmentContainer, graphql } from "react-relay"
// local imports
import { Title } from "~/components"

const ArmyDetailHeader = ({ army, ...unused }) => (
    <View style={styles.container}>
        <Title>{army.name}</Title>
    </View>
)

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center" }
})

export default createFragmentContainer(
    ArmyDetailHeader,
    graphql`
        fragment ArmyDetailHeader_army on Army {
            name
        }
    `
)
