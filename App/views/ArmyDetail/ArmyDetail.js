// external imports
import React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native"
import { Button } from "quark-native"
import { Route } from "react-router-native"
import { withRouter } from "react-router-native"
import { App, Title } from "~/components"
import { Boolean as BooleanState } from "quark-native"
// local imports
import ArmyDetailHeader from "./ArmyDetailHeader"
import OptionsMenu from "./OptionsMenu"

type Props = {
    unused: {}
}

const ArmyDetail = ({ army, ...unused }: Props) => (
    <BooleanState>
        {({ state, toggle, set }) => (
            <App
                header={
                    <ArmyDetailHeader
                        army={army}
                        toggleMenu={toggle}
                        closeMenu={() => set(false)}
                        style={styles.content}
                    />
                }
            >
                <TouchableWithoutFeedback onPress={() => set(false)}>
                    <View style={styles.header}>
                        <Text>{army.name}</Text>
                    </View>
                </TouchableWithoutFeedback>
                <OptionsMenu visible={state} />
            </App>
        )}
    </BooleanState>
)

const styles = StyleSheet.create({
    container: {},
    content: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        flex: 1
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
