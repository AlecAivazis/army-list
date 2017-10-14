// external imports
import React from 'react'
import { Text } from 'react-native'
import { createFragmentContainer, graphql } from 'react-relay'

const ModelSave = ({ model }) => {
    // the string representations of the saved
    const armorSave = `${model.armorSave}+`
    const invuln = `${model.invulnerableSave}++`

    // compute X+/Y++ given the data we have
    let body
    if (model.armorSave && model.invulnerableSave) {
        body = `${armorSave}/${invuln}`
    } else if (model.armorSave) {
        body = armorSave
    } else {
        body = invuln
    }

    return <Text>{body}</Text>
}

export default createFragmentContainer(
    ModelSave,
    graphql`
        fragment ModelSave_model on Model {
            armorSave
            invulnerableSave
        }
    `
)
