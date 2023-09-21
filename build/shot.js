"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shots = void 0;
class shots {
    name;
    point;
    run;
    constructor(name, point, run) {
        this.name = name;
        this.point = point;
        this.run = run;
    }
    getName() {
        return this.name;
    }
    getPoint() {
        return this.point;
    }
    getRun() {
        return this.run;
    }
}
exports.shots = shots;
