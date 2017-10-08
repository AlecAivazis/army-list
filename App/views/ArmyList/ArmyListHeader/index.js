// external imports
import React from 'react'
import { View } from 'react-native'
// local imports
import { Title, Icon } from '~/components'
import styles from './styles'

const ArmyListHeader = () => (
    <View style={styles.container}>
        <Title style={styles.title}>My Armies</Title>
    </View>
)

export default ArmyListHeader
