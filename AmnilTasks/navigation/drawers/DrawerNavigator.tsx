import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "../tabs/TabNavigator";
import { TestScreen2 } from "../../screens";

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Tabs" component={TabNavigator} />
      <Drawer.Screen name="Test" component={TestScreen2} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
