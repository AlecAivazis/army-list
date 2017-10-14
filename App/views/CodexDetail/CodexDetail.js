// external imports
import React from 'react'
import { Text } from 'react-native'
import { createFragmentContainer, graphql } from 'react-relay'
import { TabView } from 'quark-native'
// internal imports
import styles from './styles'
import { App, Title } from '~/components'
import ModelSummary from './CodexModelSummary'
import SpecialRuleSummary from './CodexSpecialRuleSummary'
import Wargear from './CodexWargearSummary'

const CodexDetail = ({ codex }) => {
    // a mapping of names of views to the component to mount
    const tabs = {
        Models: <ModelSummary codex={codex} />,
        'Special Rules': <SpecialRuleSummary codex={codex} />,
        Wargear: <Wargear codex={codex} />
    }

    return (
        <App header={<Title>{codex.name}</Title>}>
            <TabView data={Object.keys(tabs).map(key => ({ key }))}>
                {({ key }) => tabs[key]}
            </TabView>
        </App>
    )
}

export default createFragmentContainer(
    CodexDetail,
    graphql`
        fragment CodexDetail_codex on Codex {
            name
            id
            ...CodexModelSummary_codex
        }
    `
)
