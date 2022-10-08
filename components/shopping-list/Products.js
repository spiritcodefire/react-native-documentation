import  React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';


const Products = ({name}) =>{

  return (
    <TouchableWithoutFeedback onPress={()=> console.log('cliqué TouchableWithoutFeedback') } >
      <View style={styles.items} onPress={()=> console.log('cliqué View')    }>
          <Text style={styles.elements}>{name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    items : { marginTop : 10 },
    elements : { backgroundColor: "#ffb6c1",padding : 20, fontSize: 17, marginVertical: 6 }
})


export default Products
