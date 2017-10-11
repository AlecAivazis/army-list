// external imports
import React from 'react'
import { View } from 'react-native'
import { NativeRouter, Route, Switch, Redirect } from 'react-router-native'
// local imports
import {
    ArmyList,
    ArmyDetail,
    ManageData,
    CodexList,
    CodexDetail
} from './views'

const App = () => (
    <NativeRouter>
        <View style={{ width: '100%', height: '100%', display: 'flex' }}>
            <Switch>
                <Route
                    path="/armies/:id"
                    render={({ match }) => <ArmyDetail id={match.params.id} />}
                />
                <Route path="/armies" render={() => <ArmyList />} />
                <Route
                    path="/codex/:id"
                    render={props => <CodexDetail {...props} />}
                />
                <Route path="/codex" render={() => <CodexList />} />
                <Route>{() => <Redirect to="/armies" />}</Route>
            </Switch>
        </View>
    </NativeRouter>
)

export default App
