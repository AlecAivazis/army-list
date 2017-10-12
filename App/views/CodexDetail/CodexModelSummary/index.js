// external imports
import React from 'react'
import { Text, View } from 'react-native'
import { createFragmentContainer, graphql } from 'react-relay'
// local imports
import styles from './styles'
import Header from './CodexModelSummaryHeader'
import Content from './CodexModelSummary'

const CodexModelSummary = ({ codex }) => (
    <View style={styles.container}>
        <Header />
        <Content models={codex.models} />
    </View>
)

export default createFragmentContainer(
    CodexModelSummary,
    graphql`
        fragment CodexModelSummary_codex on Codex {
            name
            models {
                ...CodexModelSummary_models
            }
        }
    `
)
