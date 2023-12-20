/** @format */

import { StyleSheet } from "react-native";
import ExploreScreen from "./screens/Explore";
import ProfileScreen from "./screens/Profile";
import RestaurantsScreen from "./screens/Restaurants";
import ExploreIcon from "./icons/ExploreIcon";
import {
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantScreen from "./screens/Restaurant";
import RestaurantIcon from "./icons/RestaurantIcon";
import ProfileIcon from "./icons/ProfileIcon";

export type RootStackParams = {
  ExploreStack: undefined;
  RestaurantsStack: any;
  Profile: undefined;
  Restaurant: {
    name: string;
  };
};

const RootStack = createBottomTabNavigator<RootStackParams>();

export type RestaurantsStackParams = {
  Restaurants: undefined;
  Restaurant: {
    name: string;
  };
};

const RestaurantsStack = createNativeStackNavigator<RestaurantsStackParams>();

const RestaurantScreenStack = () => {
  return (
    <RestaurantsStack.Navigator
      initialRouteName='Restaurants'
      screenOptions={{
        headerShown: false,
      }}>
      <RestaurantsStack.Screen
        name='Restaurants'
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen name='Restaurant' component={RestaurantScreen} />
    </RestaurantsStack.Navigator>
  );
};

export type ExploreStackParams = {
  Explore: undefined;
  Restaurant: {
    name: string;
  };
};

const ExploreStack = createNativeStackNavigator<ExploreStackParams>();

const ExploreScreenStack = () => {
  return (
    <ExploreStack.Navigator
      initialRouteName='Explore'
      screenOptions={{
        headerShown: false,
      }}>
      <ExploreStack.Screen name='Explore' component={ExploreScreen} />
      <ExploreStack.Screen name='Restaurant' component={RestaurantScreen} />
    </ExploreStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName='ExploreStack'
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#e67a15",
          tabBarInactiveTintColor: "gray",
        })}>
        <RootStack.Screen
          name='ExploreStack'
          component={ExploreScreenStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <ExploreIcon color={color} size={size} />
            ),
            tabBarLabel: "Explore",
          }}
        />
        <RootStack.Screen
          name='RestaurantsStack'
          component={RestaurantScreenStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <RestaurantIcon color={color} size={size} />
            ),
            tabBarLabel: "Restaurants",
          }}
        />
        <RootStack.Screen
          name='Profile'
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <ProfileIcon color={color} size={size} />
            ),
            tabBarLabel: "Profile",
          }}
        />
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
