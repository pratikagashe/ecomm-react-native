import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {Colors} from 'react-native-paper';

interface Props {
  rating: number;
}

const RatingStar = (props: Props) => {
  const RenderStars = (rating: number) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i > rating) {
        stars.push(
          <MaterialIcons
            name="star-border"
            size={16}
            color={Colors.yellow800}
            key={`rating${i}`}
          />,
        );
      } else {
        stars.push(
          <MaterialIcons
            name="star"
            size={16}
            color={Colors.yellow800}
            key={`rating${i}`}
          />,
        );
      }
    }
    return stars;
  };

  return <View style={styles.flexContainer}>{RenderStars(props.rating)}</View>;
};

export default RatingStar;

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
