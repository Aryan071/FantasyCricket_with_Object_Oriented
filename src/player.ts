export class Player {
  private id;
  private name;
  private playingRole;
  private credit;
  private run: number = 0;
  private ball: number = 0;
  private wickets: number = 0;
  private fantasyPoints: number = 0;
  private isCaptain: boolean = false;
  private isViceCaptain: boolean = false;
  private isBat: boolean = false;
  private isBowl: boolean = false;
  constructor(id: number, name: string, playingRole: string, credit: number) {
    this.id = id;
    this.name = name;
    this.playingRole = playingRole;
    this.credit = credit;
  }

  shot(): number {
    let result = Math.floor(Math.random() * 7);
    return result;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getPlayingRole(): string {
    return this.playingRole;
  }

  getCredit(): number {
    return this.credit;
  }

  getisCaptain(): boolean {
    return this.isCaptain;
  }

  setisCaptain(): void {
    this.isCaptain = true;
  }
  setisViceCaptain(): void {
    this.isViceCaptain = true;
  }

  getisViceCaptain(): boolean {
    return this.isViceCaptain;
  }

  addRun(shot: number): void {
    this.run += shot;
  }

  addFantsyPoints(fantasyPoints: number): void {
    this.fantasyPoints += fantasyPoints;
  }

  getFantasyPoints(): number {
    return this.fantasyPoints;
  }

  getRun(): number {
    return this.run;
  }

  setIsBat(player: Player): void {
    player.isBat = true;
  }

  setIsBowl(player: Player): void {
    player.isBowl = true;
  }

  getIsBowl(): boolean {
    return this.isBowl;
  }

  getIsBat(): boolean {
    return this.isBat;
  }

  addBall(): void {
    this.ball++;
  }

  getBall(): number {
    return this.ball;
  }

  addWickets(): void {
    this.wickets++;
  }

  getWickets(): number {
    return this.wickets;
  }
}
