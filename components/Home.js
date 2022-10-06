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
      <Text style={{margin: "1rem"}}>Welcome to home Page</Text>
      

      <Button
        title="Exemple-screen"
        onPress={() => navigation.navigate('ExempleScreen')}
      />

      <View style={{margin: "1rem"}}>
        <Button
          title="Shopping List"
          onPress={() => navigation.navigate('ShoppingList')}
        />
      </View>


    </View>
  );
}