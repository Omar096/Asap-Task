import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import LargCard from "../components/LargCard";

function ModelDetails(props) {
  return (
    <View style={styles.container}>
      <ScrollView style={{flex:1}}>
        <LargCard />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

});
export default ModelDetails;
