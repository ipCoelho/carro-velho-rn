import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";

const TouchableIcon = ({
  iconChecked,
  iconUnchecked,
  style,
  onPress,
  iconState = false,
}) => {
  const [checked, setChecked] = useState(iconState);

  const handleChecked = () => {
    const newState = !checked;
    setChecked(newState);
    onPress(newState);
  };

  return (
    <TouchableOpacity onPress={handleChecked}>
      <View {...style}>{checked ? iconChecked : iconUnchecked}</View>
    </TouchableOpacity>
  );
};

export default TouchableIcon;
