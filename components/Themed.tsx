import * as React from "react";
import {
  StyleSheet,
  Text as NativeText,
  View as NativeView,
  ScrollView as NativeScrollView,
  TextInput as NativeTextInput,
  Pressable,
} from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & NativeText["props"];
export type ViewProps = ThemeProps & NativeView["props"];
export type InputProps = ThemeProps & NativeTextInput["props"];
export type ButtonProps = ThemeProps & TouchableOpacity["props"];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <NativeText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <NativeView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function ScrollView(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <NativeScrollView style={[{ backgroundColor }, style]} {...otherProps} />
  );
}

export function TextInput(props: InputProps) {
  const { style, onBlur, onFocus, ...otherProps } = props;
  const styles = useStyles();
  const [isFocused, setFocused] = React.useState(false);
  const handleBlur = React.useCallback(() => {
    setFocused(false);
  }, [setFocused]);

  const handleFocus = React.useCallback(() => {
    setFocused(true);
  }, [setFocused]);

  const borderColor = useThemeColor({}, "inputBorder");

  const defaultStyle = {
    ...styles.textInput,
    borderColor: isFocused ? borderColor : "transparent",
  };

  return (
    <NativeTextInput
      style={[defaultStyle, style]}
      onBlur={handleBlur}
      onFocus={handleFocus}
      {...otherProps}
    />
  );
}

export function Button(props: ButtonProps) {
  const { style, children, ...otherProps } = props;
  const styles = useStyles();
  return (
    <Pressable style={[styles.button, style]} {...otherProps}>
      {children}
    </Pressable>
  );
}

function useStyles() {
  return StyleSheet.create({
    textInput: {
      backgroundColor: useThemeColor({}, "inputBackground"),
      borderColor: useThemeColor({}, "inputBorder"),
      color: useThemeColor({}, "text"),
      width: "100%",
      padding: 15,
      borderRadius: 15,
      borderWidth: 3,
    },
    button: {
      backgroundColor: useThemeColor({}, "button"),
      borderRadius: 15,
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
    },
    buttonText: {
      color: "#000",
    },
  });
}
