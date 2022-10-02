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
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>

      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <View style={{margin: "1rem"}}>
        <Button
          title="Exemple flex style inline"
          onPress={() => navigation.navigate('FlexInline')}
        />
      </View>
      <View style={{margin: "1rem"}}>
        <Button
          title="StyleSheet"
          onPress={() => navigation.navigate('StyleSheet')}
        />
      </View>
      <View style={{margin: "1rem"}}>
        <Button
          title="JsxCours22"
          onPress={() => navigation.navigate('JsxCours22')}
        />
      </View>
      <View style={{margin: "1rem"}}>
        <Button
          title="Children24"
          onPress={() => navigation.navigate('Children24')}
        />
      </View>
      <View style={{margin: "1rem"}}>
        <Button
          title="ComponentButton"
          onPress={() => navigation.navigate('ComponentButton')}
        />
      </View>
      <View style={{margin: "1rem"}}>
        <Button
          title="TextInput"
          onPress={() => navigation.navigate('TextInput')}
        />
      </View>
      <View style={{margin: "1rem"}}>
        <Button
          title="Map avec ScrollView"
          onPress={() => navigation.navigate('MapScrollView')}
        />
      </View>
      <View style={{margin: "1rem"}}>
        <Button
          title="Map avec MapFlatList"
          onPress={() => navigation.navigate('MapFlatList')}
        />
      </View>
    </View>
  );
}