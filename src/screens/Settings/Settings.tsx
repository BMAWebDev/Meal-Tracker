import React from "react";
import { Text } from "react-native";

// models
import { CompositeScreenProps } from "@react-navigation/native";

const Settings: React.FC<CompositeScreenProps<any, any>> = ({ navigation }) => {
  return (
    <Text onPress={() => navigation.navigate("Home")}>
      Salut from Settings!
    </Text>
  );
};

export default Settings;
