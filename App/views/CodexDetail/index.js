// external imports
import React from 'react'
import { QueryRenderer, graphql } from 'react-relay'
import { View, Text } from 'react-native'
// local imports
import { App, Title } from '~/components'
import environment from '~/App/environment'
import Content from './CodexDetail'

const CodexDetail = ({ match }) => (
    <QueryRenderer
        environment={environment}
        query={graphql`
            query CodexDetailQuery($id: ID!) {
                node(id: $id) {
                    ... on Codex {
                        name
                        ...CodexDetail_codex
                    }
                }
            }
        `}
        variables={match.params}
        render={({ error, props }) => {
            // if there was an error
            if (error) {
                throw new Error(error)
            }

            // if we are still loading
            if (!props) {
                return (
                    <App header={<Title>loading</Title>}>
                        <View>
                            <Text>loading...</Text>
                        </View>
                    </App>
                )
            }

            // render the detail view
            return <Content codex={props.node} />
        }}
    />
)

export default CodexDetail
