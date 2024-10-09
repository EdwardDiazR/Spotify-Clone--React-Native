import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function _layout() {
  const { top,bottom } = useSafeAreaInsets();
  return (
    <Stack
      screenOptions={{
        contentStyle: { paddingTop: top, backgroundColor: "transparent" },
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
