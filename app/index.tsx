import React from "react";
import { Link } from "expo-router";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Pressable,
  ToastAndroid,
} from "react-native";

const image = {
  uri: "https://i.pinimg.com/originals/6a/2c/64/6a2c64fcff2b207d40b2aca3f3cfbaa6.gif",
};
const image1 = {
  uri: "https://i.pinimg.com/originals/de/f8/c3/def8c32218ff550de986ca3dfe09cac8.gif",
};
const image2 = {
  uri: "https://i.pinimg.com/originals/e6/09/e3/e609e3fa248bb399f9cb869749682fd6.gif",
};

export default function Index() {
  return (
    <ScrollView
      style={{
        backgroundColor: "floralwhite",
      }}
    >
      <View>
        <ImageBackground source={image} resizeMode="cover" style={{}}>
          <Text
            style={{
              textAlign: "center",
              justifyContent: "center",
              fontSize: 50,
              marginTop: 70,
            }}
          ></Text>
        </ImageBackground>
      </View>
      <View>
        <ImageBackground
          source={image1}
          resizeMode="contain"
          style={{ marginTop: 40 }}
        >
          <Text
            style={{
              textAlign: "center",
              justifyContent: "center",
              fontSize: 50,
              marginTop: 70,
            }}
          ></Text>
        </ImageBackground>
      </View>
      <View>
        <Text
          style={{
            fontSize: 30,
            marginTop: 50,
            marginLeft: 50,
            color: "darkgoldenrod",
          }}
        >
          Try New Recipes With Us!
        </Text>
      </View>
      <View>
        <ImageBackground
          source={image2}
          resizeMode="contain"
          style={{ marginTop: 40 }}
        >
          <Text
            style={{
              textAlign: "center",
              justifyContent: "center",
              fontSize: 50,
              marginTop: 70,
            }}
          ></Text>
        </ImageBackground>
      </View>

      <View style={{ marginTop: 30, marginLeft: 130 }}>
        <Link href="/category" asChild>
          <Pressable>
            <Text style={{ color: "gold", fontSize: 30 }}>Explore Now</Text>
          </Pressable>
        </Link>
      </View>
    </ScrollView>
  );
}
