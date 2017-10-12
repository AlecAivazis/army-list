// external imports
import React from 'react'
import { Text, StyleSheet } from 'react-native'

const TableHeaderText = ({ style, ...unused }) => (
    <Text style={[styles.container, style]} {...unused} />
)

const styles = StyleSheet.create({
    container: {
        fontSize: 16
    }
})

export default TableHeaderText
