import { DocumentReference } from "firebase/firestore";

export type AuthStackParamList = {
  Login: undefined;
};

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Figs: undefined;
  Settings: undefined;
};

export type FigsParamList = {
  FigsScreen: undefined;
};

export type SettingsParamList = {
  SettingsScreen: undefined;
};

export type Chat = {
  id: String;
  figs: Fig[];
  userRefs: DocumentReference[];
  test: String;
};

export type Fig = {
  id: String;
  message: String;
};
