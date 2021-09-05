import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import {Spacing, Typography, Colors} from 'styles';
import {formatPrice} from 'utils/common';
import {ICartItem, ICartCost} from 'utils/interface';
import CartItem from './CartItem';
import {Context} from 'UserContext';
import {FontAwesome5} from '@expo/vector-icons';
import {CustButton} from 'components/atoms/Buttons';

const CartScreen = ({navigation}: any) => {
  const [profile, setProfile] = useContext(Context);
  const [cost, setCost] = useState<ICartCost>({
    subTotal: 0,
    shipping: 0,
    total: 0,
  });

  useEffect(() => {
    let inEffect = true;
    if (inEffect) {
      if (profile.cart && profile.cart.length >= 0) {
        UpdateCartCost();
      }
    }
    return () => {
      inEffect = false;
    };
  }, [profile.cart]);

  const UpdateCartCost = () => {
    if (profile.cart && profile.cart.length >= 0) {
      let subTotal = GetSubTotal(profile.cart);
      let shipping = 20 * profile.cart?.length;

      setCost({
        subTotal: subTotal,
        shipping: shipping,
        total: subTotal + shipping,
      });
    }
  };

  const UpdateCart = (index: number, newQty: number) => {
    if (profile.cart && profile.cart.length > 0) {
      let newCart = profile.cart?.slice();
      newCart[index].qty = newQty;
      setProfile({
        ...profile,
        cart: newCart,
      });
    }
  };

  const RemoveItemFromCart = (index: number) => {
    if (profile.cart && profile.cart.length > 0) {
      let newCart = profile.cart?.slice();
      newCart.splice(index, 1);
      setProfile({
        ...profile,
        cart: newCart,
      });
    }
  };

  const GetSubTotal = (cart: Array<ICartItem>): number => {
    let SubTotal = 0;
    if (cart && cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        const TotalCost = product.qty * product.price;
        SubTotal = SubTotal + TotalCost;
      }
    }

    return SubTotal;
  };

  return (
    <>
      {profile.cart && profile.cart.length > 0 ? (
        <SafeAreaView style={{flex: 1}}>
          <ScrollView>
            <View style={styles.container}>
              {profile.cart.map((item: ICartItem, index: number) => (
                <CartItem
                  key={`cartItem${index}`}
                  cartProduct={item}
                  UpdateCart={UpdateCart}
                  RemoveItemFromCart={RemoveItemFromCart}
                  index={index}
                />
              ))}
            </View>
          </ScrollView>
          <View style={styles.bottomContainer}>
            <View style={styles.bottomWrapper}>
              <View style={styles.flexContainer}>
                <View>
                  <Text style={styles.text}>
                    Sub Total: {formatPrice(cost.subTotal)}
                  </Text>
                  <Text style={styles.text}>
                    Shipping: {formatPrice(cost.shipping)}
                  </Text>
                  <Text style={[styles.text, styles.boldText]}>
                    Total: {formatPrice(cost.total)}
                  </Text>
                </View>
                <CustButton
                  text="Checkout"
                  centerAligned={true}
                  onPressFunc={() => {}}
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
      ) : (
        <View style={styles.emptyCart}>
          <View style={styles.emptyCartWrapper}>
            <View style={styles.iconBackdrop}>
              <FontAwesome5 name="opencart" size={150} color={Colors.WARNING} />
            </View>
            <Text style={styles.emptyCartTitle}>Woops!</Text>
            <Text style={styles.emptyCartSubTitle}>
              Looks like you have nothing in your cart
            </Text>
            <CustButton
              text="Continue Shopping"
              centerAligned={true}
              onPressFunc={() => navigation.navigate('Home')}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.SCALE_18,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: 15,
    textAlign: 'right',
  },
  boldText: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    marginTop: Spacing.SCALE_8,
    paddingTop: Spacing.SCALE_8,
  },
  emptyCart: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
  },
  iconBackdrop: {
    backgroundColor: 'rgba(255,174,0,0.3)',
    width: 250,
    height: 250,
    alignItems: 'center',
    borderRadius: 125,
    paddingTop: 55,
  },
  emptyCartTitle: {
    fontFamily: Typography.FONT_FAMILY_LIGHT,
    fontSize: 40,
    paddingBottom: Spacing.SCALE_18,
    paddingTop: Spacing.SCALE_18 * 3,
    textAlign: 'center',
  },
  emptyCartSubTitle: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: 15,
    paddingBottom: Spacing.SCALE_18,
    textAlign: 'center',
  },
  emptyCartWrapper: {
    alignItems: 'center',
    paddingBottom: Spacing.SCALE_18 * 5,
  },
  bottomContainer: {
    backgroundColor: Colors.WHITE,
  },
  bottomWrapper: {
    backgroundColor: Colors.WHITE,
    padding: 12,
    shadowOpacity: 0.2,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: -3,
    },
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    elevation: 20,
    paddingHorizontal: Spacing.SCALE_18,
    paddingVertical: Spacing.SCALE_18,
  },
});
