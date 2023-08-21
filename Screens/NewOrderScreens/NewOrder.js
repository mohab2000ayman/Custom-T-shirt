import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import HomeScreen from "./App.js";
import InventoryScreen1 from "../InventoryScreens/InventoryScreen1";
import InventoryScreen2 from "../InventoryScreens/InventoryScreen2";
import Front from "../NewOrderScreens/Front";
import customimage from "../NewOrderScreens/CustomImage.js";
import Temp from "../NewOrderScreens/Temp.js";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Front"
        component={Front}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Back"
        component={Temp}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="FontModal"
        component={customimage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="R-sleeve"
        component={InventoryScreen1}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Pocket"
        component={InventoryScreen2}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return <MyTabs />;
}
