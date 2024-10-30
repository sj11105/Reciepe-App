import React, { Component } from "react";
import { Text, View, ImageBackground, Pressable } from "react-native";
import { Link } from "expo-router";
import { ScrollView } from "react-native";
const image2 = {
  uri: "https://images.unsplash.com/photo-1708146464361-5c5ce4f9abb6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9zYXxlbnwwfHwwfHx8MA%3D%3D",
};
const image1 = {
  uri: "https://images.unsplash.com/photo-1664992892797-781fcf7b7541?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJydXNjaGV0dGF8ZW58MHx8MHx8fDA%3D",
};
export default function Chinese() {
  return (
    <ScrollView>
      <View>
        <ImageBackground
          source={image2}
          resizeMode="contain"
          style={{ width: 200, height: 200, marginTop: 50 }}
        ></ImageBackground>
        <Link href="/Dosa" asChild>
          <Pressable>
            <Text style={{ marginLeft: 60, marginTop: 10, fontSize: 20 }}>
              Dosa
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
        <Link href="/Bruschetta" asChild>
          <Pressable>
            <Text style={{ marginLeft: 60, marginTop: 10, fontSize: 20 }}>
              Bruschetta
            </Text>
          </Pressable>
        </Link>
      </View>
    </ScrollView>
  );
}
