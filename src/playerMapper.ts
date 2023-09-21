import { Player } from "./player";

class playerMapper{
    static toDomain(player: any){
            let players = new Player(player.id, player.name, player.playingRole, player.credit);
            return players;
    }
}
export default playerMapper;