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
            graphql={graphql`
                query ManageDataQuery {
                    viewer {
                        allCodexes {
                            edges {
                                node {
                                    id
                                    name
                                }
                            }
                        }
                    }
                }
            `}
            render={({ error, props }) => {
                // if something went wrong
                if (error) {
                    throw new Error(error)
                }
                console.log(props)
                // if we are still loading
                if (!props) {
                    console.log('loading')
                    return <Loader name="spinner" />
                }

                return null
            }}
        />
    </App>
)

export default ManageData
