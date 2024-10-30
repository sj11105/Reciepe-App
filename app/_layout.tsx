import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "floralwhite",
        },
        headerTintColor: "gold",

        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index"></Stack.Screen>
      <Stack.Screen name="category"></Stack.Screen>
    </Stack>
  );
}
