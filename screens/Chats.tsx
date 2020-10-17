import * as React from "react";
import { StyleSheet, Image, TextInput } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { Text, View, ScrollView, Button } from "../components/Themed";
import Chat from "../components/Chat";

export default function Chats({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.chats}>
        {[...Array(50).keys()].map((i) => (
          <Chat key={i} id={i} navigation={navigation} />
        ))}
      </ScrollView>
      <View style={styles.actions}>
        <TextInput style={styles.search} value="Search..." />
        <Button containerStyle={styles.newChat} onPress={()=>{navigation.navigate('Chat')}}>
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
  newChat: {
    maxWidth: "48%",
  },
  newChatText: {
    color: "#000",
  },
});
