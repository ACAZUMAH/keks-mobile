import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Chat } from "src/chat";
import { appRoutes } from "src/constants";
import { Home } from "src/home";

const BottomTabs = createBottomTabNavigator();

export const TabNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator screenOptions={{ headerShown: false }}>
      <BottomTabs.Screen name={appRoutes.HOME} component={Home} />
      <BottomTabs.Screen name={appRoutes.CHAT} component={Chat} />
    </BottomTabs.Navigator>
  );
};
