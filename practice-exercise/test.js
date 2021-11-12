let prompt = require('prompt-sync')();
 
 // Class that holds a collection of players and properties and functions for the group
 class Players {
    constructor(){
      this.players = []
    }
    // create a new player and save it in the collection
    newPlayer(name){
      let p = new Players(name)
      this.players.push()
      return p
    }
    get allPlayers(){
      return this.players
    }
    // this could include summary stats like average score, etc. For simplicy, just the count for now
    get numberOfPlayers(){
        return this.players.length
    }
  }
  
  let league = new Players()
  league.newPlayer("Mark")
  league.newPlayer("Roger")
  
  // list all the players
  console.log(league.numberOfPlayers + " Players");
  console.log(league.allPlayers)
  
  
  // make them do something
  league.allPlayers.forEach(player => player.play());