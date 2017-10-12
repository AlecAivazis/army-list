// external imports
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { PrimaryButton } from 'quark-native'
// local imports
import styles from './styles'

const ModelSummaryHeader = () => (
    <View style={styles.container}>
        <Text>search</Text>
        <PrimaryButton>
            <Text> Add Model </Text>
        </PrimaryButton>
    </View>
)

export default ModelSummaryHeader
