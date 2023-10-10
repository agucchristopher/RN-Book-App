import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
const Section = ({ title, data }) => {
  let router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={{ flexDirection: "row" }}>
        <FlatList
          horizontal={true}
          data={data}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  router.push({
                    pathname: "/bookinfo",
                    params: {
                      id: item.book_id,
                      cover: item.cover,
                      name: item.name,
                      author: item.author,
                      title: item.title,
                    },
                  })
                }
                style={styles.bookCover}
              >
                <Image
                  style={styles.bookCover}
                  source={{
                    // uri: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1677087948i/111172379.jpg",
                    uri: item.cover,
                  }}
                  resizeMode={"contain"}
                  // height={24}
                />
              </TouchableOpacity>
            );
          }}
          // renderItem={({ item }) => {
          //   return <Text style={styles.title}>{item.name}</Text>;
          // }}
        />
      </View>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    height: 200,
    flex: 1,
    width: "100%",
    margin: 15,
  },
  title: {
    fontSize: 25,
    fontFamily: "RMedium",
    color: "white",
  },
  subtitle: {
    fontSize: 28,
    color: "#fff",
    fontFamily: "RBold",
  },
  bookCover: {
    backgroundColor: "white",
    height: 150,
    margin: 12,
    width: 120,
    marginLeft: 4,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
