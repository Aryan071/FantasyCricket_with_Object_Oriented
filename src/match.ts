import { Player } from "./player";
import { Team } from "./team";
import { shots } from "./playerList";

export class Match {
  private battingTeam: Team;
  private bowlingTeam: Team;
  private currentBatsman!: Player;
  private currentBowler!: Player;

  constructor(team1: Team, team2: Team) {
    this.isTeamNameSame(team1, team2);
    this.battingTeam = team1;
    this.bowlingTeam = team2;
    console.log(
      "Match is played between " + team1.getName() + " and " + team2.getName()
    );
  }

  flipToss(): void {
    let headsOrTails = Math.floor(Math.random() * 2);
    if (headsOrTails == 0) {
      let temp = this.battingTeam;
      this.battingTeam = this.bowlingTeam;
      this.bowlingTeam = temp;
    }
    console.log(
      `${this.battingTeam.getName()} have won the toss & choose to bat first`
    );
  }

  isTeamNameSame(team1: Team, team2: Team): void {
    if (team1.getName() == team2.getName()) {
      throw new Error("Duplicate Team names are not allowed");
    }
  }

  startGame(): void {
    console.log("Game is started");
    this.battingTeam.sortPlayers();
    this.bowlingTeam.sortPlayers();
    this.currentBatsman = this.battingTeam.getBatsman();
    this.currentBowler = this.bowlingTeam.getBowler();
    // this.hit();
  }

  hit(): void {
    this.bowlingTeam.addBall(this.currentBatsman)
    let shotIndex = this.currentBatsman.shot();

    if (shots[shotIndex].name == "Wicket") {
      this.changeBatsman();
      this.battingTeam.addWickets(this.currentBowler);
      this.updateBowlerFantasyPoints(shotIndex, this.currentBowler);
      this.updateFantasyPointsOnDuck(this.currentBatsman, this.battingTeam);
    } else if (shots[shotIndex].name == "DotBall") {
      this.updateBowlerFantasyPoints(shotIndex, this.currentBowler);
    } else {
      this.updateBatsmanFantasyPoints(shotIndex, this.currentBatsman);
    }
  }

  updateBatsmanFantasyPoints(shotIndex: number, batsman: Player): void {
    this.battingTeam.addRuns(shots[shotIndex].runs,batsman);
    if (batsman.getisCaptain() === true) {
      this.battingTeam.addFantasyPoints(shots[shotIndex].point * 2, batsman);
    } else if (batsman.getisViceCaptain() === true) {
      this.battingTeam.addFantasyPoints(shots[shotIndex].point * 1.5, batsman);
    } else {
      this.battingTeam.addFantasyPoints(shots[shotIndex].point, batsman);
    }
  }

  updateBowlerFantasyPoints(shotIndex: number, bowler: Player): void {
    if (bowler.getisCaptain() === true) {
      this.bowlingTeam.addFantasyPoints(shots[shotIndex].point * 2, bowler);
    } else if (bowler.getisViceCaptain() === true) {
      bowler.addFantsyPoints(shots[shotIndex].point * 1.5);
    } else {
      bowler.addFantsyPoints(shots[shotIndex].point);
    }
  }

  changeBatsman(): void {
    let currentBatsmanIndex = this.battingTeam
      .getPlayers()
      .indexOf(this.currentBatsman);
    currentBatsmanIndex++;
    this.currentBatsman = this.battingTeam.getPlayers()[currentBatsmanIndex];
  }

  updateFantasyPointsOnDuck(player: Player, team: Team): void {
    if (player.getRun() == 0) {
      team.addFantasyPoints(-2, player);
    }
  }

  updateOvers():void{
   if(this.bowlingTeam.getBall() % 6 == 0){
    this.changeBowler();
   }
  }

  changeBowler(): void {
    let currentBowlerIndex = this.bowlingTeam
      .getPlayers()
      .indexOf(this.currentBowler);
    currentBowlerIndex++;
    this.currentBowler= this.bowlingTeam.getPlayers()[currentBowlerIndex];
  }

  changeInning():void{
    let temp:Team = this.battingTeam;
    this.battingTeam = this.bowlingTeam;
    this.bowlingTeam = temp;
  }

  getScoreBoard():void{
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
  getBattingTeam(): Team {
    return this.battingTeam;
  }
  getBowlingTeam(): Team {
    return this.bowlingTeam;
  }

  getMatchWinner():void{
    if(this.battingTeam.getFantasyPoints() > this.bowlingTeam.getFantasyPoints()){
      console.log(`${this.battingTeam.getName()} has won the match`);
    }else if(this.battingTeam.getFantasyPoints() == this.bowlingTeam.getFantasyPoints()){
      console.log('Match is tied');
    }else{
      console.log(`${this.bowlingTeam.getName()} has won the match`);  
    }
  }

  playerScore(team:Team):void{
    console.log("Team " + team.getName() + ":");
    console.log("---------------------------------------------");
    console.log("---------------------------------------------");
   
    team.getPlayers().map((player,index) => {
      console.log(` ${index + 1}  -- Name: ${player.getName()} -- Runs: ${player.getRun()} -- Balls: ${player.getBall()} -- Wickets: ${player.getWickets()} -- FantasyPoins: ${player.getFantasyPoints()}`);
      console.log("----------------------------------------------------------------------------------------"); 
    })
    
  }
}
