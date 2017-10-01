// external imports
import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { withRouter } from "react-router-native"
import { QueryRenderer, graphql } from "react-relay"
// local imports
import environment from "~/App/environment"
import ArmyDetailContent from "./ArmyDetail"

type Props = {
    id: string,
    closeView: () => void
}

class ArmyDetail extends React.Component<Props> {
    componentDidMount() {
        this.props.history.push(`/army/${this.props.id}`)
    }

    componentWillUnmount() {
        this.props.history.push("/armies/")
    }

    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                    query ArmyDetailQuery($id: ID!) {
                        node(id: $id) {
                            ... on Army {
                                ...ArmyDetail_army
                            }
                        }
                    }
                `}
                variables={{
                    id: this.props.id
                }}
                render={({ props, error }) => {
                    // if there was an error
                    if (error) {
                        throw new Error(error)
                    }
                    // if we are still loading
                    if (!props) {
                        return <Text>loading...</Text>
                    }

                    // we've finished querying for the specific army
                    return (
                        <ArmyDetailContent
                            army={props.node}
                            close={this.props.closeView}
                        />
                    )
                }}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default withRouter(ArmyDetail)
