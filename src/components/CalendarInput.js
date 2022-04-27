import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/Ionicons";

const CalendarInput = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = (date) => {
    Alert.alert("Current Date: ", date.toString());
    hideDatePicker();
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.calendarInput} onPress={showDatePicker}>
        <Icon name="md-calendar-sharp" size={16} />
        <Text style={styles.textStyle}>Data da retirada</Text>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.calendarInput} onPress={showDatePicker}>
        <Icon name="md-calendar-sharp" size={16} />
        <Text style={styles.textStyle}>Data da devolução</Text>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CalendarInput;

const styles = StyleSheet.create({
  mainContainer: {
    width: 320,
    height: 90,
    marginTop: 10,
    justifyContent: "space-between",
  },
  calendarInput: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    borderRadius: 8,
    backgroundColor: "#F0F0F0F0",
  },
  textStyle: { fontSize: 13, marginLeft: 10 },
});
