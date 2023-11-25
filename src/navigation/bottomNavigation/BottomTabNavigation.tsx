import React from "react";

import Icon from "react-native-vector-icons/Feather";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GlobalColors } from "../../infrastructure/GlobalColors";
import HomeStack from "../stacks/app/dash/HomeStack";
import HistoryStack from "../stacks/app/history/HistoryStack";
import ProductStack from "../stacks/app/products/ProductStack";
import AccountStack from "../stacks/app/account/AccountStack";

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  dashboard: "home",
  settings: "user",
  history: "clock",
  products: "image",
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: GlobalColors.primary.darkGreen,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name={TAB_ICONS.dashboard} size={20} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="orders"
        component={HistoryStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name={TAB_ICONS.history} size={20} color={color} />
          ),
          tabBarLabel: "order history",
        }}
      />
      <Tab.Screen
        name="product"
        component={ProductStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name={TAB_ICONS.products} size={20} color={color} />
          ),
          tabBarLabel: "products",
        }}
      />
      <Tab.Screen
        name="settings"
        component={AccountStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name={TAB_ICONS.settings} size={20} color={color} />
          ),
          tabBarLabel: "Settings",
        }}
      />
    </Tab.Navigator>
  );
};

export default React.memo(BottomTabNavigation);
