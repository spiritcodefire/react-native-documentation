import React, { useState } from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";

const AddProduct = ({submitHandler}) => {
    
    const [product, setProduct] = useState('')
    const inputHandler = (val) =>{
       
        setProduct(val)
        // ici on recupere la val qu'on a prise avec le TextInput
    }

    const handleClick = () =>{
      submitHandler(product)
      setProduct('')
    }


    

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Nouveau Produit"
          onChangeText={inputHandler}
          value={product}
        />
        <Button title="valider" onPress={handleClick} />
        {/*   en passant product en argument, je transmet mon state local  la fonction qui est au dessus, et donc je pourrais le récupérer plus haut dans la hierarchie  */}
        {/* <Button title="valider" onPress={submitHandler(text)} /> si j'ouvre les parentheses, au moment du chargement du component, la fonction va s'enclencer
        pour eviter ce problème , on lui passe une fonction qui invoquera cette fonction
        */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
 
    inputContainer : { flexDirection: "row" },
    textInput : { borderColor: 'grey', borderWidth: 1, padding : 5, paddingLeft: 9, fontSize: 18, flexGrow: 1  },
})

export default AddProduct;
