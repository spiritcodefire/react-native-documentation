import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from "./components/screens/DetailsScreen"
import HomeScreen from "./components/screens/HomeScreen"
import CreatePostScreen from "./components/screens/CreatePostScreen"
import FlexInline from "./components/screens/FlexInline"
import StyleSheetTest from "./components/screens/StyleSheetTest"
import JsxCours22 from "./components/screens/JsxCours22"
import Children24 from "./components/screens/Children24"
import ComponentButton from "./components/screens/ComponentButton"
import TextInput from "./components/screens/TextInput"
import MapScrollView from "./components/screens/MapScrollView"
import MapFlatList from "./components/screens/MapFlatList"

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
        <Stack.Screen name="FlexInline" component={FlexInline} />
        <Stack.Screen name="StyleSheet" component={StyleSheetTest} />
        <Stack.Screen name="JsxCours22" component={JsxCours22} />
        <Stack.Screen name="Children24" component={Children24} />
        <Stack.Screen name="ComponentButton" component={ComponentButton} />
        <Stack.Screen name="TextInput" component={TextInput} />
        <Stack.Screen name="MapScrollView" component={MapScrollView} />
        <Stack.Screen name="MapFlatList" component={MapFlatList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;