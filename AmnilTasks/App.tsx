import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigator } from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
