// external imports
import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { withRouter } from "react-router-native"

class ArmyDetail extends React.Component {
    componentDidMount() {
        this.props.history.push("/army/1")
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>army detail</Text>
            </View>
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
