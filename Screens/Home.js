import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon1 from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/Octicons";
import Icon3 from "react-native-vector-icons/Ionicons";

import InventoryHome from "./InventoryScreens/MainInventory";
import Queue from "./QueueScreens/Queue";
import OrderInfo from "./NewOrderScreens/OrderInfo";
import Reports from "./ReportsScreens/CustomerReport";
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="New Order"
        component={OrderInfo}
        options={{
          // headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon1 name="add-to-queue" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Queue"
        component={Queue}
        options={{
          // headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon2 name="stack" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Inventory"
        component={InventoryHome}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon1 name="inventory" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Reports"
        component={Reports}
        options={{
          // headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon3 name="newspaper" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function Home() {
  return <MyTabs />;
}
