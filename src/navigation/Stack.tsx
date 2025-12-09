import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { appRoutes } from "src/constants";
import { TabNavigator } from "./Tabs";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={appRoutes.TABS}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={appRoutes.TABS} component={TabNavigator} />
      </Stack.Navigator>
    </>
  );
};
