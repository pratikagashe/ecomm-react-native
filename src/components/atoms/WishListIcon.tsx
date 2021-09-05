import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {Entypo} from '@expo/vector-icons';
import {Colors} from 'react-native-paper';
import {Context} from 'UserContext';
import {IProductDetails, IProduct} from 'utils/interface';

const WishListIcon = ({product}: IProductDetails) => {
  const [profile, setProfile] = useContext(Context);
  const [addedToWishlist, setAddedToWishlist] = useState(false);
  const {
    id,
    discount,
    discountPrice,
    price,
    name,
    gender,
    image,
  }: IProduct = product;

  useEffect(() => {
    let inEffect = true;
    if (inEffect) {
      checkWishlist();
    }
    return () => {
      inEffect = false;
    };
  }, [profile.wishlist, product]);

  const addToWishlist = () => {
    let newWishlist = profile.wishlist.slice();
    let productDetails = {
      id: id,
      name: name,
      image: image,
      discount: discount,
      discountPrice: discountPrice,
      price: price,
      gender: gender,
    };
    newWishlist.push(productDetails);
    setProfile({
      ...profile,
      wishlist: newWishlist,
    });
  };

  const removeFromWishlist = () => {
    if (profile.wishlist && profile.wishlist.length > 0) {
      let newWishlist = profile.wishlist?.slice();
      newWishlist.map((item: any, index: number) => {
        if (item.id === id) {
          newWishlist.splice(index, 1);
        }
      });
      setProfile({
        ...profile,
        wishlist: newWishlist,
      });
    }
  };

  const checkWishlist = () => {
    let wishlistProducts: any = [];
    if (profile.wishlist && profile.wishlist.length > 0) {
      profile.wishlist.map((item: any) => wishlistProducts.push(item.id));
    }
    if (wishlistProducts.includes(id)) {
      setAddedToWishlist(true);
    } else {
      setAddedToWishlist(false);
    }
  };

  return (
    <>
      {addedToWishlist ? (
        <TouchableHighlight
          onPress={() => removeFromWishlist()}
          underlayColor="transparent">
          <Entypo
            name="heart"
            size={24}
            style={[styles.wishlistIcon, styles.activeWishlistIcon]}
          />
        </TouchableHighlight>
      ) : (
        <TouchableHighlight
          onPress={() => addToWishlist()}
          underlayColor="transparent">
          <Entypo name="heart-outlined" size={24} style={styles.wishlistIcon} />
        </TouchableHighlight>
      )}
    </>
  );
};

export default WishListIcon;

const styles = StyleSheet.create({
  wishlistIcon: {
    width: 24,
    marginLeft: 4,
    color: Colors.black,
    marginTop: 4,
  },
  activeWishlistIcon: {
    color: Colors.red500,
  },
});
