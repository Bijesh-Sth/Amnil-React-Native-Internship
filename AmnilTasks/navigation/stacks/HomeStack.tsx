import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, DetailsScreen } from "../../screens";

const Stack = createStackNavigator();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
