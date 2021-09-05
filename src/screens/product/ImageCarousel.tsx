import React, {useState, useRef} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Spacing} from 'styles';
import SelectedProducts from '../../utils/selectedProducts';
import {Colors} from 'react-native-paper';
import {Entypo} from '@expo/vector-icons';
import {IProductDetails} from 'utils/interface';
import {TouchableHighlight} from 'react-native-gesture-handler';
import WishListIcon from 'components/atoms/WishListIcon';

const ImageCarousel = ({product}: IProductDetails) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef: React.MutableRefObject<null> | any = useRef(null);

  const renderItem = ({item, index}: any) => {
    return (
      <View key={`productImage${index}`}>
        <Image
          source={item.image}
          style={{
            width: '100%',
            height: 300,
            borderRadius: 8,
          }}
        />
      </View>
    );
  };

  const getPagination = () => {
    return (
      <Pagination
        dotsLength={SelectedProducts.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDots}
        inactiveDotStyle={styles.paginationInactiveDot}
        tappableDots={true}
        carouselRef={carouselRef}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.wishlist}>
        <WishListIcon product={product} />
      </View>
      <Carousel
        ref={carouselRef}
        data={SelectedProducts}
        renderItem={(item) => renderItem(item)}
        sliderWidth={375}
        itemWidth={300}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      {getPagination()}
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  wishlist: {
    position: 'absolute',
    right: 48,
    top: 12,
    backgroundColor: Colors.white,
    borderRadius: 100,
    width: 32,
    height: 32,
    zIndex: 3,
  },
  paginationContainer: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey300,
  },
  paginationDots: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    borderColor: Colors.black,
    borderWidth: 1,
  },
  paginationInactiveDot: {},
});
