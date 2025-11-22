import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const EmpityTasks = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You have no pending tasks!</Text>
      <Text style={styles.subtext}>Tap the + to add a new one.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555'
  },
  subtext: {
    fontSize: 14,
    color: '#888',
    marginTop: 5
  }
});

export default EmpityTasks