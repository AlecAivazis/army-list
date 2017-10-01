// external imports
import React from "react"
import { Text, StyleSheet } from "react-native"
import { createFragmentContainer, graphql } from "react-relay"
import { Card } from "quark-native"
// local imports

type Props = {
    unused: {}
}

const ArmyCard = ({ army, ...unused }: Props) => (
    <Card style={styles.container}>
        <Text>{army.name}</Text>
    </Card>
)

const styles = StyleSheet.create({
    container: {
        height: 200
    }
})

export default createFragmentContainer(
    ArmyCard,
    graphql`
        fragment ArmyCard_army on Army {
            name
        }
    `
)
