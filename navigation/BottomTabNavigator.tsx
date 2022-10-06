import { Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Figs from "../screens/Figs";
import Fig from "../screens/Fig";
import Settings from "../screens/Settings";
import { BottomTabParamList, FigsParamList, SettingsParamList } from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Figs"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <BottomTab.Screen
        name="Figs"
        component={FigsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo
              name="chat"
              size={24}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo
              name="cog"
              size={24}
              style={{ marginBottom: -3 }}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const FigsStack = createStackNavigator<FigsParamList>();

function FigsNavigator() {
  return (
    <FigsStack.Navigator>
      <FigsStack.Screen
        name="My Figs"
        component={Figs}
        options={{ headerTitle: "Figs" }}
      />
      <FigsStack.Screen
        name="Fig"
        component={Fig}
        options={{ headerTitle: "Fig" }}
      />
    </FigsStack.Navigator>
  );
}

const SettingsStack = createStackNavigator<SettingsParamList>();

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={Settings}
        options={{ headerTitle: "Settings" }}
      />
    </SettingsStack.Navigator>
  );
}
