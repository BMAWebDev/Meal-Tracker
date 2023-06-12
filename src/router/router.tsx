import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// models
import { IRouteName } from "@/models/router";

// components
import Ionicons from "@expo/vector-icons/Ionicons";
import routes from "./routes";

const Tab = createBottomTabNavigator();

const AppRouter = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const routeName = route.name as IRouteName;
            let iconName;

            switch (routeName) {
              case "Home":
                iconName = focused ? "home" : "home-outline";
                break;

              case "Settings":
                iconName = focused ? "settings" : "settings-outline";
                break;

              case "Profile":
                iconName = focused ? "person" : "person-outline";
                break;

              default:
                iconName = focused ? "home" : "home-outline";
                break;
            }

            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        })}>
        {routes.map((route) => (
          <Tab.Screen
            key={route.key}
            name={route.name}
            component={route.component}
            options={route.options}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
