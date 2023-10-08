import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";

const Section = ({ title }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {
        <FlatList
          horizontal={true}
          data={[
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
          ]}
          renderItem={() => {
            return (
              <TouchableOpacity style={styles.bookCover}>
                <ImageBackground
                  style={styles.bookCover}
                  source={{
                    uri: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1677087948i/111172379.jpg",
                  }}
                  height={24}
                ></ImageBackground>
              </TouchableOpacity>
            );
          }}
        />
      }
    </ScrollView>
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
    fontFamily: "RBold",
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
    resizeMode: "cover",
  },
});
