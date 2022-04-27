import React, { useEffect, useState } from "react";
import { View } from "react-native";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./src/StackNavigation";

const App = () => {
  const [fonts, setFonts] = useState(false);
  const loadFonts = async () => {
    await Font.loadAsync({
      Epilogue700: require("./assets/fonts/Epilogue-Bold.ttf"),
      Epilogue500: require("./assets/fonts/Epilogue-Medium.ttf"),
      Epilogue400: require("./assets/fonts/Epilogue-Regular.ttf"),
    });
    setFonts(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (fonts) {
    return (
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    );
  } else {
    return <View></View>;
  }
};

export default App;
