import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Card, TouchableRipple} from 'react-native-paper';
import {Ionicons, EvilIcons} from '@expo/vector-icons';
import {Colors, Typography, Spacing} from 'styles';
import {formatPrice} from 'utils/common';
import {ICartItem} from 'utils/interface';

interface Props {
  cartProduct: ICartItem;
  UpdateCart: Function;
  RemoveItemFromCart: Function;
  index: number;
}

const CartItem = ({
  cartProduct,
  UpdateCart,
  RemoveItemFromCart,
  index,
}: Props) => {
  const {productName, productImage, price, qty, color, size} = cartProduct;
  const [quantity, setQuantity] = useState(qty);

  const removeQuantity = () => {
    if (quantity - 1 === 0) {
      RemoveItemFromCart(index);
    } else {
      setQuantity(quantity - 1);
      UpdateCart(index, quantity - 1);
    }
  };

  const addQuantity = () => {
    setQuantity(quantity + 1);
    UpdateCart(index, quantity + 1);
  };

  return (
    <Card style={styles.cartItem}>
      <Card.Content style={styles.flexContainer}>
        <View>
          <Image source={productImage} style={styles.productImage} />
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.productName}>{productName}</Text>
          <View style={[styles.flexContainer, styles.sizeColor]}>
            <Text style={styles.text}>Size: {size}</Text>
            <View
              style={{
                backgroundColor: color.color,
                width: 20,
                height: 20,
                borderRadius: 16,
                borderColor: Colors.GRAY_LIGHT,
                borderWidth: 1,
                marginLeft: Spacing.SCALE_12,
              }}
            />
          </View>
          <Text style={styles.unitPrice}>Price: {formatPrice(price)}</Text>
          <Text style={styles.subTotal}>
            Subtotal: {formatPrice(price * quantity)}
          </Text>
        </View>
        <View style={[styles.flexContainer, styles.quantityContainer]}>
          <TouchableRipple onPress={() => removeQuantity()}>
            <EvilIcons name="minus" size={30} color={Colors.PRIMARY} />
          </TouchableRipple>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableRipple onPress={() => addQuantity()}>
            <EvilIcons name="plus" size={30} color={Colors.PRIMARY} />
          </TouchableRipple>
        </View>
      </Card.Content>
    </Card>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  cartItem: {
    marginBottom: Spacing.SCALE_18,
  },
  productImage: {
    width: 90,
    height: 120,
    marginRight: Spacing.SCALE_18,
  },
  productName: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: 14,
    color: Colors.PRIMARY,
  },
  text: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: 14,
    paddingTop: 4,
  },
  sizeColor: {
    paddingVertical: 4,
    alignItems: 'center',
  },
  unitPrice: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: 14,
  },
  subTotal: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: 16,
    marginTop: 4,
  },
  quantityContainer: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  quantity: {
    textAlign: 'center',
    width: 20,
    height: 20,
    fontSize: 14,
    lineHeight: 19,
    color: Colors.PRIMARY,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    borderColor: Colors.PRIMARY,
    borderWidth: 1,
    marginTop: Spacing.SCALE_8,
    marginBottom: Spacing.SCALE_8,
  },
});
