import React from "react";
import { StyleSheet, Text, View } from "react-native";

//Screen imports
import Homescreen from "../src/screens/Homescreen";
import Details from "../src/screens/Details";
import Privacy from "../src/screens/Privacy";
import CartScreen from "../src/screens/CartScreen";

import store from "../src/redux/store";
//Navigation imports
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
export default function Products() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name="Header" component={Header} /> */}
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </Provider>
  );
}
