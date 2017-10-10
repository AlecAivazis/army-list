// external imports
import React from 'react'
import { AppBar as Bar, Button } from 'quark-native'
import { Route, Switch } from 'react-router-native'
import { Text, TouchableWithoutFeedback } from 'react-native'
import { Icon } from '~/components'
// local imports
import Title from '../../Title'

const AppBar = ({ style, children, onPress, button, ...unused }) => {
    // the element to use as the action button
    const actionButton = (
        <Button
            defaultColor="#252528"
            activeColor="#1b1b1b"
            textColor="white"
            style={styles.button}
            onPress={onPress}
        >
            {button || <Icon name="more" />}
        </Button>
    )

    return (
        <Bar
            {...unused}
            style={[styles.container, !onPress && styles.soloHeader, style]}
            statusBarStyle={styles.statusBar}
        >
            {children}
            {onPress && actionButton}
        </Bar>
    )
}

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
    soloHeader: {},
    title: {
        color: 'white'
    },
    button: {
        height: '100%'
    }
}

export default AppBar
