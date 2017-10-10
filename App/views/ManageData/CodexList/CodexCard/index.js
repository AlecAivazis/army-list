// external imports
import React from 'react'
import { Text } from 'react-native'
import { Card } from 'quark-native'
import { createFragmentContainer, graphql } from 'react-relay'
import { Link } from 'react-router-native'
// local imports
import styles from './styles'

const CodexCard = ({ codex, style, ...unused }) => (
    <Card style={[styles.container, style]}>
        <Text>{codex.name}</Text>
    </Card>
)

export default createFragmentContainer(
    CodexCard,
    graphql`
        fragment CodexCard_codex on Codex {
            name
            id
        }
    `
)
