"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = require("./player");
class playerMapper {
    static toDomain(player) {
        let players = new player_1.Player(player.id, player.name, player.playingRole, player.credit);
        return players;
    }
}
exports.default = playerMapper;
