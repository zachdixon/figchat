import * as React from "react";
import { StyleSheet, Image, TextInput } from "react-native";
import Button from "react-native-button";
import { Entypo } from "@expo/vector-icons";

import { Text, View, ScrollView } from "../components/Themed";

export default function Chats() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.chats}>
        <View style={styles.chat}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://placedog.net/40/40?random",
            }}
          />
          <View style={styles.chatDetails}>
            <Text>Mom</Text>
            <Text>You: Hey mom...</Text>
          </View>
          <View style={styles.chatTime}>
            <Text>5:36 pm</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.actions}>
        <TextInput style={styles.search} value="Search..." />
        <Button containerStyle={styles.newChat}>
          <Entypo size={20} style={{ marginRight: 10 }} name="new-message" />
          <Text style={styles.newChatText}>New Chat</Text>
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
  chats: {},
  chat: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
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
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  search: {
    backgroundColor: "#232323",
    color: "#fff",
    padding: 15,
    borderRadius: 15,
    flex: 1,
    maxWidth: "48%",
  },
  newChat: {
    backgroundColor: "#0fb",
    borderRadius: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "48%",
  },
  newChatText: {
    color: "#000",
  },
});
