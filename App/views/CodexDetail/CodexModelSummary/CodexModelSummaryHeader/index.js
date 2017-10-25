// external imports
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { PrimaryButton, BooleanState } from 'quark-native'
import { AddModelOverlay } from '~/App/overlays'
// local imports
import styles from './styles'

const ModelSummaryHeader = () => (
    <BooleanState>
        {({ state, toggle }) => (
            <View style={styles.container}>
                <Text>search</Text>
                <PrimaryButton onPress={toggle}>
                    <Text> Add A Unit </Text>
                </PrimaryButton>
                <AddModelOverlay toggle={toggle} visible={state} />
            </View>
        )}
    </BooleanState>
)

export default ModelSummaryHeader
