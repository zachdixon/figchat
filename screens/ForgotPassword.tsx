import * as React from "react";
import { StyleSheet } from "react-native";

import {
  View,
  ScrollView,
  Text,
  TextInput,
  Button,
} from "../components/Themed";

export default function ForgotPassword() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.settings}>
        <Text>Forgot Password</Text>
        <TextInput style={styles.setting} placeholder="Email" />
      </ScrollView>

      <View style={styles.actions}>
        <Button>Continue</Button>
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
