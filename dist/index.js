"use strict";
class Player {
    name;
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log("Hi, I'm " + this.name + "!");
    }
}
const player = new Player("Robinho");
player.sayHi();
