// @flow
// external imports
import React from "react"
import { View, Text } from "react-native"

type Props = {
    name: string
}

const Loader = ({ name }: Props) => {
    return (
        <View>
            <Text>loading...</Text>
        </View>
    )
}

export default Loader
