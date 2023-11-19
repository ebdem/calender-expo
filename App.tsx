import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import DateRangePicker from "./src/components/Calender";
import moment from "moment";
import { SetStateAction, useState } from "react";
import { width } from "./src/helpers";

export default function App() {
  const [state, setState] = useState({
    startDate: new Date(),
    endDate: new Date(),
    displayedDate: moment(),
  });

  const setDates = (dates: SetStateAction<{ startDate: Date; endDate: Date; displayedDate: moment.Moment; }>) => {
    setState({
      ...state,
      ...dates,
    });
  };

  console.log(state);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <DateRangePicker
        onChange={setDates}
        endDate={state.endDate}
        startDate={state.startDate}
        displayedDate={state.displayedDate}
        range
        maxDate={new Date()}
        selectedStyle={{
          backgroundColor: "red",
          borderRadius: width * 0.04,
          margin:0
        }}
      >
       
       <Text>Naber</Text>
       
      </DateRangePicker>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
