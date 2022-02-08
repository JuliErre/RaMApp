import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import DataContextProvider from "./context/DataContext";

const Stack = createNativeStackNavigator();
function App() {
  {
    /*<View style={tw`flex-1  bg-gray-800  justify-center items-center`>*/
  }
  return (
    <DataContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
            title: 'Rick and Morty',
            headerStyle: {
              backgroundColor: "#222f3e",
              
            },
            headerTintColor: "#fff",

            headerTitleStyle: {
              color: "#ffffff",
              
              
            },
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataContextProvider>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
