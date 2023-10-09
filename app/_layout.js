import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
export default () => {
  const [fontsLoaded] = useFonts({
    RBold: require("../assets/fonts/Ubuntu-Bold.ttf"),
    RMedium: require("../assets/fonts/Ubuntu-Medium.ttf"),
    RRegular: require("../assets/fonts/Ubuntu-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return (
      <ActivityIndicator
        color={"dodgerblue"}
        style={{ alignSelf: "center", justifyCenter: "center", flex: 1 }}
        size={30}
      />
    );
  }
  return (
    <Stack
      // initialRoute="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{}} />
    </Stack>
  );
};
