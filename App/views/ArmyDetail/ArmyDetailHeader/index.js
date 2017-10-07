// external imports
import React from "react"
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native"
import { createFragmentContainer, graphql } from "react-relay"
import { Button } from "quark-native"
// local imports
import { Title, Icon } from "~/components"

const ArmyDetailHeader = ({ army, toggleMenu, closeMenu, ...unused }) => (
    <TouchableWithoutFeedback onPress={closeMenu}>
        <View style={styles.container}>
            <Title>{army.name}</Title>
            <Button
                defaultColor="#252528"
                activeColor="#1b1b1b"
                textColor="white"
                style={styles.button}
                onPress={toggleMenu}
            >
                <Icon name="" />
            </Button>
        </View>
    </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
    },
    button: {
        height: "100%"
    }
})

export default createFragmentContainer(
    ArmyDetailHeader,
    graphql`
        fragment ArmyDetailHeader_army on Army {
            name
        }
    `
)
