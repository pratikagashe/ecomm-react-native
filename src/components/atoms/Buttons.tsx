import React from 'react';
import {Feather} from '@expo/vector-icons';
import {Text, StyleSheet, View} from 'react-native';
import {Colors, Typography, Spacing} from 'styles';
import {Button} from 'react-native-paper';
import {ICustButton} from 'utils/interface';

export const BannerShopNowBtn = () => {
  return (
    <View style={styles.flexBox}>
      <Feather name="arrow-right-circle" size={32} color={Colors.GRAY_LIGHT} />
      <Text style={styles.text}>Shop Now</Text>
    </View>
  );
};

export const CustButton = ({text, onPressFunc, centerAligned}: ICustButton) => {
  return (
    <Button
      mode="outlined"
      color={Colors.WHITE}
      onPress={onPressFunc}
      style={{
        marginRight: Spacing.SCALE_12,
        marginLeft: centerAligned ? 0 : Spacing.SCALE_12,
        padding: 2,
        borderRadius: 50,
        backgroundColor: Colors.PRIMARY,
      }}>
      {text}
    </Button>
  );
};

const styles = StyleSheet.create({
  flexBox: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    width: 180,
  },
  text: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.GRAY_LIGHT,
    paddingLeft: 12,
    fontSize: 16,
  },
});
