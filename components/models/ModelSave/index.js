// external imports
import React from 'react'
import { Text } from 'react-native'
import { createFragmentContainer, graphql } from 'react-relay'

const ModelSave = ({ model }) => {
    // the string representations of the saved
    const armorSave = `${model.armorSave}+`
    const invuln = `${model.invulnerableSave}++`

    // compute X+/Y++ given the data we have
    const body = do {
        if (model.armorSave && model.invulnerableSave) {
            ;`${armorSave}/${invuln}`
        } else if (model.armorSave) {
            armorSave
        } else {
            invuln
        }
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
