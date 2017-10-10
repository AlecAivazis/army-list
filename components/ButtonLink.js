// external imports
import React from 'react'
import { withRouter } from 'react-router-native'
// local imports
import { Button } from 'quark-core'

const ButtonLink = withRouter(({ history, to, children, ...unused }) => (
    <Button {...unused} onPress={() => history.push(to)}>
        {children}
    </Button>
))

export default ButtonLink
