// external imports
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-native'
// local imports
import CodexList from './CodexList'

export default () => (
    <Switch>
        <Route path="/manage/codices" render={() => <CodexList />} />
        <Route render={() => <Redirect to="/manage/codices" />} />
    </Switch>
)
