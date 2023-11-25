import { StatusBar, Text } from "react-native";

import {
  useFonts as useInter,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import {
  useFonts as useRoboto,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";
import SafeView from "./src/globals/SafeView";
import MainView from "./src/globals/MainView";
import { ActivityIndicator } from "react-native-paper";
import { GlobalColors } from "./src/infrastructure/GlobalColors";
import { MainStyle } from "./src/styles/MainStyle";
import MainStack from "./src/navigation/stacks/MainStack/MainStack";
import MainNavigation from "./src/navigation/MainNavigation";

export default function App() {
  let [fontsILoaded] = useInter({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  let [fontsRLoaded] = useRoboto({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });
  if (!fontsILoaded || !fontsRLoaded) {
    return (
      <SafeView>
        <MainView>
          <ActivityIndicator
            size={25}
            color={GlobalColors.primary.darkGreen}
            style={MainStyle.activity}
          />
        </MainView>
      </SafeView>
    );
  }
  return (
    <>
      <SafeView>
        <MainView>
          <MainNavigation />
        </MainView>
      </SafeView>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={GlobalColors.primary.darkGreen}
      />
    </>
  );
}
