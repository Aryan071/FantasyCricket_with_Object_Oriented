"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shot_1 = require("./shot");
class shotMapper {
    static toDomain(shot) {
        let playerShot = new shot_1.shots(shot.name, shot.run, shot.point);
        return playerShot;
    }
}
exports.default = shotMapper;
