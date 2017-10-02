// external imports
import React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { View, Text, StyleSheet } from "react-native"
// local imports
import { Title, Icon } from "~/components"
import { Dropdown } from "~/quark"

const ArmyDetailAppBar = ({ army }) => (
    <View style={styles.container}>
        <Title style={{ color: "white" }}>{army.name}</Title>
        <Dropdown
            toggle={<Icon name="" style={{ height: 40 }} />}
            toggleStyle={{
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
                flex: 1
            }}
        >
            <View>
                <Text>Foo</Text>
            </View>
        </Dropdown>
    </View>
)

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexGrow: 1
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
