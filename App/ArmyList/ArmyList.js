// external imports
import React from "react"
import { View, StyleSheet, Text } from "react-native"
import { createFragmentContainer, graphql } from "react-relay"
import { ZoomViewContainer, CardGrid } from "~/quark"
// local imports
import ArmyCard from "./ArmyCard"

const List = ({ armies, ...unused }) => (
    <ZoomViewContainer>
        {transitionTo => (
            <CardGrid style={styles.content}>
                {armies.edges.map(({ node: army }) => (
                    <ArmyCard army={army} key={army.name} />
                ))}
            </CardGrid>
        )}
    </ZoomViewContainer>
)

const styles = StyleSheet.create({
    container: {}
})

export default createFragmentContainer(
    List,
    graphql`
        fragment ArmyList_armies on ArmyConnection {
            edges {
                node {
                    ...ArmyCard_army
                    name
                }
            }
        }
    `
)
