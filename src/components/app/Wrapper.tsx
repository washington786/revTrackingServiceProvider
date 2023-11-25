import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalColors } from "../../infrastructure/GlobalColors";
type wrap = {
  children: any;
};
const Wrapper = (props: wrap) => {
  return <View>{props.children}</View>;
};

export default React.memo(Wrapper);

const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: GlobalColors.primary.darkGreen,
  },
});
