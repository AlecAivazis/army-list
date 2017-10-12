// external imports
import React from 'react'
import { Text } from 'react-native'
import { createFragmentContainer, graphql } from 'react-relay'

const ModelSave = ({ model }) => {
    return <Text>{model.armorSave}</Text>
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
