import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import {Spacing, Colors, Typography} from 'styles';
import {NotificationsList} from 'utils/notifications';
import {INotification} from 'utils/interface';
import {Card} from 'react-native-paper';
import {AntDesign, Feather} from '@expo/vector-icons';
import {TouchableHighlight} from 'react-native-gesture-handler';

interface Props {}

const NotificationScreen = (props: Props) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {NotificationsList &&
            NotificationsList.length > 0 &&
            NotificationsList.map(
              (notification: INotification, index: number) => (
                <Card
                  key={`notification${index}`}
                  style={{marginBottom: Spacing.SCALE_12}}>
                  <View style={styles.notification}>
                    {notification.image ? (
                      <Image source={notification.image} style={styles.image} />
                    ) : (
                      notification.type === 'system' && (
                        <View style={[styles.icon, styles.image]}>
                          <Feather
                            name="inbox"
                            size={24}
                            color={Colors.WHITE}
                          />
                        </View>
                      )
                    )}
                    <View style={styles.textContainer}>
                      <Text style={[styles.text, styles.title]}>
                        {notification.title}
                      </Text>
                      <Text style={styles.text}>{notification.text}</Text>
                    </View>
                    <TouchableHighlight
                      onPress={() => {}}
                      underlayColor="transparent">
                      <View style={styles.action}>
                        <AntDesign
                          name="close"
                          size={20}
                          color={Colors.GRAY_DARK}
                        />
                      </View>
                    </TouchableHighlight>
                  </View>
                </Card>
              ),
            )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: Spacing.SCALE_18,
  },
  notification: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: Spacing.SCALE_8,
  },
  image: {width: 60, height: 80, borderRadius: 4, marginRight: Spacing.SCALE_8},
  icon: {
    backgroundColor: Colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: 14,
  },
  title: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  action: {padding: Spacing.SCALE_8},
});
