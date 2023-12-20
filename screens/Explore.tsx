/** @format */

import React from "react";
import { View, StyleSheet, Text } from "react-native";
import RestaurantCard from "../components/RestaurantCard";
import Menu from "../components/Menu";

type Props = {};

const ExploreScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Restaurants Near You</Text>
      <RestaurantCard
        name='Sushi restaurant'
        onPress={() => {
          // navigation.push('Restaurant', {name: 'Sushi restaurant'});
          // navigation.navigate('RestaurantsStack', {
          //   screen: 'Restaurant',
          //   params: {name: 'Hello from explore'},
          // });
        }}
      />
      <RestaurantCard
        name='Burger restaurant'
        onPress={() => {
          // navigation.push('Restaurant', {name: 'Burger restaurant'});
        }}
      />
      <RestaurantCard
        name='Fine dining restaurant'
        onPress={() => {
          // navigation.push('Restaurant', {name: 'Fine dining restaurant'});
        }}
      />

      <Text style={styles.sectionTitle}>Most Popular Restaurants</Text>
      <RestaurantCard
        name='Sushi restaurant'
        onPress={() => {
          // navigation.push('Restaurant', {name: 'Sushi restaurant'});
        }}
      />
      <RestaurantCard
        name='Burger restaurant'
        onPress={() => {
          // navigation.push('Restaurant', {name: 'Burger restaurant'});
        }}
      />
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24,
  },
  restaurantCard: {
    backgroundColor: "#efefef",
  },
  sectionTitle: {
    fontSize: 16,
    marginTop: 16,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: "bold",
  },
});

export default ExploreScreen;
