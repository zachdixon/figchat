import * as React from "react";
import { StyleSheet, Image, TextInput } from "react-native";
import { Entypo } from "@expo/vector-icons";
import {
  collection,
  query,
  where,
  onSnapshot,
  getFirestore,
  doc,
} from "firebase/firestore";

import { Text, View, ScrollView, Button } from "../components/Themed";
import FigButton from "../components/FigButton";
import { useFocusEffect } from "@react-navigation/native";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { Chat } from "../../types";

export default function Figs({ navigation }) {
  const [user] = useAuthState(getAuth());
  const [chats, setChats] = React.useState<Chat[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      const db = getFirestore();
      const userRef = doc(db, `users/${user?.uid}`);
      const q = query(
        collection(db, "chats"),
        where("userRefs", "array-contains", userRef)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const chatDocs: Chat[] = [];
        querySnapshot.forEach((doc) =>
          chatDocs.push({
            id: doc.id,
            ...doc.data(),
          } as Chat)
        );
        setChats(chatDocs);
      });

      return () => unsubscribe();
    }, [])
  );

  console.log({ chats });
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.figs}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {chats?.length
          ? chats.map((chat) => <FigButton key={chat.id} id={chat.id} />)
          : null}
      </ScrollView>
      <View style={styles.actions}>
        <Button
          style={styles.newFig}
          onPress={() => {
            navigation.navigate("FigScreen");
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
