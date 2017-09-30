// external imports
import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Title = ({ style, ...unused }) => (
  <Text style={[style, styles.container]} {...unused} />
)

const styles = StyleSheet.create({
  container: {
    fontSize: 16,
  }
})

export default Title
