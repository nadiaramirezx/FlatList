import { View, Text , FlatList, StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';

//datos a recibir de la APi

interface APi {
   userId: number;
   id: number;
   title: string;
   body: string;

}


const Lista = () => {
   const [data, setData] = useState<APi[]>([]); //definir el tipo del estado data.

   useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
         setData(response.data); //si la APi responde, muestra el contenido
      })
      .catch(error =>{
         console.error(error);
      })
   }, []);

   const renderItem = ({item}: {item: APi}) => (   //item es de tipo APi dentro de la función renderItem.
      <View style={styles.item}>
         <Text style= {styles.title}> {item.title} </Text>
         <Text>{item.body}</Text>

      </View>
   )


  return (
    <SafeAreaView>
      <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem} 
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
   item:{
      padding:10,
      borderBottomWidth:1,
      borderBottomColor: '#ccc',
      backgroundColor:'grey',
      marginBottom:4,
      borderRadius:8,
      
      
     
   },
   title:{
      fontWeight:'bold',
      color:'white',
      marginBottom:3,
   },
   
});

export default Lista