import { View, Text } from 'react-native';
import React from 'react';
import Api from './../components/Api'
import Search from './../components/Search'
import tw from 'tailwind-react-native-classnames';


const HomeScreen = () => {
  return (
    <View style={tw`bg-gray-800 `}>
      {/*<Text style={tw`text-center font-bold text-3xl `}>Personajes</Text>*/}
      <Search />
      
    </View>
  );
};

export default HomeScreen;
