import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="inverted" />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.imgContainer}>
            <Image source={require("../assets/me.png")} style={styles.image} />
          </TouchableOpacity>
          <Text style={styles.subtitle}>Hey, Christopher 👋🏾</Text>
          {/* <Text style={styles.title}>Hey, Chris</Text> */}
        </View>
        <View style={styles.search}>
          <View style={styles.searchContainer}>
            <TextInput style={styles.searchInput} placeholder="Search.." />
          </View>
          <TouchableOpacity style={styles.searchBtn}>
            <Text>Search</Text>
          </TouchableOpacity>
        </View>
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
    margin: 4,
    alignContent: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 8,
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
    borderRadius: 5,
  },
});
