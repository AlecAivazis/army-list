// external imports
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { createFragmentContainer, graphql } from 'react-relay'
import {
    Table,
    TableHeader,
    TableHeaderCell,
    TableRow,
    TableCell,
    TableHeaderText,
    TableText
} from '~/quark'
// local imports
import { ModelSave } from '~/components'
import styles from './styles'

const HeaderCell = ({ style, ...unused }) => (
    <TableHeaderCell style={[styles.cell, style]}>
        <TableHeaderText {...unused} />
    </TableHeaderCell>
)

const NameHeader = ({ ...unused }) => (
    <HeaderCell style={styles.nameCell} {...unused} />
)

const Cell = ({ style, ...unused }) => (
    <TableCell style={[styles.cell, style]}>
        <TableText {...unused} />
    </TableCell>
)

const NameCell = ({ ...unused }) => <Cell style={styles.nameCell} {...unused} />

const CodexModelSummary = ({ models }) => (
    <Table style={styles.content}>
        <TableHeader>
            <NameHeader>Name</NameHeader>
            <HeaderCell>Pts</HeaderCell>
            <HeaderCell>PL</HeaderCell>
            <HeaderCell>M</HeaderCell>
            <HeaderCell>S</HeaderCell>
            <HeaderCell>T</HeaderCell>
            <HeaderCell>W</HeaderCell>
            <HeaderCell>A</HeaderCell>
            <HeaderCell>Ld</HeaderCell>
            <HeaderCell>Save</HeaderCell>
        </TableHeader>
        <ScrollView>
            <View style={{ flex: 1 }}>
                {models.edges.map(({ node: model }) => (
                    <TableRow>
                        <NameCell>{model.name}</NameCell>
                        <Cell>{model.pointCost}</Cell>
                        <Cell>{model.powerLevel}</Cell>
                        <Cell>{model.movement}"</Cell>
                        <Cell>{model.strength}</Cell>
                        <Cell>{model.toughness}</Cell>
                        <Cell>{model.wounds}</Cell>
                        <Cell>{model.attacks}</Cell>
                        <Cell>{model.leadership}</Cell>
                        <Cell>
                            <ModelSave model={model} />
                        </Cell>
                    </TableRow>
                ))}
            </View>
        </ScrollView>
    </Table>
)

export default createFragmentContainer(
    CodexModelSummary,
    graphql`
        fragment CodexModelSummary_models on ModelConnection {
            edges {
                node {
                    name
                    pointCost
                    powerLevel
                    movement
                    strength
                    toughness
                    wounds
                    attacks
                    leadership
                    ...ModelSave_model
                }
            }
        }
    `
)
