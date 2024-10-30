import { Link } from "expo-router";
import { Pressable } from "react-native";
import { View, Text, ImageBackground } from "react-native";
import { ScrollView } from "react-native";
const image1 = {
  uri: "https://images.unsplash.com/photo-1685032003155-c647d882c67b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lYXQlMjBmb29kfGVufDB8fDB8fHww",
};
const image2 = {
  uri: "https://cdn.pixabay.com/photo/2023/01/17/08/00/food-7724008_1280.jpg",
};
const image = {
  uri: "https://cdn.pixabay.com/photo/2016/08/12/16/01/cake-1589012_1280.jpg",
};
const image3 = {
  uri: "https://plus.unsplash.com/premium_photo-1698867576608-f8dbde8ecbe8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHZlZ2V0YXJpYW4lMjBmb29kfGVufDB8fDB8fHww",
};
export default function Category() {
  return (
    <ScrollView>
      <View>
        <ImageBackground
          source={image1}
          resizeMode="contain"
          style={{ width: 200, height: 200, marginTop: 50 }}
        ></ImageBackground>
        <Link href="/NonVeg" asChild>
          <Pressable>
            <Text style={{ marginLeft: 60, marginTop: 10, fontSize: 20 }}>
              Non-Veg
            </Text>
          </Pressable>
        </Link>
      </View>
      <View>
        <ImageBackground
          source={image2}
          resizeMode="contain"
          style={{ width: 200, height: 200, marginTop: 50 }}
        ></ImageBackground>
        <Link href="/italian" asChild>
          <Pressable>
            <Text style={{ marginLeft: 60, marginTop: 10, fontSize: 20 }}>
              Italian
            </Text>
          </Pressable>
        </Link>
      </View>
      <View style={{ marginLeft: 200, position: "absolute" }}>
        <ImageBackground
          source={image}
          resizeMode="contain"
          style={{ width: 200, height: 200, marginTop: 50 }}
        ></ImageBackground>
        <Link href="/Dessert" asChild>
          <Pressable>
            <Text style={{ marginLeft: 60, marginTop: 10, fontSize: 20 }}>
              Dessert
            </Text>
          </Pressable>
        </Link>
      </View>
      <View style={{ marginLeft: 200, position: "absolute", marginTop: 285 }}>
        <ImageBackground
          source={image3}
          resizeMode="contain"
          style={{ width: 200, height: 200, marginTop: 50 }}
        ></ImageBackground>
        <Link href="/Veg" asChild>
          <Pressable>
            <Text style={{ marginLeft: 80, marginTop: 10, fontSize: 20 }}>
              Veg
            </Text>
          </Pressable>
        </Link>
      </View>
    </ScrollView>
  );
}
