import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Alert, Button, ImageBackground, Image } from 'react-native';
//import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import { FontAwesome as IconNave } from "react-native-vector-icons";
import Header from "./components/Header";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0] 
      ],
      currentPlayer: 1,
    }
  }

  componentDidMount(){
    this.initializeGame();
  }


  initializeGame (){
    this.setState({
      ...this.state,
      gameState:
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]  
      ],
      currentPlayer: 1,
    })
  }

  //Return 1 if Player 1 won, -1 if player 2 won, or a 0 if no one has won.
  getWinner = () => {
    const numTile = 3;
    let arr = this.state.gameState;
    let sum;

    //check rows
    for (let i = 0; i < numTile; i++)
      sum = arr[i][0] + arr[i][1] + arr[i][2];
      if (sum === 3) {return 1 }
      else if (sum === -3) {return -1 }

    //check columns
    for (let i = 0; i < numTile; i++)
      sum = arr[0][i] + arr[1][i] + arr[2][i];
      if (sum === 3) {return 1 }
      else if (sum === -3) {return -1 }
      
    //check diagonal
      sum = arr[0][0] + arr[1][1] + arr[2][2];
      if (sum === 3) {return 1 }
      else if (sum === -3) {return -1 }
      
      sum = arr[2][0] + arr[1][1] + arr[0][2];
      if (sum === 3) {return 1 }
      else if (sum === -3) {return -1 }

    //No winners
    let draw = 0;
    for (let i=0; i< numTile; i++){
      for (let j=0; j< numTile; j++){
        if (this.state.gameState[i][j] === 0){
          draw++
        }
      }
    }
    if (draw === 0){
    return 0
    }  
  }

  onTilePress = (row, col) => {
    // Dont allow tile to change...
    let value = this.state.gameState[row][col];
    if (value != 0) {return; }

    //Grab current player...
    let currentPlayer = this.state.currentPlayer;

    //Set the correct tile...
    let arr = this.state.gameState.slice();
    arr[row][col] = currentPlayer;
    this.setState({gameState: arr});

    //Switch to other player...
    let nextPlayer = (currentPlayer == 1) ? -1 : 1;
    this.setState ({currentPlayer: nextPlayer,});

    //Check for winners
    let winner = this.getWinner();
    if (winner === 1) { 
      Alert.alert("Player 1 is the winner");
      this.initializeGame();
    } else if (winner === -1) {
      Alert.alert("Player 2 is the winner");
      this.initializeGame();
    }
    else if (winner === 0){
      Alert.alert("Empate, Intetalo de nuevo");
      this.initializeGame();
    }
  }

  renderIcon = (row, col) => {
    let value = this.state.gameState[row][col];
    switch (value) 
    {
      case 1: return <Image source={require("../CatGame/assets/cohete.png")} style={styles.tileO} />;
      case -1: return <Image source={require("../CatGame/assets/ovni.png")} style={styles.tileO} />;
      default: return <View />;
    }
  }

render(){
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../CatGame/assets/fondoSpace.png")} style={styles.container}>
      <Header />

        <View style={styles.container}>
                
          <View style={{flexDirection: "row"}}>
              <TouchableOpacity onPress={() => this.onTilePress(0, 0)} style={[styles.tile, { borderLeftWidth: 0, borderTopWidth:0 }]}> 
                {this.renderIcon(0, 0)}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onTilePress(0, 1)} style={[styles.tile, { borderTopWidth:0 }]}>
                {this.renderIcon(0, 1)} 
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onTilePress(0, 2)} style={[styles.tile, { borderTopWidth: 0, borderRightWidth: 0 }]}>
                {this.renderIcon(0, 2)} 
              </TouchableOpacity>
          </View>

          <View style={{flexDirection: "row"}}>
              <TouchableOpacity onPress={() => this.onTilePress(1, 0)} style={[styles.tile, { borderLeftWidth: 0 }]}>
                {this.renderIcon(1, 0)}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onTilePress(1, 1)} style={[styles.tile, { }]}>
                {this.renderIcon(1, 1)}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onTilePress(1, 2)} style={[styles.tile, { borderRightWidth: 0 }]}>
                {this.renderIcon(1, 2)}
              </TouchableOpacity>
          </View>

          <View style={{flexDirection: "row"}}>
              <TouchableOpacity onPress={() => this.onTilePress(2, 0)} style={[styles.tile, { borderBottomWidth: 0, borderLeftWidth: 0 }]}>
                {this.renderIcon(2, 0)}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onTilePress(2, 1)} style={[styles.tile, { borderBottomWidth: 0 }]}>
                {this.renderIcon(2, 1)}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onTilePress(2, 2)} style={[styles.tile, { borderBottomWidth: 0, borderRightWidth: 0 }]}>
                {this.renderIcon(2, 2)}
              </TouchableOpacity>
          </View>

        <View style={styles.newGame}/>       
        <Button title="Comenzar Nuevo Juego" onPress={() => this.initializeGame()} ></Button> 
        </View>
        </ImageBackground>
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

  tile: {
    borderWidth: 5,
    borderColor: "white",
    width: 100,
    height: 100
  },

  tileX: {
      color: "#9711E2",
      fontSize: 75,
      marginLeft: "10%",
      marginTop: "5%",
    
  },

  tileO: {
    alignItems: "center",
    justifyContent: 'center',
    marginLeft: "15%",
    marginTop: "15%",
    width: 60,
    height: 60,
  },
  newGame:{
    paddingTop: 30,
  } 

});
