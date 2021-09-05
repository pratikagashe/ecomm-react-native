import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {Typography, Colors, Spacing} from 'styles';
import {IProductDetails, IProduct} from 'utils/interface';
import {formatPrice} from '../../utils/common';
import WishListIcon from './WishListIcon';
import {TouchableHighlight} from 'react-native-gesture-handler';

const ProductTile = ({product, navigation}: IProductDetails) => {
  const {
    id,
    discount,
    discountPrice,
    price,
    name,
    gender,
    image,
  }: IProduct = product;

  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() =>
          navigation.navigate('Product', {
            screen: 'ProductStack',
            params: {
              product: product,
            },
          })
        }>
        <React.Fragment>
          <ImageBackground
            source={image}
            style={styles.image}
            imageStyle={{borderRadius: 4}}>
            <View style={styles.wishlist}>
              <WishListIcon product={product} />
            </View>
          </ImageBackground>
          <Text style={styles.text}>{name}</Text>
          <View style={styles.flexContainer}>
            <Text style={[styles.cost, styles.price]}>
              {formatPrice(price)}
            </Text>
            <Text style={[styles.cost, styles.discountPrice]}>
              {formatPrice(discountPrice)}
            </Text>
            <Text style={[styles.cost, styles.discount]}>{discount}%</Text>
          </View>
        </React.Fragment>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  container: {
    width: '100%',
  },
  image: {
    marginBottom: 8,
    width: '100%',
    height: 250,
    borderRadius: 4,
  },
  wishlist: {
    position: 'absolute',
    right: 12,
    top: 12,
    backgroundColor: Colors.WHITE,
    borderRadius: 100,
    width: 32,
    height: 32,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    marginBottom: 4,
  },
  cost: {
    fontSize: 16,
    lineHeight: 20,
    marginRight: 8,
  },
  price: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    textDecorationLine: 'line-through',
  },
  discountPrice: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  discount: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    color: Colors.PRIMARY,
  },
});

export default ProductTile;
