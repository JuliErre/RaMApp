import { View, Text } from 'react-native';
import React from 'react';
import Api from './../components/Api'
import Search from './../components/Search'
import tw from 'twrnc';


const HomeScreen = () => {
  return (
    <View style={tw`bg-gray-800 flex min-h-full `}>
      {/*<Text style={tw`text-center font-bold text-3xl `}>Personajes</Text>*/}
      <Api/>
    </View>
  );
};

export default HomeScreen;
