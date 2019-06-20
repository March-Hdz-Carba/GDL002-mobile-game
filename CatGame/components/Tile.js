import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";


class Tile extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                <View style={{flexDirection: "row"}}>
                    <View style={[styles.tile, { borderLeftWidth: 0, borderTopWidth:0 }]} >
                        <Icon name="close" style={styles.titleX}/>
                    <View/>  

                    <View style={[styles.tile, { borderTopWidth:0 }]} />
                    <View style={[styles.tile, { borderTopWidth: 0, borderRightWidth: 0 }]} />
                </View>

                <View style={{flexDirection: "row"}}>
                    <View style={[styles.tile, { borderLeftWidth: 0 }]} />
                    <View style={[styles.tile, { }]} />
                    <View style={[styles.tile, { borderRightWidth: 0 }]} />
                </View>

                <View style={{flexDirection: "row"}}>
                    <View style={[styles.tile, { borderBottomWidth: 0, borderLeftWidth: 0 }]} />
                    <View style={[styles.tile, { borderBottomWidth: 0 }]} />
                    <View style={[styles.tile, { borderBottomWidth: 0, borderRightWidth: 0 }]} />
                </View>
               
         
            </View>
            </View>

        );
    }
}

export default Tile;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    tile: {
      borderWidth: 5,
      width: 100,
      height: 100
    },

    titleX: {
        color: "red",
        fontSize: 60,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }

  });

