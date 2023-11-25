import { StyleSheet, View } from "react-native";
import React from "react";

import Icons from "react-native-vector-icons/Feather";
import { GlobalColors } from "../../../infrastructure/GlobalColors";
import { Caption } from "react-native-paper";

type info = {
  today: Date;
};

const Top = (props: info) => {
  return (
    <View style={styles.main}>
      <IconWrapper today={props.today} />
    </View>
  );
};

const IconWrapper = (props: info) => {
  return (
    <View style={styles.con}>
      <Icons name="clock" size={20} color={GlobalColors.grey.l4} />
      <Caption style={styles.cap}>{`${props.today.toLocaleDateString("en-SA",{year:"numeric",day:"numeric",month:"long"})}`}</Caption>
      <Caption style={styles.cap}>{`${props.today.toLocaleTimeString("en-SA", {
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      })}`}</Caption>
    </View>
  );
};

export default React.memo(Top);

const styles = StyleSheet.create({
  con: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    justifyContent: "flex-end",
  },
  cap: {
    paddingHorizontal: 6,
  },
  main:{
    paddingVertical:8
  }
});
