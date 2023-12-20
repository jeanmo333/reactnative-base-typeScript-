/** @format */

import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {};

const ProfileScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Profile Screen</Text>
      <Text>Name: John Doe</Text>
      <TouchableOpacity>
        <Text>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24,
  },
  screenTitle: {
    fontSize: 24,
    marginTop: 8,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
