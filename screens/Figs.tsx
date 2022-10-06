import * as React from "react";
import { StyleSheet, Image, TextInput } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { Text, View, ScrollView, Button } from "../components/Themed";
import FigButton from "../components/FigButton";

export default function Figs({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.figs}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {[...Array(50).keys()].map((i) => (
          <FigButton key={i} id={i} navigation={navigation} />
        ))}
      </ScrollView>
      <View style={styles.actions}>
        <Button
          style={styles.newFig}
          onPress={() => {
            navigation.navigate("Fig");
          }}
        >
          <Entypo size={20} style={{ marginRight: 10 }} name="new-message" />
          <Text style={styles.newFigText}>New Fig</Text>
        </Button>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  figs: {},
  actions: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  newFig: {
    width: "auto",
  },
  newFigText: {
    color: "#000",
  },
});
