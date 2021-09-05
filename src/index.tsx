import React from 'react';
import Navigator from 'navigations';
import {YellowBox, View, Text, SafeAreaView} from 'react-native';
import {useFonts} from '@use-expo/font';
import {Provider} from './UserContext';

YellowBox.ignoreWarnings(['VirtualizedLists should never ']);

const App = () => {
  let [fontsLoaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
  });

  if (fontsLoaded) {
    return (
      <Provider>
        <Navigator />
      </Provider>
    );
  } else {
    return (
      <SafeAreaView>
        <View>
          <Text>Loading</Text>
        </View>
      </SafeAreaView>
    );
  }
};

export default App;
