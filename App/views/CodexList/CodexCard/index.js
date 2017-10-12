// external imports
import React from 'react'
import { Text } from 'react-native'
import { Card } from 'quark-native'
import { createFragmentContainer, graphql } from 'react-relay'
import { Link } from 'react-router-native'
// local imports
import { ButtonLink, CodexAvatar } from '~/components'
import styles from './styles'

const CodexCard = ({ codex, style, ...unused }) => (
    <Card style={[styles.container, style]}>
        <ButtonLink style={styles.content} to={`/codex/${codex.id}`}>
            <CodexAvatar codex={codex} />
            <Text style={styles.title}>{codex.name}</Text>
        </ButtonLink>
    </Card>
)

export default createFragmentContainer(
    CodexCard,
    graphql`
        fragment CodexCard_codex on Codex {
            id
            name
            ...CodexAvatar_codex
        }
    `
)
