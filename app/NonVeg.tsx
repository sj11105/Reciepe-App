import React, { Component } from "react";
import { Text, View, ImageBackground, Pressable } from "react-native";
import { Link } from "expo-router";
import { ScrollView } from "react-native";
const image2 = {
  uri: "https://images.unsplash.com/photo-1710091691777-3115088962c4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJpcnlhbml8ZW58MHx8MHx8fDA%3D",
};
const image1 = {
  uri: "https://images.unsplash.com/photo-1606843046080-45bf7a23c39f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bm9uJTIwdmVnfGVufDB8fDB8fHww",
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
        <Link href="/Biryani" asChild>
          <Pressable>
            <Text style={{ marginLeft: 60, marginTop: 10, fontSize: 20 }}>
              Biryani
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
        <Link href="/Chicken" asChild>
          <Pressable>
            <Text style={{ marginLeft: 60, marginTop: 10, fontSize: 20 }}>
              Chicken
            </Text>
          </Pressable>
        </Link>
      </View>
    </ScrollView>
  );
}
