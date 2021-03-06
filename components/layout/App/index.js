// external imports
import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableWithoutFeedback
} from 'react-native'
import { QueryRenderer, graphql } from 'react-relay'
import { Card, BooleanState } from 'quark-native'
import { grey2 } from 'quark-native/styles'
// local imports
import { Title, AppBar } from '~/components'
import environment from '~/App/environment'
import OptionsMenu from './OptionsMenu'
import { Loader } from '~/quark'

const App = ({ children, header, button, options, style }) => {
    const content = ({ toggle, menuVisible }) => (
        <View style={styles.container}>
            <AppBar
                style={styles.appBar}
                onPress={options && toggle}
                button={button}
            >
                <StatusBar backgroundColor="black" />
                <View style={styles.title}>{header}</View>
            </AppBar>
            <OptionsMenu visible={menuVisible}>{options}</OptionsMenu>
            <View style={[styles.content, style]}>{children}</View>
        </View>
    )

    return (
        <BooleanState>
            {({ state: menuVisible, toggle, set }) => {
                const body = content({ toggle, menuVisible })

                return !options ? (
                    body
                ) : (
                    <TouchableWithoutFeedback onPressIn={() => set(false)}>
                        {body}
                    </TouchableWithoutFeedback>
                )
            }}
        </BooleanState>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        position: 'relative'
    },
    content: {
        flex: 1,
        backgroundColor: '#F9F9F9'
    },
    appBar: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        paddingTop: 20
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    }
})

export default App
