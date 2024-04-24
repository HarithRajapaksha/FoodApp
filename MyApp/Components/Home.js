import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, TextInput } from 'react-native'
import React from 'react'
import AllData from './AllData'
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';


const Home = () => {

  const navigation=useNavigation();

  const presscat=(id)=>{
    navigation.navigate(`/products`,{productId:id});
  }

 
  return (
    <ScrollView>
        
       
        <View style={[styles.Searchbox,styles.outerView]}>
            
          <View style={searchBar.asembler}>
          <View style={searchBar.Main}>
             <TextInput placeholder='Search here' style={searchBar.Input}></TextInput>
          </View>
         
         <View style={searchBar.buttonP}>

         <TouchableOpacity style={searchBar.icon} >
         <EvilIcons name="search" size={3} color="black" />
       </TouchableOpacity>

         </View>

          </View>

        </View>

      {AllData.map(item => (

        <View key={item.id} style={[styles.container, styles.viewBackground]}>
          <TouchableOpacity onPress={()=>presscat(item.id)}>

            <View style={styles.menus}>
              <Text style={styles.textStyles}>{item.category}</Text>
              <Text>{item.description}</Text>
            </View>
          </TouchableOpacity>

          <ScrollView horizontal={true}>

            {AllData.map((mydata) => (

              <View key={mydata.id} style={styles.horizontalScroll}>


                <Text style={styles.hedings}>{mydata.name}</Text>

                <Image source={{ uri: mydata.image}} style={styles.imageDesign} />


<View>                  
                <Text style={styles.fontColour}>{mydata.price} Only</Text>
               
                <Text> <MaterialIcons name="star-rate" size={15} color="black" />  {mydata.rating}</Text>
                <Text> <MaterialIcons name="reviews" size={15} color="black" />  {mydata.reviews} Reviews</Text>
       
</View>
              </View>
            
            ))}

          </ScrollView>
        </View>
      ))}


    
<View style={styles.flatListstyle}>
<TouchableOpacity>
<FlatList
            data={AllData}
            renderItem={({ item }) => {
              if (item.id === 1) {
                return (
                  <View style={styles.horizontalScroll}>
                   
                    <Text style={styles.hedings}>{item.name}</Text>
                    <Image source={{ uri: item.image }} style={styles.imageDesign} />
                    <Text style={styles.secondoneColourprice}>{item.price} Only</Text>
                  </View>
                );
              } 
            }}
          />
</TouchableOpacity>

<TouchableOpacity>
<FlatList
            data={AllData}
            renderItem={({ item }) => {
              if (item.id === 2) {
                return (
                  <View style={styles.horizontalScroll}>
                  
                    <Text style={styles.hedings}>{item.name}</Text>
                    <Image source={{ uri: item.image }} style={styles.imageDesign} />
                    <Text style={styles.secondoneColourprice}>{item.price} Only</Text>
                  </View>
                );
              } 
            }}
          />
    </TouchableOpacity>      
</View>

<View style={styles.flatListstyle}>
  <TouchableOpacity>
<FlatList
            data={AllData}
            renderItem={({ item }) => {
              if (item.id === 3) {
                return (
                  <View style={styles.horizontalScroll}>
                  
                    <Text style={styles.hedings}>{item.name}</Text>
                    <Image source={{ uri: item.image }} style={styles.imageDesign} />
                    <Text style={styles.secondoneColourprice}>{item.price} only</Text>
                  </View>
                );
              } 
            }}
          />
</TouchableOpacity>

<TouchableOpacity>
<FlatList
            data={AllData}
            renderItem={({ item }) => {
              if (item.id === 2) {
                return (
                  <View style={styles.horizontalScroll}>
                    
                    <Text style={styles.hedings}>{item.name}</Text>
                    <Image source={{ uri: item.image }} style={styles.imageDesign} />
                    <Text style={styles.secondoneColourprice}>{item.price} Only</Text>
                  </View>
                );
              } 
            }}
          />
   </TouchableOpacity>       
</View>
    </ScrollView>
  )
}

export default Home

const searchBar=StyleSheet.create({
  asembler:{
    flexDirection:'row'
  },
  Main:{
    backgroundColor:'#FFF',
    width:250,
    height:50,
    borderWidth:1,
    borderColor:'#C0C0C0',
    borderTopLeftRadius:40,
    borderBottomLeftRadius:40,
    paddingTop:'1%'
  },
  Input:{
    marginLeft:10,
    marginTop:5
  },
  buttonP:{
    height:50,
    width:70,
    backgroundColor:'#FFF',
    borderWidth:1,
    borderBottomRightRadius:30,
    borderTopRightRadius:30,
    borderColor:'#C0C0c0',
    alignItems:'center',
  paddingTop:10
  },
  icon:{
    justifyContent:'center'
  }
})

const styles = StyleSheet.create({

  textStyles:{
    fontSize:20,
    fontWeight:'bold'
  },
  displayItemshori:{
    flexDirection:'row',
  },
  container: {
    marginLeft:10,
    marginRight:10,
    padding: 12,
    marginBottom: 2,
    marginTop:2,
    backgroundColor: 'rgb(255, 255, 224)',
    borderWidth: 2,
    borderRadius: 10,
  },
  viewBackground: {
    borderColor: 'yellow',
  },
  menus:{
    backgroundColor:'rgb(255, 160, 122)',
    margin:5,
    width:340,
    height:65,
    padding:5,
    borderRadius:20,
},
  horizontalScroll: {
    height: 235,
    width: 175,
    padding: 5,
    margin: 2.5,
    backgroundColor: 'rgb(154, 205, 50)',
    borderRadius:25,
    shadowOpacity: 0.25, 
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 10
  },
  imageDesign: {
    height: 120,
    width: 100,
    marginLeft:'20%',
    marginTop:'5%',
    borderRadius:15
  },
  flatListstyle:{
    flexDirection:'row',
    marginLeft:25
  },
  outerView:{
    marginTop:5,
    marginBottom:5,
  },

  Searchbox:{
    marginLeft:10,
    marginRight:10,
    height:90,
    padding: 20,
    marginBottom: 2.5,
    marginTop:2.5,
    backgroundColor: 'rgb(255, 250, 205)',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'yellow',
  },
  fontColour:{
    color:'rgb(255, 255, 255)',
    fontSize:20,
    textAlign:'center',
    margin:2
  },
  secondoneColourprice:{
    color:'rgb(255, 255, 255)',
    fontSize:20,
    textAlign:'center',
    margin:20
  },
  hedings:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:18
  }
})
