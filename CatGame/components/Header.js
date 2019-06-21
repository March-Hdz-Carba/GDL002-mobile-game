import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Tic Tac Toe
                </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "black",
      flexDirection: "row",
      marginTop: 20,
    },
  
    title: {
      color: "white",
      fontWeight: "bold",
      fontSize: 20,
      flex: 1,
      textAlign: "center", 
      fontFamily: "Roboto",
  }
});


export default Header;