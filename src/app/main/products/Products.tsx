import { FlatList, Platform, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import MainView from "../../../globals/MainView";
import Header from "../../../components/app/prod/Header";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import { ActivityIndicator, Button, TextInput } from "react-native-paper";
import { GlobalColors } from "../../../infrastructure/GlobalColors";

// image picker
import * as ImagePicker from "expo-image-picker";
import { Image } from "react-native-elements";
import Scroller from "../../../globals/Scroller";
import { useNavigation } from "@react-navigation/native";

const isIos = Platform.OS ==="ios";

const Products = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState([]);

  const data = [
    { key: "1", value: "Vegetables", disabled: false },
    { key: "2", value: "Fruits" },
    { key: "3", value: "Cannec Fruits", disabled: true },
    { key: "4", value: "Canned Vegetables", disabled: true },
    { key: "5", value: "LiveStock" },
    { key: "6", value: "Milk" },
    { key: "7", value: "Meat" },
    { key: "7", value: "Poultry" },
    { key: "7", value: "Eggs" },
  ];

  const [selectedImage, setSelectedImages] = useState([]);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission denied");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      allowsEditing: false,
      quality: 1,
      selectionLimit: 8,
    });

    if (!result.canceled) {
      setSelectedImages(
        result.assets.map((asset) => {
          return asset.uri;
        })
      );
    }
  };

  const onViewProducts=()=>{
    navigation.navigate("viewProducts");
  }

  return (
    <MainView>
      <Header title={"Add Product"} viewProducts={true} onPress={onViewProducts}/>
      <Scroller>
        <View style={styles.con}>
          {selectedImage.length === 0 && <ImageCard onPress={pickImage} />}

          {selectedImage.length > 0 && (
            <ImageList selectedImage={selectedImage} />
          )}

          <MultipleSelectList
            setSelected={(val: any) => setSelected(val)}
            placeholder="Choose Category"
            data={data}
            save="value"
            label="Selected Categories"
            badgeStyles={{ backgroundColor: "green" }}
          />
          <InputWrapper />
          <Button
            mode="contained-tonal"
            style={styles.btn}
            buttonColor={GlobalColors.primary.level4Green}
            labelStyle={styles.lbl}
          >
            submit
          </Button>
        </View>
      </Scroller>
    </MainView>
  );
};

type list = {
  selectedImage: [] | any;
};

const ImageList = (props: list) => {
  return (
    <View style={styles.imagesCon}>
      <FlatList
        data={props.selectedImage}
        keyExtractor={(index) => {
          return index.toString();
        }}
        renderItem={(image) => {
          return (
            <Image
              source={{ uri: image.item }}
              containerStyle={styles.item}
              PlaceholderContent={<ActivityIndicator />}
              resizeMode={ isIos?"center":"cover"}
              resizeMethod={isIos?"resize":"auto"}
            />
          );
        }}
        horizontal={true}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      />
    </View>
  );
};

const InputWrapper = () => {
  return (
    <View>
      <TextInput
        value={""}
        mode="outlined"
        label={"Product Name"}
        style={styles.input}
        keyboardType="default"
        keyboardAppearance="light"
      />
      <TextInput
        value={""}
        mode="outlined"
        label={"Bundle Price"}
        style={styles.input}
        keyboardType="decimal-pad"
        keyboardAppearance="light"
      />
      <TextInput
        value={""}
        mode="outlined"
        label={"Quantity"}
        style={styles.input}
        keyboardType="number-pad"
        keyboardAppearance="light"
      />
      <TextInput
        value={""}
        mode="outlined"
        label={"Bundle Price"}
        style={styles.input}
        keyboardType="decimal-pad"
        keyboardAppearance="light"
        multiline={true}
        numberOfLines={4}
      />
    </View>
  );
};

type img = {
  onPress?(): void;
};

const ImageCard = (props: img) => {
  return (
    <View style={styles.card}>
      <Button
        icon="camera"
        mode="contained"
        onPress={props.onPress}
        style={styles.icon}
        buttonColor={GlobalColors.primary.level4Green}
      >
        upload
      </Button>
    </View>
  );
};

export default React.memo(Products);

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  inputCon: {
    marginTop: 20,
  },
  input: {
    marginBottom: 8,
  },
  btn: {
    borderRadius: 0,
    marginTop: 20,
    paddingVertical: 3,
  },
  lbl: {
    color: GlobalColors.white,
    textTransform: "uppercase",
  },
  card: {
    maxHeight: 150,
    minHeight: 150,
    backgroundColor: GlobalColors.card,
    borderRadius: 10,
    position: "relative",
    marginVertical: 10,
  },
  icon: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  item: {
    aspectRatio: 5,
    width: "100%",
    height: "100%",
    flex: 1,
    maxHeight: isIos? 120:150,
    minHeight: isIos? 120:150,
  },
  imagesCon: {
    height: "100%",
    maxHeight: isIos? 120:150,
    minHeight: isIos? 120:150,
    backgroundColor: "#aeae",
    marginVertical: 10,
    flexGrow: 1,
  },
});
