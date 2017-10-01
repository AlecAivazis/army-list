// external imports
import React from "react"
import { View, Text } from "react-native"
import { QueryRenderer, graphql } from "react-relay"
// local imports
import environment from "~/App/environment"
import { Loader } from "~/quark"
import { Title } from "~/components"
import BarContent from "./ArmyDetailAppBar"

const ArmyDetailAppBar = ({ id }) => (
    <QueryRenderer
        environment={environment}
        query={graphql`
            query ArmyDetailAppBarQuery($id: ID!) {
                node(id: $id) {
                    ... on Army {
                        ...ArmyDetailAppBar_army
                    }
                }
            }
        `}
        variables={{ id }}
        render={({ error, props }) => {
            // if there was an error
            if (error) {
                throw new Error(error)
            }

            // if we are still loading
            if (!props) {
                return <Loader name="dots" />
            }

            // we're done with the query
            return <BarContent army={props.node} />
        }}
    />
)

export default ArmyDetailAppBar
