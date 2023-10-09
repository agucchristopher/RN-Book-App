import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const Bookinfo = ({ id }) => {
  const getInfo = async () => {
    const url = `https://hapi-books.p.rapidapi.com/book/${id}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f0dfe99216mshf97a4619dc1e299p128480jsn025f6596c70c",
        "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <TouchableOpacity style={styles.header}>
        <Image
          source={require("../assets/arrow.png")}
          style={{
            height: 35,
            width: 35,
          }}
          resizeMode={"cover"}
        />
      </TouchableOpacity>
      <ScrollView style={styles.container}></ScrollView>
    </SafeAreaView>
  );
};

export default Bookinfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "#121212",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 30,
    fontFamily: "RBold",
  },
  subtitle: {
    fontSize: 28,
    color: "#fff",
    fontFamily: "RBold",
  },
  image: {
    height: 45,
    width: 45,
    resizeMode: "cover",
    alignSelf: "flex-end",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    margin: 15,
    backgroundColor: "#fff",
    width: 45,
    justifyContent: "center",
    borderRadius: 100000,
    padding: 5,
    // justifyContent: "space-between",
  },
  imgContainer: {
    backgroundColor: "grey",
    borderRadius: 10000,
    marginRight: 10,
    padding: 0,
  },
  searchContainer: {
    backgroundColor: "white",
    width: "80%",
    alignSelf: "center",
    height: 50,
    // margin: 4,
    alignContent: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 8,
    // borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  searchInput: {
    fontSize: 20,
    height: 25,
    fontFamily: "RRegular",
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  searchBtn: {
    backgroundColor: "orange",
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 8,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
});
