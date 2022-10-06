import  React, {useState} from 'react';
import { Button, View, Text,StyleSheet, TextInput } from 'react-native';


export default function Intro() {

    const [product, setProduct] = useState('')
    const [myProduct, setMyProduct] = useState([])

    const inputHandler = (val) =>{
       
        setProduct(val)
        // ici on recupere la val qu'on a prise avec le TextInput
    }

    const submitHandler = () =>{
        // ici on va demander a mon array vide de stocker son ancienne valeur + la nouvelle valeur
        setMyProduct( (currentmyProduct) => [...currentmyProduct, product] )    
        
        setProduct('') // permet de vider l'input
        // console.log("myProduct",myProduct)
    }
    console.log("myProduct",myProduct)
    // AUTRE FACON DECRIRE CETTE FONCTION TRES COOL CAR ON RECUPERE LA VALEUR COURANTE
    // const submitHandler = () =>{
    //     setMyProduct( (currentmyProduct) => {
    //         console.log("currentmyProduct",currentmyProduct)
    //         return(  [...currentmyProduct, product])
    //     })
    //     console.log("myProduct",myProduct)
    // }


  return (
    <View style={styles.container}>
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
        <View style={styles.items}>
            {
                myProduct.map( (product, index) => <Text style={styles.elements} key={index} >{product}</Text> )
            }
        </View>
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


