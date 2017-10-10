// external imports
import React from 'react'
import { View } from 'react-native'
import { createFragmentContainer, graphql } from 'react-relay'
// local imports
import { CardGrid } from '~/quark'
import CodexCard from './CodexCard'

const CodexList = ({ viewer: { codices } }) => (
    <CardGrid>
        {codices.edges.map(({ node: codex }, i) => (
            <CodexCard codex={codex} key={i} />
        ))}
    </CardGrid>
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
