// external imports
import React from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import { View, Text } from 'react-native'
// local imports
import { App, Title } from '~/components'
import environment from '~/App/environment'
import CodexDetail from './CodexDetail'

const CodexDetail = () => (
    <QueryRenderer
        environment={environment}
        query={graphql`
            query CodexDetailQuery($id: ID!) {
                node(id: $id) {
                    ... on Codex {
                        ...CodexDetail_codex
                    }
                }
            }
        `}
        render={({ error, props }) => {
            // if there was an error
            if (error) {
                throw new Error(error)
            }

            // if we are still loading
            if (!props) {
                return (
                    <App>
                        <View>
                            <Text>loading...</Text>
                        </View>
                    </App>
                )
            }

            // render the detail view
            return <CodexDetail codex={props.node} />
        }}
    />
)
