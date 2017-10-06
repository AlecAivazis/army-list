// external imports
import React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { View, Text, StyleSheet } from "react-native"
import { Button } from "quark-native"
import { Route } from "react-router-native"
import { withRouter } from "react-router-native"
import { App, Title } from "~/components"
// local imports
import ArmyDetailHeader from "./ArmyDetailHeader"

type Props = {
    unused: {}
}

const ArmyDetail = ({ army, ...unused }: Props) => (
    <App header={<ArmyDetailHeader army={army} />}>
        <View style={styles.content}>
            <View style={styles.header}>
                <Text>{army.name}</Text>
            </View>
            <Route
                path="/armies/:id/edit"
                render={() => (
                    <View style={styles.body}>
                        <Text>hello</Text>
                    </View>
                )}
            />
        </View>
    </App>
)

const styles = StyleSheet.create({
    container: {},
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
    withRouter(ArmyDetail),
    graphql`
        fragment ArmyDetail_army on Army {
            name
            ...ArmyDetailHeader_army
        }
    `
)
