import { StatusBar } from "expo-status-bar";
import {
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Section from "../components/Section";
import axios from "axios";
import { recommendedBooks, popularBooks } from "../data/books";
export default function Page() {
  // const [popularBooks, setpopularBooks] = useState([]);
  // const [recommendedBooks, setrecommendedBooks] = useState([]);
  // const getBooks = async () => {
  //   try {
  //     const headersList = {
  //       Accept: "*/*",
  //       "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  //       "X-RapidAPI-Key": "f0dfe99216mshf97a4619dc1e299p128480jsn025f6596c70c",
  //       "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
  //     };

  //     const response = await axios.get(
  //       `https://hapi-books.p.rapidapi.com/month/2023/${10}`,
  //       {
  //         headers: headersList,
  //       }
  //     );

  //     const data = response.data;
  //     console.log("Popular ", data);
  //     setpopularBooks(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   return;
  // };
  // const getRecommendedBooks = async () => {
  //   const url = "https://hapi-books.p.rapidapi.com/week/horror/10";
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "f0dfe99216mshf97a4619dc1e299p128480jsn025f6596c70c",
  //       "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
  //     },
  //   };

  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.json();
  //     console.log(result);
  //     setrecommendedBooks(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  useEffect(() => {
    // getBooks();
    // getRecommendedBooks();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="inverted" />
      <ScrollView style={styles.container}>
        <RefreshControl refreshing={true} />
        <View style={styles.header}>
          <TouchableOpacity style={styles.imgContainer}>
            <Image source={require("../assets/me.png")} style={styles.image} />
          </TouchableOpacity>
          <Text style={styles.subtitle}>Hey, Christopher 👋🏾</Text>
          {/* <Text style={styles.title}>Hey, Chris</Text> */}
        </View>
        <View style={styles.search}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search Books.."
            />
          </View>
          <TouchableOpacity style={styles.searchBtn} onPress={() => getBooks()}>
            <Image source={require("../assets/search.png")} />
          </TouchableOpacity>
        </View>
        <Section title="Top Publication" data={popularBooks} />
        <Section title="Recommended Books" data={recommendedBooks} />
        <Section title="Love" data={recommendedBooks} />
        <Section title="Horror" data={recommendedBooks} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
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
