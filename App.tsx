/** @format */

import { StyleSheet, Text, View } from "react-native";
import ExploreScreen from "./screens/Explore";
import ProfileScreen from "./screens/Profile";
import RestaurantsScreen from "./screens/Restorants";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantScreen from "./screens/Restaurant";

export type RootStackParams = {
  Explore: undefined;
  Restaurants: undefined;
  Profile: undefined;
  Restaurant: {
    name: string;
  };
};

const RootStack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='Explore'>
        <RootStack.Screen name='Explore' component={ExploreScreen} />
        <RootStack.Screen name='Restaurants' component={RestaurantsScreen} />
        <RootStack.Screen name='Restaurant' component={RestaurantScreen} />
        <RootStack.Screen name='Profile' component={ProfileScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#efefef",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
  },
});
