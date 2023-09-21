"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
class Team {
    name;
    players = [];
    fantasyPoints = 0;
    over = 0;
    ball = 0;
    run = 0;
    wickets = 0;
    constructor(name) {
        this.validateName(name);
        this.name = name;
        console.log(`${this.name} Team is created`);
    }
    validateName(name) {
        if (name === "") {
            throw new Error("Name of the team should not be empty");
        }
    }
    addPlayer(playerData) {
        let totalCredit = 0;
        playerData.forEach((player) => {
            if (this.validatePlayer(player, totalCredit) &&
                this.validatePlayerRole(player)) {
                this.players.push(player);
                totalCredit += player.getCredit();
            }
            else {
                console.log(`You cannot add ${player.getName()}`);
            }
        });
        this.validateTotalPlayerCount();
    }
    validatePlayer(player, totalCredit) {
        return player.getCredit() + totalCredit <= 100 && this.players.length < 11;
    }
    removePlayer(id) {
        let playerToRemove = this.players.find((player) => player.getId() === id);
        if (playerToRemove) {
            this.players.splice(this.players.indexOf(playerToRemove), 1);
        }
    }
    countByRole(role) {
        return this.players.filter((player) => player.getPlayingRole() === role)
            .length;
    }
    validatePlayerRole(player) {
        if (player.getPlayingRole() === "Batsman") {
            return this.countByRole("Batsman") < 5;
        }
        else if (player.getPlayingRole() === "Bowler") {
            return this.countByRole("Bowler") < 5;
        }
        else if (player.getPlayingRole() === "Wicketkeeper") {
            return this.countByRole("Wicketkeeper") < 1;
        }
        return false;
    }
    validateTotalPlayerCount() {
        if (this.players.length !== 11) {
            throw new Error(`Please add 11 players to team ${this.name}`);
        }
    }
    sortPlayers() {
        let batsman = [];
        let bowler = [];
        let wicketkeeper = [];
        this.players.map((player) => {
            if (player.getPlayingRole() === "Batsman") {
                batsman.push(player);
            }
            else if (player.getPlayingRole() === "Bowler") {
                bowler.push(player);
            }
            else if (player.getPlayingRole() === "Wicketkeeper") {
                wicketkeeper.push(player);
            }
        });
        this.players = [...batsman, ...bowler, ...wicketkeeper];
    }
    setCaptain(playerForCaptain) {
        if (playerForCaptain.getisViceCaptain() == true) {
            throw new Error("Your Captain is same as ViceCaptain for team " + this.name);
        }
        this.players.map((player) => {
            if (playerForCaptain === player) {
                player.setisCaptain();
            }
        });
    }
    setViceCaptain(playerForViceCaptain) {
        if (playerForViceCaptain.getisCaptain() == true) {
            throw new Error("Your ViceCaptain is same as Captain for team " + this.name);
        }
        this.players.map((player) => {
            if (playerForViceCaptain === player) {
                player.setisViceCaptain();
            }
        });
    }
    getBatsman() {
        return this.players.filter((player) => {
            if (player.getPlayingRole() == "Batsman" && player.getIsBat() == false) {
                return player;
            }
        })[0];
    }
    getBowler() {
        return this.players.filter((player) => {
            if (player.getPlayingRole() == "Bowler" && player.getIsBowl() == false) {
                return player;
            }
        })[0];
    }
    addFantasyPoints(fantasyPoints, player) {
        player.addFantsyPoints(fantasyPoints);
        this.fantasyPoints += fantasyPoints;
    }
    addWickets(player) {
        player.addWickets();
        this.wickets++;
    }
    addRuns(runs, player) {
        player.addRun(runs);
        this.run += runs;
    }
    getRuns() {
        return this.run;
    }
    getFantasyPoints() {
        return this.fantasyPoints;
    }
    getCaptain() {
        return this.players.filter((player) => {
            if (player.getisCaptain() == true) {
                return player;
            }
        })[0];
    }
    getViceCaptain() {
        return this.players.filter((player) => {
            if (player.getisViceCaptain() == true) {
                return player;
            }
        })[0];
    }
    getName() {
        return this.name;
    }
    getPlayers() {
        return this.players;
    }
    addBall(player) {
        player.addBall();
        this.ball++;
    }
    getBall() {
        return this.ball;
    }
    setWickets() {
        this.wickets++;
    }
    getWickets() {
        return this.wickets;
    }
}
exports.Team = Team;
