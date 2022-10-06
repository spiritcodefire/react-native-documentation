import { View, StyleSheet, Button,Text } from 'react-native'
import React, {useState} from 'react'


export default function ComponentButton() {

    const obj = {
        name : "spiderman",
        age : 30
    }
    const [name, setName] = useState("Moché")
    const [info, setInfo] = useState(obj)

    const handlePressName = (arg) => {
        setName(arg)
    }
    const handlePressSpiderman = () => {
        setInfo({
            name : "Batman",
            age : 37
        })
    }

  return (
    <View style={styles.wrapper}>
        <View>
            <Text style={styles.textTwo}>{name}</Text>
        </View>
        
        <View>
            <Button
                title="spider man et autre delire"
                color="#841584"
                accessibilityLabel="Boutton permettant de mettre a jour le dom pour changer le nom en elie"
                onPress={() => handlePressName('elie')}
            />
        </View>

        <View>
            <Text style={styles.textTwo}>{info.name}</Text>
        </View>

        <View>
            <Text style={styles.textTwo}>{info.age}</Text>
        </View>    

        <View>
            <Button
                title="Cliquez Pour changer de nom"
                color="#841584"
                accessibilityLabel="Boutton permettant de mettre a jour le dom pour changer le nom en elie"
                onPress={handlePressSpiderman}
            />
        </View>
    </View>

  )
}

const styles = StyleSheet.create({
    wrapper : {  border: "1px blue solid", alignItems: "center", height: "80vh"},
    elements: {backgroundColor: "green", margin: "1.25rem", border: "2px solid black"},
    text : { padding: "1rem"},
    descriptionH1: { padding: "1rem", fontWeight: "bold", textAlign: "center"},
    textTwo : { fontSize: 20, fontWeight: "bold"  }

})