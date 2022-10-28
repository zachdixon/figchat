import * as React from "react";
import { ResponseType } from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { Button, Text } from "../components/Themed";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    expoClientId:
      "448888831747-t1p65mla00mp59hreboh1k0ecj8g2i9a.apps.googleusercontent.com",
    // webClientId: "448888831747-guh639b4gmbqdv2ifmciug3k7qnce6ne.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const auth = getAuth();
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <Button onPress={() => promptAsync()}>
      <Text>Sign In</Text>
    </Button>
  );
}
