"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    id;
    name;
    playingRole;
    credit;
    run = 0;
    ball = 0;
    wickets = 0;
    fantasyPoints = 0;
    isCaptain = false;
    isViceCaptain = false;
    isBat = false;
    isBowl = false;
    constructor(id, name, playingRole, credit) {
        this.id = id;
        this.name = name;
        this.playingRole = playingRole;
        this.credit = credit;
    }
    shot() {
        let result = Math.floor(Math.random() * 7);
        return result;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getPlayingRole() {
        return this.playingRole;
    }
    getCredit() {
        return this.credit;
    }
    getisCaptain() {
        return this.isCaptain;
    }
    setisCaptain() {
        this.isCaptain = true;
    }
    setisViceCaptain() {
        this.isViceCaptain = true;
    }
    getisViceCaptain() {
        return this.isViceCaptain;
    }
    addRun(shot) {
        this.run += shot;
    }
    addFantsyPoints(fantasyPoints) {
        this.fantasyPoints += fantasyPoints;
    }
    getFantasyPoints() {
        return this.fantasyPoints;
    }
    getRun() {
        return this.run;
    }
    setIsBat(player) {
        player.isBat = true;
    }
    setIsBowl(player) {
        player.isBowl = true;
    }
    getIsBowl() {
        return this.isBowl;
    }
    getIsBat() {
        return this.isBat;
    }
    addBall() {
        this.ball++;
    }
    getBall() {
        return this.ball;
    }
    addWickets() {
        this.wickets++;
    }
    getWickets() {
        return this.wickets;
    }
}
exports.Player = Player;
