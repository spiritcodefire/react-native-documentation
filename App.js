import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from "./components/screens-exemple/DetailsScreen"
import HomeScreen from "./components/Home"
import CreatePostScreen from "./components/screens-exemple/CreatePostScreen"
import FlexInline from "./components/screens-exemple/FlexInline"
import StyleSheetTest from "./components/screens-exemple/StyleSheetTest"
import JsxCours22 from "./components/screens-exemple/JsxCours22"
import Children24 from "./components/screens-exemple/Children24"
import ComponentButton from "./components/screens-exemple/ComponentButton"
import TextInput from "./components/screens-exemple/TextInput"
import MapScrollView from "./components/screens-exemple/MapScrollView"
import MapFlatList from "./components/screens-exemple/MapFlatList"
import ExempleScreen from "./components/screens-exemple/HomeScreen"
import ShoppingListHome from "./components/shopping-list/HomeShopping"
import Intro from "./components/shopping-list/Intro"
import ShoppingScrollView from "./components/shopping-list/ScrollView"
import FlatListShopping from "./components/shopping-list/FlatListShopping"
import PassageFonction from "./components/shopping-list/PassageFonctionProps"

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        
        <Stack.Screen name="ExempleScreen" component={ExempleScreen} />
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

        <Stack.Screen name="ShoppingList" component={ShoppingListHome} />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="ShoppingScrollView" component={ShoppingScrollView} />
        <Stack.Screen name="ShoppingFlatList" component={FlatListShopping} />
        <Stack.Screen name="PassageFonction" component={PassageFonction} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;