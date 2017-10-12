// external imports
import React from 'react'
import { Text, StyleSheet } from 'react-native'

const TableText = ({ style, ...unused }) => (
    <Text style={[styles.container, style]} {...unused} />
)

const styles = StyleSheet.create({
    container: {
        fontSize: 14
    }
})

export default TableText
