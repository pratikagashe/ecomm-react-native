import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {CustButton} from './Buttons';
import {TouchableRipple} from 'react-native-paper';
import {EvilIcons} from '@expo/vector-icons';
import {Typography, Colors, Spacing} from 'styles';
import {IAddToCart, IProduct} from 'utils/interface';
import {Context} from 'UserContext';

const AddToCart = ({product, navigation, productCartInfo}: IAddToCart) => {
  const [profile, setProfile] = useContext(Context);
  const {
    id,
    discount,
    discountPrice,
    price,
    name,
    gender,
    image,
  }: IProduct = product;
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    let inEffect = true;
    if (inEffect) {
      checkCart();
      setQuantity(1);
    }
    return () => {
      inEffect = false;
    };
  }, [profile.cart, product]);

  const removeQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addItemToCart = () => {
    let newCart = profile.cart.slice();
    let productDetails = {
      productId: id,
      productName: name,
      productImage: image,
      qty: quantity,
      price: discountPrice,
      size: productCartInfo.size,
      color: productCartInfo.color,
    };
    newCart.push(productDetails);
    setProfile({
      ...profile,
      cart: newCart,
    });
  };

  const checkCart = () => {
    let cartProducts: any = [];
    if (profile.cart && profile.cart.length > 0) {
      profile.cart.map((item: any) => cartProducts.push(item.productId));
    }
    if (cartProducts.includes(id)) {
      setAddedToCart(true);
    } else {
      setAddedToCart(false);
    }
  };

  return (
    <View style={styles.flexContainer}>
      {addedToCart ? (
        <>
          <Text style={styles.text}>Added to cart</Text>
          <CustButton
            text="View Cart"
            onPressFunc={() => navigation.navigate('Cart')}
          />
        </>
      ) : (
        <>
          <TouchableRipple
            onPress={() => removeQuantity()}
            disabled={quantity === 1}>
            <EvilIcons name="minus" size={36} color={Colors.PRIMARY} />
          </TouchableRipple>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableRipple onPress={() => addQuantity()}>
            <EvilIcons name="plus" size={36} color={Colors.PRIMARY} />
          </TouchableRipple>
          <CustButton text="Add To Cart" onPressFunc={() => addItemToCart()} />
        </>
      )}
    </View>
  );
};

export default AddToCart;

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {
    textAlign: 'center',
    width: 24,
    height: 24,
    color: Colors.PRIMARY,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    borderColor: Colors.PRIMARY,
    borderWidth: 1,
    marginRight: Spacing.SCALE_8,
    marginLeft: Spacing.SCALE_8,
  },
  text: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: 16,
  },
});
