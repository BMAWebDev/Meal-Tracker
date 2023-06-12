import React from "react";
import { Text } from "react-native";

// models
import { CompositeScreenProps } from "@react-navigation/native";

const Home: React.FC<CompositeScreenProps<any, any>> = ({ navigation }) => {
  return (
    <Text onPress={() => navigation.navigate("Settings")}>
      Salut from home!
    </Text>
  );
};

export default Home;
