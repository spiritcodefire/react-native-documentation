import  React, {useState} from 'react';
import { Button, View, Text,StyleSheet, TextInput, FlatList } from 'react-native';
import Products from "./ProductsFonction"
import AddProduct from './AddproductFonction';


export default function Intro() {


    const [myProduct, setMyProduct] = useState([])


    const submitHandler = (product) =>{
        // ici on va demander a mon array vide de stocker son ancienne valeur + la nouvelle valeur
        const idString =  Date.now().toString()
        // en mettrant d'abord l'object ensuite currentproduct, je met l'object inserer en premiere position et pas en derniere
        setMyProduct( (currentmyProduct) => [{key: idString , name : product},  ...currentmyProduct] )    
        
    }

  return (
    <View style={styles.container}>

        <Text>L'interet du flat list c'est qu'il ne charge les elements du bas que si il lisible, c'est plus optimisé que ScrollView</Text>
        
        <AddProduct submitHandler={submitHandler} />

        <FlatList
            data={myProduct}
            renderItem={({item}) => <Products name={item.name} />} 
        />
           
    </View>
  );
}

const styles = StyleSheet.create({
    container : { padding: 40, paddingTop: 60 },
    inputContainer : { flexDirection: "row" },
    textInput : { borderColor: 'grey', borderWidth: 1, padding : 5, paddingLeft: 9, fontSize: 18, flexGrow: 1  },
    items : { marginTop : 10 },
    elements : { backgroundColor: "#ffb6c1",padding : 20, fontSize: 17, marginVertical: 6 }
})


