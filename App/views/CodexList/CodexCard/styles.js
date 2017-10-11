// external imports
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        height: 80,
        width: '100%',
        flex: 0,
        marginBottom: 12,
        maxWidth: '100%',
        flexDirection: 'column'
    },
    content: {
        flex: 1,
        width: '100%',
        maxWidth: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 8,
        paddingRight: 8
    },
    title: {
        fontSize: 20
    }
})
