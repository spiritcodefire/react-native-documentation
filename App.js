import * as React from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from "./components/screens/DetailsScreen"
import HomeScreen from "./components/screens/HomeScreen"
import CreatePostScreen from "./components/screens/CreatePostScreen"

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;