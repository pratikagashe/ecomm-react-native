import React, {useContext} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableHighlight,
  View,
  Image,
} from 'react-native';
import {Ionicons, EvilIcons} from '@expo/vector-icons';
import {Spacing, Typography, Colors} from 'styles';
import {Context} from 'UserContext';

interface IHeader {
  navigation: any;
  hideBackButton?: boolean;
  backTo?: string;
}

export const HeaderLeft = ({navigation, hideBackButton, backTo}: IHeader) => {
  const navtigate = () => {
    if (backTo) {
      navigation.navigate(backTo);
    } else {
      navigation.goBack();
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: Spacing.SCALE_18,
      }}>
      {!hideBackButton && (
        <Ionicons
          name="ios-arrow-back"
          size={24}
          color="black"
          onPress={() => navtigate()}
          style={{marginRight: 12}}
        />
      )}
      <Image
        source={require('../../assets/images/logo.png')}
        style={{
          width: 24,
          height: 24,
          marginRight: 8,
        }}
      />
      <Text style={{fontFamily: Typography.FONT_FAMILY_BOLD, fontSize: 16}}>
        Heady
      </Text>
    </View>
  );
};

export const HeaderRight = ({navigation}: IHeader) => {
  const [profile, setProfile] = useContext(Context);

  return (
    <View>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          paddingRight: Spacing.SCALE_18,
        }}>
        <EvilIcons
          name="search"
          size={24}
          color="black"
          style={{marginLeft: 16}}
        />
        <TouchableHighlight
          onPress={() => navigation.navigate('Cart')}
          underlayColor="transparent">
          <View style={{width: 40}}>
            <EvilIcons
              name="cart"
              size={24}
              color="black"
              style={{marginLeft: 16}}
            />
            {profile.cart && profile.cart.length > 0 && (
              <View
                style={{
                  position: 'absolute',
                  right: -4,
                  top: -8,
                  backgroundColor: Colors.PRIMARY,
                  width: 18,
                  height: 18,
                  borderRadius: 12,
                }}>
                <Text
                  style={{
                    color: Colors.WHITE,
                    textAlign: 'center',
                    fontSize: 12,
                    lineHeight: 18,
                  }}>
                  {profile.cart.length}
                </Text>
              </View>
            )}
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="transparent"
          style={{marginLeft: 16}}
          onPress={() => navigation.openDrawer()}>
          <Ionicons name="ios-menu" size={24} color="black" />
        </TouchableHighlight>
      </View>
    </View>
  );
};
