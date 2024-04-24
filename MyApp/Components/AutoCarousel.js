import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window');

const AutoCarousel = ({ id }) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [filteredImages, setFilteredImages] = useState([]);

  const images = [
    { id: 1, uri: 'https://iambaker.net/wp-content/uploads/2019/01/6H5A3222.chicken-e1563372059931.jpg' },
    { id: 2, uri: 'https://m.media-amazon.com/images/I/81n3aDyNOwL._SL1500_.jpg' },
    { id: 3, uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKHkZaQTPB4mgu_fo7rhKf9rtmbjAW_GTJFIp8C3ACOQ&s' },

    { id: 1, uri: 'https://easychickenrecipes.com/wp-content/uploads/2021/03/featured-ham-and-cheese-stuffed-chicken-recipe.jpg' },
    { id: 2, uri: 'https://i.insider.com/5b0eb2695e48ec20008b457c?width=600&format=jpeg&auto=webp' },
    { id: 3, uri: '' },

    { id: 1, uri: 'https://thewholecook.com/wp-content/uploads/2020/05/Mozzarella-Stuffed-Chicken-by-The-Whole-Cook-horizontal-500x500.jpg' },
    { id: 2, uri: 'https://m.media-amazon.com/images/I/61cNkaZnORL.jpg' },
    { id: 3, uri: 'https://img.taste.com.au/EowFGkwx/taste/2021/09/kfc-pizza-double-173511-2.jpg' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (activeIndex + 1) % images.length;
      setActiveIndex(newIndex);
      carouselRef.current.snapToItem(newIndex);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  useEffect(() => {
    setFilteredImages(id ? images.filter(image => image.id === id) : images);
  }, [id]);

  const navigation=useNavigation();


  const presscat=(id)=>{
    navigation.navigate(`Home`,{productId:id});
  }


  const renderItem = ({ item, index }) => {
    return (
      <View style={[styles.imageContainer, styles.mytest]}>
        <Image source={{ uri: item.uri }} style={styles.image} />
        {index === activeIndex && (
          <View style={styles.paginationContainer}>
            <Pagination
              dotsLength={filteredImages.length}
              activeDotIndex={activeIndex}
              dotStyle={styles.dotStyle}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
          </View>
        )}
        <View style={styles.backButton}>
          <TouchableOpacity onPress={presscat}>
            <Ionicons name="chevron-back-circle" size={50} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.shareButton}>
          <TouchableOpacity>
            <MaterialCommunityIcons name="share-circle" size={50} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.loveButton}>
          <TouchableOpacity>
            <Octicons name="feed-heart" size={50} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={filteredImages}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mytest: { height: screenWidth * 1, width: screenWidth * 1 },
  imageContainer: {
    width: screenWidth,
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    marginTop: 'auto'
  },
  image: {
    width: '100%',
    height: '100%',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: 'rgb(0, 255, 0)',
    marginHorizontal: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  shareButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  loveButton: {
    position: 'absolute',
    top: 20,
    right: 100,
    zIndex: 1,
  }
});

export default AutoCarousel;
