"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const team_1 = require("./team");
const match_1 = require("./match");
const playerMapper_1 = __importDefault(require("./playerMapper"));
const playerList_1 = require("./playerList");
let team1 = new team_1.Team('CSK');
let team2 = new team_1.Team('RCB');
let match1 = new match_1.Match(team1, team2);
match1.flipToss();
team1 = match1.getBattingTeam();
team2 = match1.getBowlingTeam();
// let map1 = new Mapper();
let allPlayers = playerList_1.playersData.map(player => {
    return playerMapper_1.default.toDomain(player);
});
let playersForTeam1 = allPlayers.slice(0, 11);
team1.addPlayer(playersForTeam1);
let playersForTeam2 = allPlayers.slice(12, 25);
team2.addPlayer(playersForTeam2);
team1.setCaptain(allPlayers[0]);
team1.setViceCaptain(allPlayers[2]);
team2.setCaptain(allPlayers[17]);
team2.setViceCaptain(allPlayers[20]);
match1.startGame();
for (let i = 0; i < 30; i++) {
    match1.hit();
}
match1.changeInning();
for (let i = 0; i < 30; i++) {
    match1.hit();
}
match1.getScoreBoard();
// console.log(team1);
// console.log();
// console.log("------------------------------------------------------------");
// console.log();
// console.log(team2);
