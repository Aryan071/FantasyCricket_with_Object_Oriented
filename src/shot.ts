export class shots{
    private name:string;
    private point:number;
    private run:number;

    constructor(name:string,point:number,run:number){
        this.name = name;
        this.point = point;
        this.run = run;
    }

    getName():string{
        return this.name;
    }

    getPoint():number{
        return this.point;
    }

    getRun():number{
        return this.run;
    }
}