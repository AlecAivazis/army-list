// external imports
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const CardPlaceholder = ({style, ...unused}) => (
  <View style={[styles.container, style]}/>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default CardPlaceholder
