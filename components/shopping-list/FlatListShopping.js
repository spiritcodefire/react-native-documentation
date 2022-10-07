import  React, {useState} from 'react';
import { Button, View, Text,StyleSheet, TextInput, FlatList } from 'react-native';
// import Products from "./Products"


export default function Intro() {

    const [product, setProduct] = useState('')
    const [myProduct, setMyProduct] = useState([])

    const inputHandler = (val) =>{
       
        setProduct(val)
        // ici on recupere la val qu'on a prise avec le TextInput
    }

    const submitHandler = () =>{
        // ici on va demander a mon array vide de stocker son ancienne valeur + la nouvelle valeur
        const idString =  Date.now().toString()
        // en mettrant d'abord l'object ensuite currentproduct, je met l'object inserer en premiere position et pas en derniere
        setMyProduct( (currentmyProduct) => [{key: idString , name : product},  ...currentmyProduct] )    
        
        setProduct('') // permet de vider l'input
        // console.log("myProduct",myProduct)
    }
    console.log("myProduct",myProduct)

  return (
    <View style={styles.container}>
        <Text>L'interet du flat list c'est qu'il ne charge les elements du bas que si il lisible, c'est plus optimisé que ScrollView</Text>
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput}
                placeholder="Nouveau Produit"
                onChangeText={inputHandler}
                value={product}
            />
            <Button
                title='valider'
                onPress={submitHandler}
            />
        </View>

        <FlatList
            data={myProduct}
            renderItem={({item}) =>   <Text style={styles.elements}>{item.name}</Text>
        } />
           
       

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


