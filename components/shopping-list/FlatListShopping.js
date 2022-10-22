import  React, {useState} from 'react';
import { Button, View, Text,StyleSheet, TextInput, FlatList, Modal } from 'react-native';
import Products from "./Products"
import AddProduct from './Addproduct';


export default function Intro() {


    const [myProduct, setMyProduct] = useState([])
    const [showModal, setShowModal] = useState(false)


    const submitHandler = (product) =>{
            console.log("product.length", product.length)
        if (product.length > 1) {
            // ici on va demander a mon array vide de stocker son ancienne valeur + la nouvelle valeur
            const idString =  Date.now().toString()
            // en mettrant d'abord l'object ensuite currentproduct, je met l'object inserer en premiere position et pas en derniere
            setMyProduct( (currentmyProduct) => [{key: idString , name : product},  ...currentmyProduct] )                
        }else {
            setShowModal(true)
        }
    }

    const deleteProduct = (key) => {
        setMyProduct( currentmyProduct => {
            return currentmyProduct.filter( product => product.key != key)
        } )
    }
    console.log("myProduct",myProduct)

  return (
    <View style={styles.container}>
        <Modal
            visible={showModal}
            onRequestClose={()=> setShowModal(false) }   
        >
           <View style={styles.modalContainer}>
                <View style={styles.modalContent} >
                    <View style={styles.modalHeader} >
                        <Text>Oups</Text>
                    </View>
                    <View style={styles.modalHeader} >
                        <Text style={styles.modalHeader} >merci d'indiquer plus qu'un seul caractère</Text>
                    </View>
                </View>
            </View> 
            
        </Modal>
        <Text>L'interet du flat list c'est qu'il ne charge les elements du bas que si il lisible, c'est plus optimisé que ScrollView</Text>
        <AddProduct submitHandler={submitHandler} />

        <FlatList
            data={myProduct}
            renderItem={({item}) =>   <Products id={item.key} name={item.name} deleteProduct={deleteProduct}   />
        } />
           
    </View>
  );
}

const styles = StyleSheet.create({
    container : { padding: 40, paddingTop: 60 },
    modalContainer : {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center", 
        backgroundColor: "rgba(0,0,0,0.2)",
    },
    modalContent : {
        backgroundColor: "#fff", 
        width: "90%", 
        height:350,
        borderRadius: 15,
        alignItems: "center" 
    },
    modalHeader : {
        backgroundColor : "grey",
        width: "100%", 
        padding: 16, 
        alignItems: "center",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomWidth: 1, 
        borderBottomColor : "lightgray"
    }, 
    modalHeaderText : {
        color: "grey",
        fontSize: 17
    },
    modalBodyText : {
        color: "grey",
        fontSize: 17
    },
})


