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
      flexDirection: "row",
      marginTop: 20,
    },
  
    title: {
      color: "#ffedf2",
      fontWeight: "bold",
      fontSize: 25,
      flex: 1,
      textAlign: "center", 
      fontFamily: "Roboto",
  }
});


export default Header;