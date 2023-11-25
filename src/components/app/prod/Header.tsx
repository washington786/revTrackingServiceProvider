import { StyleSheet, View } from "react-native";
import React from "react";
import { GlobalColors } from "../../../infrastructure/GlobalColors";
import { IconButton, Text } from "react-native-paper";

type h = {
  title: string;
  viewProducts?: boolean;
  onPress?():void;
};

const Header = (props: h) => {
  return (
    <View style={styles.con}>
      <Text variant="titleLarge" style={styles.tit}>
        {props.title}
      </Text>
      {props.viewProducts === true && (
        <IconButton
          icon="view-dashboard-edit"
          iconColor={GlobalColors.white}
          size={20}
          style={styles.view}
          onPress={props.onPress}
        />
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  con: {
    backgroundColor: GlobalColors.primary.darkGreen,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "relative",
  },
  tit: {
    color: GlobalColors.white,
  },
  view: {
    position: "absolute",
    right: 10,
    alignSelf: "flex-end",
  },
});
