import { View, Text } from 'react-native'
import React from 'react'

export default function FlexInline() {
  return (
    <View>
        <Text style={{fontFamily: 'cochin', padding: "1rem", fontWeight: "bold", textAlign: "center"}} > Exemple de flex avec le style integré dans le jsx </Text>

        <View style={{ flexDirection: "row", justifyContent: "center", border: "1px blue solid", alignItems: "center", height: "80vh"}} >

            <View style={{backgroundColor: "green", margin: "1.25rem", border: "2px solid black"}}>
                <Text style={{fontFamily: 'cochin', padding: "1rem"}} >One</Text>
            </View>
            <View style={{backgroundColor: "green", margin: "1.25rem"}}>
                <Text style={{fontFamily: 'cochin', padding: "1rem"}} >Two</Text>
            </View>
            <View style={{backgroundColor: "green", margin: "1.25rem"}}>
                <Text style={{fontFamily: 'cochin', padding: "1rem"}} >Three</Text>
            </View>

        </View>

    </View>

  )
}