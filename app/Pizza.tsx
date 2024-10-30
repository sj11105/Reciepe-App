import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

interface FoodItem {
  id: string;
  title: string;
  ingredients: string;
  instructions: string;
}

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<FoodItem[]>([]);

  const getFoodItems = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/recipes/search?q=Pizza"
      );
      const json = await response.json();
      setData(json.recipes); // Access the correct property 'recipes'
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFoodItems();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id.toString()} // Ensure the key is a string
          renderItem={({ item }) => (
            <View style={{ marginBottom: 16, width: 300 }}>
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                {item.title} {/* Use 'title' instead of 'name' */}
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Ingredients: {item.ingredients}
              </Text>
              <Text style={{ fontSize: 16, marginTop: 10 }}>
                Instructions:{item.instructions}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default App;
