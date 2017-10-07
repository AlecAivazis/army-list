// external imports
import React from 'react'
import { View } from 'react-native'
// local imports
import More from './More'

type Props = {
    name: 'more' | 'arrow-down'
}

const Icon = ({ name }: Props) => <More />

export default Icon
