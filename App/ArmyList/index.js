// external imports
import React from "react"
import { StyleSheet, Text, View, StatusBar } from "react-native"
import { QueryRenderer, graphql } from "react-relay"
import { Card } from "quark-native"
import { grey2 } from "quark-native/styles"
// local imports
import { AppBar, Title } from "~/components"
import List from "./ArmyList"
import environment from "~/App/environment"

export default () => (
    <View style={styles.container}>
        <AppBar style={styles.appBar}>
            <StatusBar backgroundColor="black" />
            <Title style={{ color: "white" }}>My Armies</Title>
        </AppBar>
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
                    return <Text>loading...</Text>
                }

                // we're done querying the api
                return <List armies={props.viewer.allArmies} />
            }}
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    content: {
        flex: 1,
        backgroundColor: grey2
    },
    appBar: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 20
    }
})
