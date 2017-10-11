// external imports
import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { QueryRenderer, graphql } from 'react-relay'
import { withRouter } from 'react-router-native'
import { Card, Button } from 'quark-native'
import { grey2 } from 'quark-native/styles'
// local imports
import { App, Title, ButtonLink } from '~/components'
import Header from './ArmyListHeader'
import List from './ArmyList'
import environment from '~/App/environment'
import { Loader } from '~/quark'

export default ({ history }) => (
    <QueryRenderer
        environment={environment}
        query={graphql`
            query ArmyListQuery {
                viewer {
                    allArmies {
                        ...ArmyList_armies
                    }
                }
            }
        `}
        render={({ props, error }) => {
            // if something went wrong
            if (error) {
                throw new Error(error)
            }
            // if we are still loading
            if (!props) {
                return (
                    <App style={styles.container} header={<Header />}>
                        <Loader name="spinner" />
                    </App>
                )
            }

            // we're done querying the api
            return (
                <App
                    style={styles.container}
                    header={<Header />}
                    options={[
                        <ButtonLink to="/newArmy" key="add">
                            Add Army
                        </ButtonLink>,
                        <ButtonLink to="/codex" key="manage">
                            Manage Data
                        </ButtonLink>
                    ]}
                >
                    <List armies={props.viewer.allArmies} />
                </App>
            )
        }}
    />
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    content: {
        flex: 1,
        backgroundColor: grey2
    },
    appBar: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 20
    }
})
