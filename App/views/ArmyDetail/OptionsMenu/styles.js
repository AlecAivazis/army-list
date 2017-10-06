// external imports
import { StyleSheet } from "react-native"
// local imports
import { grey2 } from "quark-native/styles"

const button = {
    height: 40
}

export default StyleSheet.create({
    container: {
        position: "absolute",
        right: 0,
        top: 0,
        width: 243,
        height: 127
    },
    button: {
        ...button,
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderBottomColor: grey2
    },
    lastButton: {
        ...button
    }
})
