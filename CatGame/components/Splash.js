import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';


export default class Splash extends Component {
    static navigationOptions = {
     header: null
    }

    componentWillMount() {
      setTimeout(()=> {
        this.props.navigation.navigate("Game");
      },2000 )
    }

  render() {
    return (
        <View style={styles.container}>
            <View >
           <Image
           style={styles.logo}
          source={require('../assets/TicTac.png')}
        />
            </View>
    
        </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
    },
  });
  
  