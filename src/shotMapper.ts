import { shots } from "./shot";

class shotMapper{
    static toDomain(shot: any){
            let playerShot = new shots(shot.name,shot.run,shot.point);
            return playerShot;
    }
}
export default shotMapper;