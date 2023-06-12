import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// components
import routes from "./routes";

const Stack = createNativeStackNavigator();

const AppRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {routes.map((route) => (
          <Stack.Screen
            key={route.key}
            name={route.name}
            component={route.component}
            options={route.options ? route.options : undefined}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
