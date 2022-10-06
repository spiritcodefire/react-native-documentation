import * as React from 'react';
import { Button, View, Text } from 'react-native';


export default function HomeScreen({ route, navigation }) {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      console.log("action declenché")
    }
  }, [route.params?.post]);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{margin: "1rem"}}>Home Shopping</Text>
      

      <View style={{margin: "1rem"}}>
        <Button
          title="Intro"
          onPress={() => navigation.navigate('Intro')}
        />
      </View>


    </View>
  );
}