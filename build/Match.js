"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = void 0;
const playerList_1 = require("./playerList");
class Match {
    battingTeam;
    bowlingTeam;
    currentBatsman;
    currentBowler;
    constructor(team1, team2) {
        this.isTeamNameSame(team1, team2);
        this.battingTeam = team1;
        this.bowlingTeam = team2;
        console.log("Match is played between " + team1.getName() + " and " + team2.getName());
    }
    flipToss() {
        let headsOrTails = Math.floor(Math.random() * 2);
        if (headsOrTails == 0) {
            let temp = this.battingTeam;
            this.battingTeam = this.bowlingTeam;
            this.bowlingTeam = temp;
        }
        console.log(`${this.battingTeam.getName()} have won the toss & choose to bat first`);
    }
    isTeamNameSame(team1, team2) {
        if (team1.getName() == team2.getName()) {
            throw new Error("Duplicate Team names are not allowed");
        }
    }
    startGame() {
        console.log("Game is started");
        this.battingTeam.sortPlayers();
        this.bowlingTeam.sortPlayers();
        this.currentBatsman = this.battingTeam.getBatsman();
        this.currentBowler = this.bowlingTeam.getBowler();
        // this.hit();
    }
    hit() {
        this.bowlingTeam.addBall(this.currentBatsman);
        let shotIndex = this.currentBatsman.shot();
        if (playerList_1.shots[shotIndex].name == "Wicket") {
            this.changeBatsman();
            this.battingTeam.addWickets(this.currentBowler);
            this.updateBowlerFantasyPoints(shotIndex, this.currentBowler);
            this.updateFantasyPointsOnDuck(this.currentBatsman, this.battingTeam);
        }
        else if (playerList_1.shots[shotIndex].name == "DotBall") {
            this.updateBowlerFantasyPoints(shotIndex, this.currentBowler);
        }
        else {
            this.updateBatsmanFantasyPoints(shotIndex, this.currentBatsman);
        }
    }
    updateBatsmanFantasyPoints(shotIndex, batsman) {
        this.battingTeam.addRuns(playerList_1.shots[shotIndex].runs, batsman);
        if (batsman.getisCaptain() === true) {
            this.battingTeam.addFantasyPoints(playerList_1.shots[shotIndex].point * 2, batsman);
        }
        else if (batsman.getisViceCaptain() === true) {
            this.battingTeam.addFantasyPoints(playerList_1.shots[shotIndex].point * 1.5, batsman);
        }
        else {
            this.battingTeam.addFantasyPoints(playerList_1.shots[shotIndex].point, batsman);
        }
    }
    updateBowlerFantasyPoints(shotIndex, bowler) {
        if (bowler.getisCaptain() === true) {
            this.bowlingTeam.addFantasyPoints(playerList_1.shots[shotIndex].point * 2, bowler);
        }
        else if (bowler.getisViceCaptain() === true) {
            bowler.addFantsyPoints(playerList_1.shots[shotIndex].point * 1.5);
        }
        else {
            bowler.addFantsyPoints(playerList_1.shots[shotIndex].point);
        }
    }
    changeBatsman() {
        let currentBatsmanIndex = this.battingTeam
            .getPlayers()
            .indexOf(this.currentBatsman);
        currentBatsmanIndex++;
        this.currentBatsman = this.battingTeam.getPlayers()[currentBatsmanIndex];
    }
    updateFantasyPointsOnDuck(player, team) {
        if (player.getRun() == 0) {
            team.addFantasyPoints(-2, player);
        }
    }
    updateOvers() {
        if (this.bowlingTeam.getBall() % 6 == 0) {
            this.changeBowler();
        }
    }
    changeBowler() {
        let currentBowlerIndex = this.bowlingTeam
            .getPlayers()
            .indexOf(this.currentBowler);
        currentBowlerIndex++;
        this.currentBowler = this.bowlingTeam.getPlayers()[currentBowlerIndex];
    }
    changeInning() {
        let temp = this.battingTeam;
        this.battingTeam = this.bowlingTeam;
        this.bowlingTeam = temp;
    }
    getScoreBoard() {
        console.log();
        this.getMatchWinner();
        console.log("Scoreboard: ");
        console.log("---------------------------");
        console.log(this.battingTeam.getName() + ': ' + this.battingTeam.getRuns() + "/" + this.battingTeam.getWickets() + " " + "FantasyPoints:" + this.battingTeam.getFantasyPoints());
        this.playerScore(this.battingTeam);
        console.log();
        console.log(this.bowlingTeam.getName() + ': ' + this.bowlingTeam.getRuns() + "/" + this.bowlingTeam.getWickets() + " " + "FantasyPoints:" + this.bowlingTeam.getFantasyPoints());
        this.playerScore(this.bowlingTeam);
    }
    getBattingTeam() {
        return this.battingTeam;
    }
    getBowlingTeam() {
        return this.bowlingTeam;
    }
    getMatchWinner() {
        if (this.battingTeam.getFantasyPoints() > this.bowlingTeam.getFantasyPoints()) {
            console.log(`${this.battingTeam.getName()} has won the match`);
        }
        else if (this.battingTeam.getFantasyPoints() == this.bowlingTeam.getFantasyPoints()) {
            console.log('Match is tied');
        }
        else {
            console.log(`${this.bowlingTeam.getName()} has won the match`);
        }
    }
    playerScore(team) {
        console.log("Team " + team.getName() + ":");
        console.log("---------------------------------------------");
        console.log("---------------------------------------------");
        team.getPlayers().map((player, index) => {
            console.log(` ${index + 1}  -- Name: ${player.getName()} -- Runs: ${player.getRun()} -- Balls: ${player.getBall()} -- Wickets: ${player.getWickets()} -- FantasyPoins: ${player.getFantasyPoints()}`);
            console.log("----------------------------------------------------------------------------------------");
        });
    }
}
exports.Match = Match;
