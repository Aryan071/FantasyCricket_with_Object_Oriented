"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
class Team {
    name;
    players = [];
    teamCredit = 0;
    constructor(name) {
        this.name = name;
        this.validateName(this.name);
        console.log(this.name + " Team is created");
    }
    validateName(name) {
        if (name == "") {
            throw new Error("Name of team should not be same");
        }
    }
    addPlayer(playerData) {
        playerData.map((player) => {
            if (this.validatePlayer(player)) {
                if (this.validatePlayerRole(player)) {
                    this.players.push(player);
                    this.teamCredit += player.getCredit();
                }
                else {
                    console.log("You can not add " + player.getName());
                    return;
                }
            }
            else {
                console.log("You can not add " + player.getName());
                return;
            }
        });
        //  this.validateTotalPlayerCount();
    }
    validatePlayer(player) {
        if (player.getCredit() + this.teamCredit > 100 ||
            this.players.length > 11) {
            return false;
        }
        return true;
    }
    removePlayer(id) {
        this.players.map((player) => {
            if (player.getId() == id) {
                this.players.splice(this.players.indexOf(player), 1);
                this.teamCredit -= player.getCredit();
            }
        });
    }
    validatePlayerRole(player) {
        let result = false;
        if (player.getPlayingRole() == "Batsman") {
            result = this.validateBatsmanRole(player);
        }
        else if (player.getPlayingRole() == "Bowler") {
            result = this.validateBowlerRole(player);
        }
        else if (player.getPlayingRole() == "Wicketkeeper") {
            result = this.validateWicketkeeperRole(player);
        }
        return result;
    }
    validateTotalPlayerCount() {
        if (this.players.length != 11) {
            // console.log(batsman.length + " " + bowlers.length + " " + wicketkeeper.length);
            throw new Error("Please add 11 player to team " + this.name);
        }
    }
    validateBatsmanRole(player) {
        let batsman = this.players.filter(player => {
            return player.getPlayingRole() == "Batsman";
        });
        if (batsman.length < 5) {
            return true;
        }
        return false;
    }
    validateBowlerRole(player) {
        let bowlers = this.players.filter(player => {
            return player.getPlayingRole() == "Bowler";
        });
        if (bowlers.length < 5) {
            return true;
        }
        return false;
    }
    validateWicketkeeperRole(player) {
        let Wicketkeepers = this.players.filter(player => {
            return player.getPlayingRole() == "Wicketkeeper";
        });
        if (Wicketkeepers.length < 1) {
            return true;
        }
        return false;
    }
    getTeamName() {
        return this.name;
    }
}
exports.Team = Team;
