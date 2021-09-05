import React from 'react';
import {
  Text,
  ImageBackground,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {BannerShopNowBtn} from 'components/atoms/Buttons';
import {Spacing, Colors, Typography} from 'styles';

const Banner = () => {
  const HeroImage = require('../../assets/images/home/summer.jpg');

  return (
    <ImageBackground source={HeroImage} style={styles.image}>
      <View style={styles.bannerContainer}>
        <Text style={styles.text}>Sale of the summer collection</Text>
        <TouchableHighlight onPress={() => {}} underlayColor="transparent">
          <BannerShopNowBtn />
        </TouchableHighlight>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    margin: Spacing.SCALE_18,
    paddingBottom: 24,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    height: 500,
  },
  text: {
    color: Colors.GRAY_LIGHT,
    fontSize: 30,
    lineHeight: 35,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    paddingBottom: 24,
  },
});

export default Banner;
