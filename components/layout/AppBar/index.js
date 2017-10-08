// external imports
import React from 'react'
import { AppBar as Bar, Button } from 'quark-native'
import { Route, Switch } from 'react-router-native'
import { Text, TouchableWithoutFeedback } from 'react-native'
import { Icon } from '~/components'
// local imports
import Title from '../../Title'

const AppBar = ({ style, children, onPress, ...unused }) => (
    <Bar
        {...unused}
        style={[styles.container, style]}
        statusBarStyle={styles.statusBar}
    >
        {children}
        <Button
            defaultColor="#252528"
            activeColor="#1b1b1b"
            textColor="white"
            style={styles.button}
            onPress={onPress}
        >
            <Icon name="more" />
        </Button>
    </Bar>
)

const styles = {
    container: {
        backgroundColor: '#252528',
        height: 80,
        paddingLeft: 55,
        paddingRight: 55
    },
    statusBar: {
        backgroundColor: '#0E0E0F',
        barStyle: 'light-content'
    },
    title: {
        color: 'white'
    },
    button: {
        height: '100%'
    }
}

export default AppBar
