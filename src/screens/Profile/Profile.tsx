import React from "react";
import { Text } from "react-native";

// models
import { CompositeScreenProps } from "@react-navigation/native";

const Profile: React.FC<CompositeScreenProps<any, any>> = ({ navigation }) => {
  return (
    <Text onPress={() => navigation.navigate("Home")}>Salut from Profile!</Text>
  );
};

export default Profile;
