import * as React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function Header()
{
  return(
    <Text style = {styles.header}>ISS TRACKER App</Text>
  );
}

const styles = StyleSheet.create({
  header:
  {
    color: "white",
    textAlign: "center",
    fontSize: 45,
    fontWeight: "bold",
    padding: 30
  }
});
