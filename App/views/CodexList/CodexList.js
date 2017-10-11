// external imports
import React from 'react'
import { View, ScrollView } from 'react-native'
import { createFragmentContainer, graphql } from 'react-relay'
// local imports
import { CardGrid } from '~/quark'
import CodexCard from './CodexCard'
import styles from './styles'

const CodexList = ({ viewer: { codices } }) => (
    <ScrollView style={styles.container}>
        {codices.edges.map(({ node: codex }, i) => (
            <CodexCard codex={codex} key={i} />
        ))}
        {codices.edges.map(({ node: codex }, i) => (
            <CodexCard codex={codex} key={i} />
        ))}
        {codices.edges.map(({ node: codex }, i) => (
            <CodexCard codex={codex} key={i} />
        ))}
        {codices.edges.map(({ node: codex }, i) => (
            <CodexCard codex={codex} key={i} />
        ))}
        {codices.edges.map(({ node: codex }, i) => (
            <CodexCard codex={codex} key={i} />
        ))}
    </ScrollView>
)

export default createFragmentContainer(
    CodexList,
    graphql`
        fragment CodexList_viewer on Viewer {
            codices: allCodices {
                edges {
                    node {
                        id
                        ...CodexCard_codex
                    }
                }
            }
        }
    `
)
