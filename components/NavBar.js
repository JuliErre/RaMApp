import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';

function NavBar() {
  return (
      <View  style={tw`flex-1 pt-24 text-white`}>
          <Text  style={tw`text-center text-white`}>Hola</Text>
      </View>
  )
}

export default NavBar;

