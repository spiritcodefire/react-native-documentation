import { View, StyleSheet, Button,Text, ScrollView } from 'react-native'
import React, {useState} from 'react'


export default function MapScrollView() {

    const obj = [
        { id : 1,  name : 'stan',  age : 45 },
        { id : 2,  name : 'elie',  age : 33 },
        { id : 3,  name : 'Naomie',  age : 4 },
        { id : 4,  name : 'Angelina',  age : 32 },
    ]

    const [family, setFamilly] = useState(obj)
  
  return (
    <View style={styles.wrapper} >
        <Text>ScrollView a pour particularité de charger tous les élements de la liste. ( alors que FlatList est plus optimisé pour de très grande liste</Text>
        <ScrollView>
        {
            family.map((member) => {
                    return(
                        <View style={styles.viewList} key={member.id}>
                            <Text style={styles.text}>
                               <Text style={styles.textBold}>Nom : </Text> 
                                {member.name}
                            </Text>
                            <Text style={styles.text}>
                                <Text style={styles.textBold}>age : </Text> 
                                {member.age}
                            </Text>
                            
                        </View>
                    )
            })
        }
        </ScrollView>
    </View>

  )
}

const styles = StyleSheet.create({
   wrapper : { padding  : 20 } , 
   viewList : { marginTop: 30, backgroundColor : "purple", padding: 19},
   text : { color : "white", fontSize : 22},
   textBold : { fontWeight : "bold"},
})