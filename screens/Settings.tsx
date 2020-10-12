import * as React from "react";
import { StyleSheet } from "react-native";

import { View, ScrollView, TextInput, Button } from "../components/Themed";

export default function Settings() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.settings}>
        <TextInput style={styles.setting} placeholder="Name" />
        <TextInput style={styles.setting} placeholder="Email" />
        <TextInput style={styles.setting} placeholder="New Password" />
        <TextInput style={styles.setting} placeholder="Confirm New Password" />
      </ScrollView>

      <View style={styles.actions}>
        <Button>Save</Button>
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
