import * as React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

import { Text, View } from "../components/Themed";

export default function Chat({ id, navigation }) {
  const hour = Math.floor(Math.random() * 12 + 1);
  const minutes = Math.floor(Math.random() * 59);
  const period = Math.random() <= 0.5 ? "am" : "pm";
  return (
    <TouchableOpacity style={styles.chat} onPress={()=>{navigation.navigate('Chat')}}>
      <Image
        style={styles.avatar}
        source={{
          uri: "https://placedog.net/40/40?random",
        }}
      />
      <View style={styles.chatDetails}>
        <Text>Friend {id}</Text>
        <Text>You: Hey, how's it going...</Text>
      </View>
      <View style={styles.chatTime}>
        <Text>
          {hour}:{minutes} {period}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chat: {
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
  chatDetails: {
    flex: 1,
    marginHorizontal: 10,
  },
  chatTime: {},
});
