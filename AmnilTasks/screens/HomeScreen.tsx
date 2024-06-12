// HomeScreen.tsx

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type HomeScreenProps = {
  navigation: any;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Details")}
      >
        <Text>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
  },
});
export default HomeScreen;
