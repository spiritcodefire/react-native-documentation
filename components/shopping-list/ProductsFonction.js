import  React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Products = ({name}) =>{

  return (
    <View style={styles.items}>
        <Text style={styles.elements}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    items : { marginTop : 10 },
    elements : { backgroundColor: "#ffb6c1",padding : 20, fontSize: 17, marginVertical: 6 }
})


export default Products
