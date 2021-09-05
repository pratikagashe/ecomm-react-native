import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Banner from './Banner';
import SelectedForYou from './SelectedForYou';
import TopPicks from './TopPicks';
import GenderTab from './GenderTab';

const HomeScreen = ({navigation}: any) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Banner />
        <SelectedForYou navigation={navigation} />
        <GenderTab />
        <TopPicks navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
