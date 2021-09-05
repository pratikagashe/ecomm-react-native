import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {SectionTitle} from 'components/atoms/Titles';
import {Spacing, Colors, Typography} from 'styles';

interface Props {}

const GenderList = [
  {
    id: 1,
    gender: 'Men',
    icon: require('../../assets/images/man.jpg'),
  },
  {
    id: 1,
    gender: 'Women',
    icon: require('../../assets/images/woman.jpg'),
  },
  {
    id: 1,
    gender: 'Boys',
    icon: require('../../assets/images/boy.jpg'),
  },
  {
    id: 1,
    gender: 'Girls',
    icon: require('../../assets/images/girl.jpg'),
  },
];

const GenderTab = (props: Props) => {
  return (
    <View style={styles.container}>
      <SectionTitle title="Browse by gender" />
      <View style={styles.flexContainer}>
        {GenderList &&
          GenderList.length > 0 &&
          GenderList.map((gender: any, index: number) => (
            <View key={`gender${index}`} style={styles.flexItem}>
              <View style={styles.image}>
                <Image source={gender.icon} style={{width: 60, height: 60}} />
              </View>
              <Text style={styles.name}>{gender.gender}</Text>
            </View>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: Spacing.SCALE_18,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexItem: {
    width: '25%',
    padding: 4,
    paddingTop: 0,
    alignItems: 'center',
  },
  image: {
    backgroundColor: Colors.WHITE,
    width: 80,
    height: 80,
    flex: 1,
    paddingTop: 10,
    alignItems: 'center',
    borderRadius: 100,
  },
  name: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    paddingTop: Spacing.SCALE_8,
    fontSize: 16,
    textTransform: 'uppercase',
  },
});

export default GenderTab;
