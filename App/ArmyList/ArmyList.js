// @flow
// external imports
import React from "react"
import { View, StyleSheet, Text } from "react-native"
import { createFragmentContainer, graphql } from "react-relay"
import { ZoomViewContainer, CardGrid } from "~/quark"
// local imports
import ArmyDetail from "~/App/ArmyDetail"
import ArmyCard from "./ArmyCard"

type TransitionSpec = {
    id: string
}

const List = ({ armies, ...unused }) => (
    <ZoomViewContainer
        loading={() => () => (
            <View>
                <Text>loading...</Text>
            </View>
        )}
        view={({ data: { id }, closeView }) => (
            <ArmyDetail id={id} closeView={closeView} />
        )}
    >
        {transitionTo => (
            <CardGrid style={styles.content}>
                {armies.edges.map(({ node: army }) => (
                    <ArmyCard
                        key={army.name}
                        army={army}
                        transitionTo={transitionTo}
                    />
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
