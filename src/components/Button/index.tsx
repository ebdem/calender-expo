import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const Button = ({ children, onPress, buttonStyle, buttonTextStyle }: {
  children: React.ReactNode;
  onPress: () => void;
  buttonStyle?: object;
  buttonTextStyle?: object;
}) => {
  const mergedStyles = {
    button: {
      ...styles.button,
      ...buttonStyle,
    },
    buttonText: {
      ...styles.buttonText,
      ...buttonTextStyle,
    },
  };
  return (
    <TouchableOpacity onPress={onPress} style={mergedStyles.button}>
      <Text style={mergedStyles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#bdbdbd",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {},
});

export default Button;
