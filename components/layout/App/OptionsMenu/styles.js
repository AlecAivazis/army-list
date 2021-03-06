// external imports
import { StyleSheet } from 'react-native'
// local imports
import { grey2 } from 'quark-native/styles'

const button = {
    height: 48,
    alignItems: 'flex-start',
    paddingLeft: 12,
    paddingRight: 12
}

export default StyleSheet.create({
    container: {
        position: 'absolute',
        right: 0,
        top: 80,
        width: 243,
        zIndex: 10
    },
    button: {
        ...button,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: grey2
    },
    lastButton: {
        ...button
    }
})
