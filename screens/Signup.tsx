import * as React from "react";
import { StyleSheet } from "react-native";

import {
  View,
  ScrollView,
  Text,
  TextInput,
  Button,
} from "../components/Themed";

export default function Signup() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.settings}>
        <Text>[App Auth Flows]</Text>
        <TextInput style={styles.setting} placeholder="Name" />
        <TextInput style={styles.setting} placeholder="Email" />
        <TextInput style={styles.setting} placeholder="Password" />
        <TextInput style={styles.setting} placeholder="Confirm Password" />
      </ScrollView>

      <View style={styles.actions}>
        <Button>Sign Up</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  settings: {},
  setting: {
    marginBottom: 15,
  },
  actions: {
    flexDirection: "row",
    paddingTop: 20,
  },
});
