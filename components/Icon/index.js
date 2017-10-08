// external imports
import React from 'react'
import { View, Text } from 'react-native'
// local imports
import More from './More'
import Gears from './Gears'

type Props = {
    name: 'more' | 'gears'
}

const Icon = ({ name }: Props) => {
    switch (name) {
        case 'more':
            return <More />
        case 'gears':
            return <Gears />
        default:
            return (
                <View>
                    <Text>can't find icon</Text>
                </View>
            )
    }
}

export default Icon
