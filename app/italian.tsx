import React, { Component } from "react";
import { Text, View, ImageBackground, Pressable } from "react-native";
import { Link } from "expo-router";
import { ScrollView } from "react-native";
const image2 = {
  uri: "https://cdn.pixabay.com/photo/2023/01/17/08/00/food-7724008_1280.jpg",
};
const image1 = {
  uri: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFzdGF8ZW58MHx8MHx8fDA%3D",
};
export default function Italian() {
  return (
    <ScrollView>
      <View>
        <ImageBackground
          source={image2}
          resizeMode="contain"
          style={{ width: 200, height: 200, marginTop: 50 }}
        ></ImageBackground>
        <Link href="/Pizza" asChild>
          <Pressable>
            <Text style={{ marginLeft: 60, marginTop: 10, fontSize: 20 }}>
              Pizza
            </Text>
          </Pressable>
        </Link>
      </View>
      <View>
        <ImageBackground
          source={image1}
          resizeMode="contain"
          style={{ width: 200, height: 200, marginTop: 50 }}
        ></ImageBackground>
        <Link href="/Pasta" asChild>
          <Pressable>
            <Text style={{ marginLeft: 60, marginTop: 10, fontSize: 20 }}>
              Pasta
            </Text>
          </Pressable>
        </Link>
      </View>
    </ScrollView>
  );
}
