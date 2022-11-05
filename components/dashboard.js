import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import About from "../screens/About";
import Products from "../screens/Products";
import Home from "../screens/Home";
import Appointment from "../screens/Appointment";

export default function Dashboard() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      {/* home screen  */}
      <Stack.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
      >
        {(props) => <Home {...props} channelName={"Niraamaya"} />}
      </Stack.Screen>

      {/* About Screen  */}
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: "Nunito_600SemiBold",
          },
          headerTitleAlign: "center",
        }}
      />

      {/* Appointment Screen  */}
      <Stack.Screen
        name="Products"
        component={Products}
        options={{
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: "Nunito_600SemiBold",
          },
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="Appointment"
        component={Appointment}
        options={{
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: "Nunito_600SemiBold",
          },
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}
