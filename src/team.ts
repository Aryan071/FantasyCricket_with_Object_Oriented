import { Player } from "./player";

export class Team {
  private name: string;
  private players: Player[] = [];
  private fantasyPoints: number = 0;
  private over: number = 0;
  private ball: number = 0;
  private run: number = 0;
  private wickets: number = 0;

  constructor(name: string) {
    this.validateName(name);
    this.name = name;
    console.log(`${this.name} Team is created`);
  }

  validateName(name: string): void {
    if (name === "") {
      throw new Error("Name of the team should not be empty");
    }
  }

  addPlayer(playerData: Player[]): void {
    let totalCredit = 0;
    playerData.forEach((player) => {
      if (
        this.validatePlayer(player, totalCredit) &&
        this.validatePlayerRole(player)
      ) {
        this.players.push(player);
        totalCredit += player.getCredit();
      } else {
        console.log(`You cannot add ${player.getName()}`);
      }
    });
    this.validateTotalPlayerCount();
  }

  validatePlayer(player: Player, totalCredit: number): boolean {
    return player.getCredit() + totalCredit <= 100 && this.players.length < 11;
  }

  removePlayer(id: number): void {
    let playerToRemove = this.players.find((player) => player.getId() === id);
    if (playerToRemove) {
      this.players.splice(this.players.indexOf(playerToRemove), 1);
    }
  }

  countByRole(role: string): number {
    return this.players.filter((player) => player.getPlayingRole() === role)
      .length;
  }

  validatePlayerRole(player: Player): boolean {
    if (player.getPlayingRole() === "Batsman") {
      return this.countByRole("Batsman") < 5;
    } else if (player.getPlayingRole() === "Bowler") {
      return this.countByRole("Bowler") < 5;
    } else if (player.getPlayingRole() === "Wicketkeeper") {
      return this.countByRole("Wicketkeeper") < 1;
    }
    return false;
  }

  validateTotalPlayerCount(): void {
    if (this.players.length !== 11) {
      throw new Error(`Please add 11 players to team ${this.name}`);
    }
  }

  sortPlayers(): void {
    let batsman: Player[] = [];
    let bowler: Player[] = [];
    let wicketkeeper: Player[] = [];

    this.players.map((player) => {
      if (player.getPlayingRole() === "Batsman") {
        batsman.push(player);
      } else if (player.getPlayingRole() === "Bowler") {
        bowler.push(player);
      } else if (player.getPlayingRole() === "Wicketkeeper") {
        wicketkeeper.push(player);
      }
    });
    this.players = [...batsman, ...bowler, ...wicketkeeper];
  }

  setCaptain(playerForCaptain: Player): void {
    if (playerForCaptain.getisViceCaptain() == true) {
      throw new Error(
        "Your Captain is same as ViceCaptain for team " + this.name
      );
    }
    this.players.map((player) => {
      if (playerForCaptain === player) {
        player.setisCaptain();
      }
    });
  }

  setViceCaptain(playerForViceCaptain: Player): void {
    if (playerForViceCaptain.getisCaptain() == true) {
      throw new Error(
        "Your ViceCaptain is same as Captain for team " + this.name
      );
    }
    this.players.map((player) => {
      if (playerForViceCaptain === player) {
        player.setisViceCaptain();
      }
    });
  }

  getBatsman(): Player {
    return this.players.filter((player) => {
      if (player.getPlayingRole() == "Batsman" && player.getIsBat() == false) {
        return player;
      }
    })[0];
  }

  getBowler(): Player {
    return this.players.filter((player) => {
      if (player.getPlayingRole() == "Bowler" && player.getIsBowl() == false) {
        return player;
      }
    })[0];
  }

  addFantasyPoints(fantasyPoints: number, player: Player): void {
    player.addFantsyPoints(fantasyPoints);
    this.fantasyPoints += fantasyPoints;
  }

  addWickets(player:Player): void {
    player.addWickets()
    this.wickets++;
  }

  addRuns(runs: number, player: Player): void {
    player.addRun(runs);
    this.run += runs;
  }

  getRuns(): number {
    return this.run;
  }

  getFantasyPoints(): number {
    return this.fantasyPoints;
  }

  getCaptain(): Player {
    return this.players.filter((player) => {
      if (player.getisCaptain() == true) {
        return player;
      }
    })[0];
  }

  getViceCaptain(): Player {
    return this.players.filter((player) => {
      if (player.getisViceCaptain() == true) {
        return player;
      }
    })[0];
  }

  getName(): string {
    return this.name;
  }

  getPlayers(): Player[] {
    return this.players;
  }
  addBall(player:Player): void {
    player.addBall();
    this.ball++;
  }

  getBall(): number {
    return this.ball;
  }
  setWickets(): void {
    this.wickets++;
  }

  getWickets(): number {
    return this.wickets;
  }
}
