import { StyleSheet, View, ScrollView,Text, FlatList,Image, TouchableOpacity} from 'react-native'
import AllData from './AllData'
import React, { useEffect, useState } from 'react'
import AutoCarousel from './AutoCarousel'
import { TextInput } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const ProductDetails = ({ route }) => {

  const[URIS,setURLs]=useState([]);

    const { productId } = route.params

    const images = [
      { id: 1, uri: 'https://www.allrecipes.com/thmb/RxreNop4KcxV0GGgb2zAEZo_D6c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/44410taco-pizzafabeveryday4x3-01863597aa224c32b35b970b5b744b20.jpg' },
      { id: 2, uri: 'https://www.allrecipes.com/thmb/RxreNop4KcxV0GGgb2zAEZo_D6c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/44410taco-pizzafabeveryday4x3-01863597aa224c32b35b970b5b744b20.jpg' },
      { id: 3, uri: 'https://www.allrecipes.com/thmb/RxreNop4KcxV0GGgb2zAEZo_D6c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/44410taco-pizzafabeveryday4x3-01863597aa224c32b35b970b5b744b20.jpg' },
  
      { id: 1, uri: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/7/24/1374663182669/Coca-Cola-logo--008.jpg?width=465&dpr=1&s=none' },
      { id: 2, uri: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/7/24/1374663182669/Coca-Cola-logo--008.jpg?width=465&dpr=1&s=none' },
      { id: 3, uri: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/7/24/1374663182669/Coca-Cola-logo--008.jpg?width=465&dpr=1&s=none' },
  
      { id: 1, uri: 'https://www.allrecipes.com/thmb/RxreNop4KcxV0GGgb2zAEZo_D6c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/44410taco-pizzafabeveryday4x3-01863597aa224c32b35b970b5b744b20.jpg' },
      { id: 2, uri: 'https://www.allrecipes.com/thmb/RxreNop4KcxV0GGgb2zAEZo_D6c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/44410taco-pizzafabeveryday4x3-01863597aa224c32b35b970b5b744b20.jpg' },
      { id: 3, uri: 'https://www.allrecipes.com/thmb/RxreNop4KcxV0GGgb2zAEZo_D6c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/44410taco-pizzafabeveryday4x3-01863597aa224c32b35b970b5b744b20.jpg' },

      { id: 1, uri: 'https://www.allrecipes.com/thmb/RxreNop4KcxV0GGgb2zAEZo_D6c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/44410taco-pizzafabeveryday4x3-01863597aa224c32b35b970b5b744b20.jpg' },
      { id: 2, uri: 'https://www.allrecipes.com/thmb/RxreNop4KcxV0GGgb2zAEZo_D6c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/44410taco-pizzafabeveryday4x3-01863597aa224c32b35b970b5b744b20.jpg' },
      { id: 3, uri: 'https://www.allrecipes.com/thmb/RxreNop4KcxV0GGgb2zAEZo_D6c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/44410taco-pizzafabeveryday4x3-01863597aa224c32b35b970b5b744b20.jpg' },
    ];
    
    const getUrl=(id)=>{
      const filteredImages = images.filter(image => image.id === id);
      const urls = filteredImages.map(image => image.uri); 
      setURLs(urls);
    }

    useEffect(()=>{
      
    getUrl(productId)
    },[])

    const chunkArray = (arr, chunkSize) => {
      const result = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
        result.push(arr.slice(i, i + chunkSize));
      }
      return result;
    };
    

    return (
      
         <ScrollView>
          <View>
          <AutoCarousel id={productId}/>
          </View>

          <View>
      <FlatList
            data={AllData}
            renderItem={({ item }) => {
              if (item.id === productId) {
                return (
                  <View style={styles.description}>

                    <Text style={styles.textdecoration}>{item.description}</Text>
                    <Text style={styles.pridecoration}>{item.price} Only </Text>

                   
                    <View style={styles.datashow}>
                    <Text style={styles.itmenMar}><MaterialIcons name="star-rate" size={24} color="black" /> {item.rating}</Text>
                    <Text style={styles.itmenMar}><MaterialCommunityIcons name="truck-delivery-outline" size={24} color="black" />  Fast delivery</Text>
                    <Text style={styles.itmenMar}><Feather name="clock" size={24} color="black" />   Fast Time</Text>
                    <Text style={styles.itmenMar}><Ionicons name="magnet-outline" size={24} color="black" /></Text>
                    </View>

                    <Text style={styles.pridecoration}>
                    Craft your culinary masterpiece
                    name, describe, price, upload, and submit delightful dishes in our app effortlessly.
                    </Text>

                  </View>
                );
              } 
            }}
          />
</View>

<View style={styles.blackBar}>

</View>

<View style={styles.dataAlign}>
  {chunkArray(URIS, 2).map((chunk, index) => (
    <View key={index} style={{ flexDirection: 'row' }}>
      {chunk.map((item) => (
        <View key={item.id} style={styles.horizontalScroll}>
          <Image source={{ uri: item }} style={styles.imageDesign} />
          <TouchableOpacity>
            <Text style={styles.buttonItems}>Order Now </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  ))}
</View>
            
        </ScrollView>
    )
}

export default ProductDetails

const styles = StyleSheet.create({
  blackBar:{
    backgroundColor:'rgb(0, 0, 0)',
    height:5
  },
    contentContainer: {
        padding: 20,
    },
    dataAlign:{
       alignItems:'center',
       backgroundColor:'rgb(255, 250, 205)'
    },
    buttonItems:{
      textAlign:'center',
      fontSize:20,
      backgroundColor:'red',
      margin:20,
      borderRadius:20,
      color:'rgb(245, 245, 220)',
      fontWeight:'bold',
      padding:5
    },
    description:{
      width:'auto',
      height:300,
      backgroundColor:'rgb(255, 255, 224)'
    },
    textdecoration:{
      fontWeight:'bold',
      fontSize:30,
      textAlign:'center',
      backgroundColor:'orange'
    },
    pridecoration:{
      fontWeight:'bold',
      fontSize:25,
      marginLeft:12,
      marginTop:10
    },
    datashow:{
      flexDirection:'row',
    },
    itmenMar:{
      margin:12
    } , imageDesign: {
      height: 120,
      width: 105,
      marginLeft:'20%',
      marginTop:'5%',
      borderRadius:15
    },
    horizontalScroll: {
      height: 235,
      width: 175,
      padding: 5,
      margin: 10,
      backgroundColor: 'rgb(154, 205, 50)',
      borderRadius:25,
      shadowOpacity: 0.25, 
      shadowRadius: 3.84,
      elevation: 5,
      marginVertical: 10
    }
})
