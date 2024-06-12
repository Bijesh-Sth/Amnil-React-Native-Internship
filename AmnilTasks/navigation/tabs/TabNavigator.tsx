import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "../stacks/HomeStack";
import { TestScreen } from "../../screens";

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="TestScreen" component={TestScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
