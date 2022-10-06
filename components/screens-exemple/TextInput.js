import { View, StyleSheet, Button,Text,TextInput } from 'react-native'
import React, {useState} from 'react'


export default function Input() {

    const [state, setState] = useState({
        name : "inconnu", 
        age : "indiscret"
    })

  
  return (
    <View style={styles.wrapper} >
        <Text style={styles.styles }>Nom : { state.name }</Text>
        <TextInput 
            style={styles.textInput} 
            onChangeText={(val) => { setState({...state, name : val}) }}
            placeholder="indiquez votre nomm"
        />
        <Text style={styles.text }>age : {state.age}</Text>
        <TextInput 
            style={styles.textInput} 
            onChangeText={(val) => { setState({...state,age : val}) }}
            placeholder="indiquez votre age"
            keyboardType='numeric'
        />

    </View>

  )
}

const styles = StyleSheet.create({
   wrapper : { marginTop : 50, alignItems: "center", height: 200 } , 
   textInput : { height : 40, borderColor: "grey", borderWidth: 1, padding : 10, margin : 9, width : '90%'}, 
   text : {fontSize: 20}
})