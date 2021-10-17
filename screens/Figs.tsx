import * as React from "react";
import { StyleSheet, Image, TextInput } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { Text, View, ScrollView, Button } from "../components/Themed";
import FigButton from "../components/FigButton";

export default function Figs({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.figs}>
        {[...Array(50).keys()].map((i) => (
          <FigButton key={i} id={i} navigation={navigation} />
        ))}
      </ScrollView>
      <View style={styles.actions}>
        <TextInput style={styles.search} value="Search..." />
        <Button containerStyle={styles.newFig} onPress={()=>{navigation.navigate('Fig')}}>
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
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  search: {
    backgroundColor: "#232323",
    color: "#fff",
    padding: 15,
    borderRadius: 15,
    flex: 1,
    maxWidth: "48%",
  },
  newFig: {
    maxWidth: "48%",
  },
  newFigText: {
    color: "#000",
  },
});
