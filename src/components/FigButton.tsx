import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

import { Text, View } from "./Themed";

export default function FigButton({ id }) {
  const navigation = useNavigation();

  const hour = Math.floor(Math.random() * 12 + 1);
  const minutes = Math.floor(Math.random() * 59);
  const period = Math.random() <= 0.5 ? "am" : "pm";
  return (
    <TouchableOpacity
      style={styles.fig}
      onPress={() => {
        navigation.navigate("FigScreen");
      }}
    >
      <Image
        style={styles.avatar}
        source={{
          uri: "https://placedog.net/40/40?random",
        }}
      />
      <View style={styles.figDetails}>
        <Text>Friend {id}</Text>
        <Text>You: Hey, how's it going...</Text>
      </View>
      <View style={styles.figTime}>
        <Text>
          {hour}:{minutes} {period}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fig: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  avatar: {
    backgroundColor: "#fff",
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  figDetails: {
    flex: 1,
    marginHorizontal: 10,
  },
  figTime: {},
});
