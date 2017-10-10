// external imports
import React from 'react'
import { View, Text } from 'react-native'
import { Button, Card } from 'quark-native'
import { QueryRenderer, graphql } from 'react-relay'
// local imports
import { App, Title } from '~/components'
import { Loader } from '~/quark'
import styles from './styles'
import environment from '~/App/environment'
import CodexList from './CodexList'

type Props = {}

const ManageData = ({ ...unused }: Props) => (
    <App
        {...unused}
        header={
            <View style={styles.header}>
                <Title>Manage Data</Title>
            </View>
        }
        button={<Text style={styles.cta}>Add Army</Text>}
    >
        <QueryRenderer
            environment={environment}
            query={graphql`
                query CodexListQuery {
                    viewer {
                        ...CodexList_viewer
                    }
                }
            `}
            render={({ error, props }) => {
                // if something went wrong
                if (error) {
                    throw new Error(error)
                }
                // if we are still loading
                if (!props) {
                    return <Loader name="spinner" />
                }

                return <CodexList viewer={props.viewer} />
            }}
        />
    </App>
)

export default ManageData
