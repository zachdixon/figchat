import * as React from "react";
import { StyleSheet } from "react-native";
import { getAuth, signOut } from "firebase/auth";

import {
  View,
  ScrollView,
  TextInput,
  Button,
  Text,
} from "../components/Themed";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Settings() {
  const [user, loading] = useAuthState(getAuth());

  const handleSignOut = React.useCallback(() => {
    const auth = getAuth();
    signOut(auth).then(
      () => {
        // signed out
      },
      (error) => {
        // error signing out
      }
    );
  }, []);

  if (loading) return null;

  console.log(user?.providerData);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.settings}>
        <TextInput
          style={styles.setting}
          placeholder="Name"
          defaultValue={user?.displayName}
        />
        <TextInput
          style={styles.setting}
          placeholder="Email"
          defaultValue={user?.email}
        />
        <TextInput style={styles.setting} placeholder="New Password" />
        <TextInput style={styles.setting} placeholder="Confirm New Password" />
        <Button>
          <Text>Save</Text>
        </Button>
      </ScrollView>

      <View style={styles.actions}>
        <Button onPress={handleSignOut}>
          <Text>Sign out</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
