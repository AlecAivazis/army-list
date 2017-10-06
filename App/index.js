// external imports
import React from "react"
import { View } from "react-native"
import { NativeRouter, Route, Switch, Redirect } from "react-router-native"
// local imports
import ArmyList from "./ArmyList"
import ArmyDetail from "./ArmyDetail"

const App = () => (
    <NativeRouter>
        <View style={{ width: "100%", height: "100%", display: "flex" }}>
            <Switch>
                <Route exact path="/armies" render={() => <ArmyList />} />
                <Route
                    path="/armies/:id"
                    render={({ match }) => <ArmyDetail id={match.params.id} />}
                />
                <Route>{() => <Redirect to="/armies" />}</Route>
            </Switch>
        </View>
    </NativeRouter>
)

export default App
