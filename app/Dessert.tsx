import React, { Component } from "react";
import { Text, View, ImageBackground, Pressable } from "react-native";
import { Link } from "expo-router";
import { ScrollView } from "react-native";
const image2 = {
  uri: "https://images.unsplash.com/photo-1606757870492-9fc7cf1e736d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29va2llc3xlbnwwfHwwfHx8MA%3D%3D",
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
        <Link href="/Cookies" asChild>
          <Pressable>
            <Text style={{ marginLeft: 60, marginTop: 10, fontSize: 20 }}>
              Cookies
            </Text>
          </Pressable>
        </Link>
      </View>
    </ScrollView>
  );
}
