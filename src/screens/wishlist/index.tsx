import React, {useContext} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Context} from 'UserContext';
import {IWishlistItem} from 'utils/interface';
import {Card} from 'react-native-paper';
import {formatPrice} from 'utils/common';
import {Spacing, Typography, Colors} from 'styles';
import {ScrollView} from 'react-native-gesture-handler';
import WishListIcon from 'components/atoms/WishListIcon';
import {Entypo} from '@expo/vector-icons';
import {CustButton} from 'components/atoms/Buttons';

const WishlistScreen = ({navigation}: any) => {
  const [profile, setProfile] = useContext(Context);

  return (
    <>
      {profile && profile.wishlist && profile.wishlist.length > 0 ? (
        <ScrollView style={styles.container}>
          {profile.wishlist.map((wishlist: IWishlistItem, index: number) => (
            <Card style={styles.wishlistItem} key={`wishlistItem${index}`}>
              <Card.Content style={styles.flexContainer}>
                <View>
                  <Image source={wishlist.image} style={styles.productImage} />
                </View>
                <View style={{flex: 1}}>
                  <Text style={styles.productName}>{wishlist.name}</Text>
                  <View style={styles.flexContainer}>
                    <Text style={[styles.cost, styles.price]}>
                      {formatPrice(wishlist.price)}
                    </Text>
                    <Text style={[styles.cost, styles.discountPrice]}>
                      {formatPrice(wishlist.discountPrice)}
                    </Text>
                    <Text style={[styles.cost, styles.discount]}>
                      {wishlist.discount}%
                    </Text>
                  </View>
                </View>
                <WishListIcon product={wishlist} />
              </Card.Content>
            </Card>
          ))}
        </ScrollView>
      ) : (
        <View style={styles.emptyWishlist}>
          <View style={styles.emptyWishlistWrapper}>
            <View style={styles.iconBackdrop}>
              <Entypo name="heart-outlined" size={150} color={Colors.WARNING} />
            </View>
            <Text style={styles.emptyWishlistTitle}>Woops!</Text>
            <Text style={styles.emptyWishlistSubTitle}>
              Looks like you have nothing in your wishlist
            </Text>
            <CustButton
              text="Continue Browsing"
              centerAligned={true}
              onPressFunc={() => navigation.navigate('Home')}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  container: {
    padding: Spacing.SCALE_18,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  wishlistItem: {
    marginBottom: Spacing.SCALE_18,
  },
  productImage: {
    width: 80,
    height: 100,
    marginRight: Spacing.SCALE_18,
  },
  productName: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: 16,
    color: Colors.PRIMARY,
    paddingBottom: Spacing.SCALE_8,
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
  emptyWishlist: {
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
  emptyWishlistTitle: {
    fontFamily: Typography.FONT_FAMILY_LIGHT,
    fontSize: 40,
    paddingBottom: Spacing.SCALE_18,
    paddingTop: Spacing.SCALE_18 * 3,
    textAlign: 'center',
  },
  emptyWishlistSubTitle: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: 15,
    paddingBottom: Spacing.SCALE_18,
    textAlign: 'center',
  },
  emptyWishlistWrapper: {
    alignItems: 'center',
    paddingBottom: Spacing.SCALE_18 * 5,
  },
});
