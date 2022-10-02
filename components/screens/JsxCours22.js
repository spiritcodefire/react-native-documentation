import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function JsxCours22() {
  return (
    <View>
      <Text style={styles.descriptionH1} >Jsx Cours 22</Text>
      <View style={styles.wrapper} >
        <View style={styles.elements}>
          <Text style={styles.text} >One</Text>
        </View>
        <View style={styles.elements}>
          <Text style={styles.text} >Two</Text>
        </View>
        <View style={styles.elements}>
          <Text style={styles.text} >Three</Text>
        </View>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
    wrapper : { flexDirection: "row", justifyContent: "center", border: "1px blue solid", alignItems: "center", height: "80vh"},
    elements: {backgroundColor: "green", margin: "1.25rem", border: "2px solid black"},
    text : {fontFamily: 'cochin', padding: "1rem"},
    descriptionH1: {fontFamily: 'cochin', padding: "1rem", fontWeight: "bold", textAlign: "center"}

})