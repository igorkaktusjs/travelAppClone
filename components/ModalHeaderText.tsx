import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";

const ModalHeaderText = () => {
  const [active, setActive] = useState(0);

  return (
    <View style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}>
      <TouchableOpacity onPress={() => setActive(0)}>
        <Text
          style={[
            styles.title,
            {
              color: active === 0 ? "#000" : Colors.grey,
              textDecorationLine: active === 0 ? "underline" : "none",
            },
          ]}
        >
          Stays
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActive(1)}>
        <Text
          style={[
            styles.title,
            {
              color: active === 1 ? "#000" : Colors.grey,
              textDecorationLine: active === 1 ? "underline" : "none",
            },
          ]}
        >
          Experiences
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "mon-sb",
    fontSize: 18,
  },
});

export default ModalHeaderText;
