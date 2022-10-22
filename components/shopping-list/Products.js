import  React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, Pressable } from 'react-native';


const Products = ({name, id}) =>{

  return (
    <TouchableOpacity 
      // c'est une facon de faire un hover, dés qu'on touche , il y'a un changement d'opacité
      activeOpacity={0.2} 
      style={{backgroundColor: "red"}} 
      onPress={()=> console.log('cliqué TouchableWithoutFeedback', id) } 
    >
      <View style={styles.items} >
          <Text style={styles.elements}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const ProductsPressable = ({name, id, deleteProduct}) =>{

  // alternative interressante permettant de faire un hover qui change de couleur

  return (
    <Pressable 
      // permet de déclencer uniquement lorsqu'un bouton est déclenché longtemps
      onLongPress={()=> deleteProduct(id)}
      activeOpacity={0.2} 
      style={{backgroundColor: "red"}} 
      onPress={()=> console.log("hello") } 
      underlayColor="yellow"
    >
      <View style={styles.items} >
          <Text style={styles.elements}>{name}</Text>
      </View>
    </Pressable>
  );
}
const ProductshighLight = ({name, id}) =>{

  // alternative interressante permettant de faire un hover qui change de couleur

  return (
    <TouchableHighlight 
      // c'est une facon de faire un hover, dés qu'on touche , il y'a un changement d'opacité
      activeOpacity={0.2} 
      style={{backgroundColor: "red"}} 
      onPress={()=> console.log('cliqué TouchableWithoutFeedback', id) } 
      underlayColor="yellow"
    >
      <View style={styles.items} >
          <Text style={styles.elements}>{name}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
    items : { marginTop : 10 },
    elements : { backgroundColor: "#ffb6c1",padding : 20, fontSize: 17, marginVertical: 6 }
})

export default ProductsPressable
