import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./activities/Home";
import PostersCollection from "./activities/PostersCollection";
import CarDetails from "./activities/CarDetails";

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} options={{}} />
      <Stack.Screen name="Details" component={CarDetails} options={{}} />
      <Stack.Screen
        name="Collection"
        component={PostersCollection}
        options={{}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
