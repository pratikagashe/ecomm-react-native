import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {SubHeading} from 'components/atoms/Titles';
import {Spacing, Typography} from 'styles';
import {Colors} from 'react-native-paper';
import {ReviewsList} from 'utils/constants';
import RatingStar from 'components/atoms/RatingStar';

interface Props {}

const Reviews = (props: Props) => {
  const RenderReview = () => {
    return (
      <>
        {ReviewsList &&
          ReviewsList.length > 0 &&
          ReviewsList.map((item: any, index: any) => (
            <View key={`review${index}`} style={styles.flexContainer}>
              <View>
                <Image
                  source={item.user.profileImage}
                  style={styles.profileImage}
                />
              </View>
              <View style={{flex: 1, paddingLeft: Spacing.SCALE_18}}>
                <View style={[styles.flexContainer, styles.userReview]}>
                  <Text style={[styles.text, styles.userName]}>
                    {item.user.userName}
                  </Text>
                  <RatingStar rating={item.review.rating} />
                </View>
                <Text style={styles.text}>{item.review.description}</Text>
              </View>
            </View>
          ))}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <SubHeading title="Reviews" />
      <RenderReview />
    </View>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing.SCALE_18,
    paddingTop: Spacing.SCALE_18,
    borderTopWidth: 1,
    borderTopColor: Colors.grey300,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: Spacing.SCALE_8,
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  userName: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    color: Colors.blue400,
    marginTop: Spacing.SCALE_8,
  },
  userReview: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
