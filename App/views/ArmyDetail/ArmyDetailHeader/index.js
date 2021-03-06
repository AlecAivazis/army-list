// external imports
import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { createFragmentContainer, graphql } from 'react-relay'
import { Button } from 'quark-native'
// local imports
import { Title, Icon } from '~/components'

const ArmyDetailHeader = ({ army, toggleMenu, ...unused }) => (
    <View style={styles.container}>
        <Title>{army.name}</Title>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    button: {
        height: '100%'
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
