// external imports
import React from 'react'
import { Text, View } from 'react-native'
import { Overlay } from '~/quark'
import { Title, TabView } from 'quark-native'
// local imports
import styles from './styles'

const AddModelOverlay = ({ ...unused }) => {
    // a mapping of names of views to the component to mount
    const tabs = {
        Models: (
            <View>
                <Text>models</Text>
            </View>
        ),
        'Special Rules': (
            <View>
                <Text>special rules</Text>
            </View>
        ),
        Wargear: (
            <View>
                <Text>wargear</Text>
            </View>
        )
    }
    return (
        <Overlay {...unused}>
            <View style={styles.titleContainer}>
                <Title style={styles.title}>Add a Unit</Title>
            </View>
            <TabView
                data={Object.keys(tabs).map(key => ({ key }))}
                barStyle={styles.tabBar}
            >
                {({ key }) => tabs[key]}
            </TabView>
        </Overlay>
    )
}

export default AddModelOverlay
