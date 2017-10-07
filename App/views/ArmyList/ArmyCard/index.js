// external imports
import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { createFragmentContainer, graphql } from 'react-relay'
import { Card, Button } from 'quark-native'
import { ZoomViewTrigger } from '~/quark'
// local imports
import type { ArmyCard_army } from './__generated__/ArmyCard_army.graphql'

type Props = {
    transitionTo: (spec: TransitionSpec) => void,
    army: ArmyCard_army,
    unused: {}
}

const ArmyCard = ({ army, transitionTo, ...unused }: Props) => (
    <ZoomViewTrigger transitionTo={transitionTo}>
        {({ trigger }) => (
            <Card {...unused}>
                <Button
                    style={styles.container}
                    onPressOut={() => trigger({ id: army.id })}
                >
                    <Text>{army.name}</Text>
                </Button>
            </Card>
        )}
    </ZoomViewTrigger>
)

const styles = StyleSheet.create({
    container: {
        height: 200,
        maxWidth: 400,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }
})

export default createFragmentContainer(
    ArmyCard,
    graphql`
        fragment ArmyCard_army on Army {
            id
            name
        }
    `
)
