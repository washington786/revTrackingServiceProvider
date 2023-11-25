import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import React from "react";
import { GlobalColors } from "../infrastructure/GlobalColors";

const isAndroid = Platform.OS === "android";

interface safe {
  children: any;
}
const SafeView = (props: safe) => {
  return <SafeAreaView style={styles.flex}>{props.children}</SafeAreaView>;
};

export default SafeView;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: GlobalColors.primary.darkGreen,
    paddingTop: isAndroid ? StatusBar.currentHeight : 0,
  },
});
