import {Team} from './team';
import {Match} from './match';
import Mapper from './playerMapper';
import  {playersData} from './playerList'
let team1 = new Team('CSK');
let team2 = new Team('RCB');
let match1 = new Match(team1, team2);

match1.flipToss();

team1 = match1.getBattingTeam();
team2 = match1.getBowlingTeam();

// let map1 = new Mapper();
let allPlayers = playersData.map(player =>{
     return Mapper.toDomain(player);
})

let playersForTeam1 = allPlayers.slice(0,11);
team1.addPlayer(playersForTeam1);

let playersForTeam2 = allPlayers.slice(12,25);
team2.addPlayer(playersForTeam2);



team1.setCaptain(allPlayers[0])
team1.setViceCaptain(allPlayers[2])
team2.setCaptain(allPlayers[17])
team2.setViceCaptain(allPlayers[20])

match1.startGame();
for (let i = 0; i < 30; i++) {
     match1.hit()  
}

match1.changeInning();

for (let i = 0; i < 30; i++) {
     match1.hit()   
}

match1.getScoreBoard();

// console.log(team1);


// console.log();

// console.log("------------------------------------------------------------");

// console.log();


// console.log(team2);

