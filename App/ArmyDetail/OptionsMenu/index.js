// @flow
// external imports
import React from "react"
import { Animated } from "react-native"
import { Button, Card } from "quark-native"
// local imports
import styles from "./styles"

class OptionsMenu extends React.PureComponent {
    state: {
        visible: boolean,
        opacity: Animated.Value
    } = {
        visible: false,
        opacity: new Animated.Value(0)
    }

    // start the opacity animation
    _showMenu = () =>
        Animated.spring(this.state.opacity, {
            toValue: 1
        }).start()

    _hideMenu = () =>
        Animated.spring(this.state.opacity, {
            toValue: 0
        }).start()

    componentWillReceiveProps({ visible }: { visible: boolean }) {
        // if we are hiding the menu and its currently open
        if (!visible && this.state.visible) {
            // hide the menu
            this._hideMenu()
        } else if (visible && !this.state.visible) {
            // otherwise if need to show the menu and its currently hidden
            this._showMenu()
        }
        // regardless, update the state to match
        this.setState({ visible })
    }

    render = () => (
        <Animated.View
            style={[{ opacity: this.state.opacity }, styles.container]}
        >
            <Card style={{ flex: 1 }}>
                <Button style={styles.button}>hello</Button>
                <Button style={styles.button}>hello</Button>
                <Button style={styles.lastButton}>hello</Button>
            </Card>
        </Animated.View>
    )
}

export default OptionsMenu
