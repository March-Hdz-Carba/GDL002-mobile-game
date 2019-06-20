import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";

class Circle extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon name="close" style={styles.innerCicle} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
     
    },
  
    innerCicle: {
      color: "red",
      fontSize: 60,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
  }
});

export default Circle;