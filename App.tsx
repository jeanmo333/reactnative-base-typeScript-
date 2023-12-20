/** @format */

import { StyleSheet, Text, View } from "react-native";
import ExploreScreen from "./screens/Explore";
import ProfileScreen from "./screens/Profile";
import RestaurantScreen from "./screens/Restorants";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParams = {
  Explore: undefined;
  Restaurants: undefined;
  Profile: undefined;
  Restaurant: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='Explore'>
        <RootStack.Screen name='Explore' component={ExploreScreen} />
        <RootStack.Screen name='Restaurants' component={RestaurantScreen} />
        <RootStack.Screen name='Profile' component={ProfileScreen} />
      </RootStack.Navigator>
      {/* <View>
        <Text>restorant app</Text>
        <View style={styles.content}>
          <Text>Explore</Text>
          <Text>Restorants</Text>
          <Text>Profile</Text>
        </View>
      </View> */}
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
