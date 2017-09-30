// external imports
import React from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import _ from 'lodash'
// local imports
import { CardPlaceholder } from '..'

const CardGrid = ({style, children, nCols=3, ...unused}) => (
  <ScrollView {...unused} style={[style, styles.container]}>
    {_.chunk(children, nCols).map((row, i) => (
      <View style={styles.row} key={`grid-row-${i}`}>
        {row.map((child, i) => (
          <View style={i === row.length - 1 ? styles.lastCard : styles.cardWrapper}>
            {child}
          </View>
        ))}
        {[...new Array(nCols - row.length)].map(() => (
          <CardPlaceholder style={styles.cardWrapper}/>
        ))}
      </View>
    ))}
  </ScrollView>
)


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    padding: 40,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cardWrapper: {
    flex: 1,
    marginRight: 40,
    marginBottom: 40,
  },
  lastCard: {
    flex: 1,
    marginBottom: 40,
  }
})

export default CardGrid
