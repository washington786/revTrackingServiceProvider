import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";

import Icons from "react-native-vector-icons/Feather";
import { Platform } from "react-native";
import { GlobalColors } from "../../infrastructure/GlobalColors";
import { Caption, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const isIos = Platform.OS === "ios";

type screen = {
  screen?: string;
  onPress?(): void;
  androidScreenName?: string;
};

const HeaderBack = (props: screen) => {
  const navigation = useNavigation();
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <>
      {isIos && <Ios screen={props.screen} onPress={onBack} />}
      {!isIos && (
        <Android
          screen={props.screen}
          onPress={onBack}
          androidScreenName={props.androidScreenName}
        />
      )}
    </>
  );
};

const Ios = (props: screen) => {
  return (
    <TouchableOpacity
      style={styles.con}
      activeOpacity={0.5}
      onPress={props.onPress}
    >
      <Icons
        name="chevron-left"
        size={30}
        color={GlobalColors.primary.darkGreen}
      />
      <Caption style={styles.caption}>{`${props.screen}`}</Caption>
    </TouchableOpacity>
  );
};
const Android = (props: screen) => {
  return (
    <View style={[styles.con, styles.wrap]}>
      <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
        <Icons name="arrow-left" size={25} color={GlobalColors.white} />
      </TouchableOpacity>
      <Text
        style={[styles.caption, styles.android]}
        variant="titleMedium"
      >{`${props.androidScreenName}`}</Text>
    </View>
  );
};

export default React.memo(HeaderBack);

const styles = StyleSheet.create({
  con: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: !isIos ? 8 : 2,
  },
  caption: {
    paddingHorizontal: 8,
  },
  android: {
    textAlign: "center",
    flex: 1,
    color: GlobalColors.white,
    textTransform: "capitalize",
  },
  wrap: {
    backgroundColor: GlobalColors.primary.darkGreen,
    paddingVertical: 8,
  },
});
