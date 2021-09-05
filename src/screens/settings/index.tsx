import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import {Spacing, Typography} from 'styles';
import {Colors, Switch} from 'react-native-paper';

interface Props {}

const SettingsScreen = (props: Props) => {
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);
  const [isLocationEnabled, setIsLocationEnabled] = useState(true);
  const [isBlackThemeEnabled, setIsBlackThemeEnabled] = useState(false);
  const toggleNotification = () =>
    setIsNotificationEnabled((previousState) => !previousState);
  const toggleLocation = () =>
    setIsLocationEnabled((previousState) => !previousState);
  const toggleTheme = () =>
    setIsBlackThemeEnabled((previousState) => !previousState);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.flexContainer, styles.settingContainer]}>
            <View>
              <Text style={styles.title}>Notifications</Text>
              <Text style={styles.info}>Disable/enable push notifications</Text>
            </View>
            <Switch
              trackColor={{false: '#f4f3f4', true: Colors.green200}}
              thumbColor={isNotificationEnabled ? Colors.green400 : '#f4f3f4'}
              onValueChange={toggleNotification}
              value={isNotificationEnabled}
            />
          </View>
          <View style={[styles.flexContainer, styles.settingContainer]}>
            <View>
              <Text style={styles.title}>Location</Text>
              <Text style={styles.info}>Disable/enable location access</Text>
            </View>
            <Switch
              trackColor={{false: '#f4f3f4', true: Colors.green200}}
              thumbColor={isLocationEnabled ? Colors.green400 : '#f4f3f4'}
              onValueChange={toggleLocation}
              value={isLocationEnabled}
            />
          </View>
          <View style={[styles.flexContainer, styles.settingContainer]}>
            <Text style={styles.title}>Clear search history</Text>
          </View>
          <View style={[styles.flexContainer, styles.settingContainer]}>
            <Text style={styles.title}>Activate premium account</Text>
          </View>
          <View style={[styles.flexContainer, styles.settingContainer]}>
            <View>
              <Text style={styles.title}>Black Theme</Text>
            </View>
            <Switch
              trackColor={{false: '#f4f3f4', true: Colors.green200}}
              thumbColor={isBlackThemeEnabled ? Colors.green400 : '#f4f3f4'}
              onValueChange={toggleTheme}
              value={isBlackThemeEnabled}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: Spacing.SCALE_18,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  settingContainer: {
    marginBottom: Spacing.SCALE_18,
    paddingBottom: Spacing.SCALE_18,
    borderBottomColor: Colors.grey300,
    borderBottomWidth: 1,
  },
  title: {fontFamily: Typography.FONT_FAMILY_BOLD},
  info: {fontFamily: Typography.FONT_FAMILY_REGULAR},
});
