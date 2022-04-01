import * as React from "react";
import { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import MainMenu from "../MainMenu";
import SignUp from "../SignUp";
import Login from "../Login";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createNativeStackNavigator();

class StartStackNavigator extends Component {
  render() {
    return (
      // Builds stack used to hold login and sign up
      <Stack.Navigator initialRouteName="Start Menu">
        {/* Adds a screen to the stack that can be navigated to */}
        <Stack.Screen
          name="Start Menu"
          component={StartMenu}
          // Disables header and gesture becuase a custom header is used
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="Sign Up Screen"
          component={SignUp}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="Login Screen"
          component={Login}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        {/* This screen points to the drawer navigator */}
        <Stack.Screen
          name="Home"
          component={DrawerNavigator}
          options={{ headerShown: false, gestureEnabled: false }}
        />
      </Stack.Navigator>
    );
  }
}
export default StartStackNavigator;
