// external imports
import React from 'react'
import { Text } from 'react-native'
import { createFragmentContainer, graphql } from 'react-relay'
// internal imports
import { App } from '~/components'

const CodexDetail = ({ codex }) => (
    <App>
        <Text>{codex.id}</Text>
    </App>
)

export default createFragmentContainer(
    CodexDetail,
    graphql`
        fragment CodexDetail_codex on Codex {
            id
        }
    `
)
