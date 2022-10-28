import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Auth: {
        screens: {
          Login: "login",
        },
      },
      Root: {
        screens: {
          Figs: {
            screens: {
              FigsScreen: "figs",
            },
          },
          Settings: {
            screens: {
              SettingsScreen: "settings",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
