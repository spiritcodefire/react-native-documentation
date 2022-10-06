import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Person = ({name, age, children}) => {
    console.log("children", children)
    return(
        <View>
            {
                age ? 
                <Text style={styles.textTwo}> Je suis : {name} | age: {age}| {children}  </Text>
                :
                <Text style={styles.textTwo}> Je suis : {name} | {children} </Text>

            }
        </View>
    )
}

export default function Children24() {
  return (
    <View style={styles.wrapper}>
        <Person name="Roger" >Alien</Person>
        <br />
        <Person name="Stan" >Humain</Person>
        <br />
        <Person name="Steev" age="14" >Chien</Person>
     
    </View>

  )
}

const styles = StyleSheet.create({
    wrapper : { flexDirection: "row", justifyContent: "center", border: "1px blue solid", alignItems: "center", height: "80vh"},
    elements: {backgroundColor: "green", margin: "1.25rem", border: "2px solid black"},
    text : {fontFamily: 'cochin', padding: "1rem"},
    descriptionH1: {fontFamily: 'cochin', padding: "1rem", fontWeight: "bold", textAlign: "center"}

})