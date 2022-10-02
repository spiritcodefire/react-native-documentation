import { View, StyleSheet, Button,Text, c } from 'react-native'
import React, {useState} from 'react'


export default function MapFlatList() {

    const obj = [
        { id : '1',  name : 'stan',  age : 45 },
        { id : '2',  name : 'elie',  age : 33 },
        { id : '3',  name : 'Naomie',  age : 4 },
        { id : '4',  name : 'Angelina',  age : 32 },
    ]

    
    const [family, setFamilly] = useState(obj)

    const renderItem = ({item}) => (
        <View style={styles.viewList}>

                <Text style={styles.text}>
                    <Text style={styles.textBold}>Nom : </Text> 
                    {item.name}
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.textBold}>age : </Text> 
                    {item.age}
                </Text>
        
        </View>
    )
  
  return (
    <View style={styles.wrapper} >
        <Text>FlatList est ideal an cas de grande liste, car elle ne charge que les elements qui sont sur l'écran</Text>
        <MapFlatList
            data={family}
            renderItem={renderItem}
            keyExtractor={ item => item.id }
        />
    </View>

  )
}

const styles = StyleSheet.create({
   wrapper : { padding  : 20 } , 
   viewList : { marginTop: 30, backgroundColor : "purple", padding: 19},
   text : { color : "white", fontSize : 22},
   textBold : { fontWeight : "bold"},
})