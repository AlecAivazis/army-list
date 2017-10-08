// external imports
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Route } from 'react-router-native'
import { withRouter } from 'react-router-native'
import { App, Title } from '~/components'
import { FreeState, Button } from 'quark-native'
// local imports
import ArmyDetailHeader from './ArmyDetailHeader'

type Props = {
    unused: {}
}

const ArmyDetail = ({ army, ...unused }: Props) => (
    <FreeState>
        {({ state, set }) => {
            // a function to close the overlay
            const closeOverlay = () => set(null)
            // open a particular overlay
            const openOverlay = which => () => set(which)

            return (
                <App
                    header={
                        <ArmyDetailHeader army={army} style={styles.content} />
                    }
                    options={[
                        <Button
                            onPress={openOverlay('detachment')}
                            key="addDetachment"
                        >
                            Add Detachment
                        </Button>,
                        <Button onPress={openOverlay('edit')} key="edit">
                            Edit Army
                        </Button>,
                        <Button onPress={openOverlay('delete')} key="delete">
                            Delete Army
                        </Button>
                    ]}
                >
                    <View style={styles.header}>
                        <Text>{army.name}</Text>
                    </View>
                </App>
            )
        }}
    </FreeState>
)

const styles = StyleSheet.create({
    container: {},
    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
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
