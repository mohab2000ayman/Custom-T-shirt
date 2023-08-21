import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  useFonts,
  Roboto_400Regular,
  OpenSans_400Regular,
  TitilliumWeb_400Regular_Italic,
} from "@expo-google-fonts/dev";

import Front from "./Screens/NewOrderScreens/Front";
import Back from "./Screens/NewOrderScreens/Back";

import LoginScreen from "./Screens/LoginScreen";
import Home from "./Screens/Home";
import ReviewOrder from "./Screens/NewOrderScreens/ReviewOrder";
import QueueScreen2 from "./Screens/QueueScreens/QueueScreen2";
import Queue from "./Screens/QueueScreens/Queue";
import lsleeve from "./Screens/NewOrderScreens/FontModal";
import temp from "./Screens/NewOrderScreens/Temp";

import MainInventory from "./Screens/InventoryScreens/MainInventory";
import ShirtsInventory from "./Screens/InventoryScreens/ShirtsInventory";
import HoodiesInventory from "./Screens/InventoryScreens/HoodiesInventory";
const Stack = createStackNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    OpenSans_400Regular,
    TitilliumWeb_400Regular_Italic,
    // ... add other font variations or fonts
  });
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Front"
          component={Front}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Back"
          component={Back}
          // options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReviewOrder"
          component={ReviewOrder}
          // options={{ headerShown: false }}
        />

        <Stack.Screen
          name="lsleeve"
          component={lsleeve}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="temp"
          component={temp}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QueueScreen2"
          component={QueueScreen2}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Queue"
          component={Queue}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainInventory"
          component={MainInventory}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ShirtsInventory"
          component={ShirtsInventory}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HoodiesInventory"
          component={HoodiesInventory}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
