/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Robot extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("robot-a", "./Robot/costumes/robot-a.svg", {
        x: 58.440400723605364,
        y: 26.163504518535746
      }),
      new Costume("robot-b", "./Robot/costumes/robot-b.svg", {
        x: 55.442543885282845,
        y: 96.58879942566811
      }),
      new Costume("robot-c", "./Robot/costumes/robot-c.svg", {
        x: 62.61885234361475,
        y: 96.97427621034126
      }),
      new Costume("robot-d", "./Robot/costumes/robot-d.svg", { x: 59, y: 95 })
    ];

    this.sounds = [
      new Sound("computer beep", "./Robot/sounds/computer beep.wav"),
      new Sound("collect", "./Robot/sounds/collect.wav"),
      new Sound("buzz whir", "./Robot/sounds/buzz whir.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.goto(-149, -32);
    this.costume = "robot-a";
    yield* this.sayAndWait("Hello and welcome to the national robotarium!", 5);
    yield* this.wait(1);
    while (!this.keyPressed("space")) {
      yield;
    }
    yield* this.glide(1, -83, -24);
    this.costume = "robot-b";
    yield* this.sayAndWait(
      "I hope you have enjoyed learning what it is we do!",
      5
    );
    this.stage.costumeNumber += 1;
    yield* this.wait(1);
    this.costume = "robot-c";
    while (!this.keyPressed("space")) {
      yield;
    }
    yield* this.glide(1, -13, 27);
    yield* this.wait(1);
    this.costume = "robot-d";
    while (!this.keyPressed("space")) {
      yield;
    }
    yield* this.glide(1, -2, 28);
    yield* this.wait(1);
    while (!this.keyPressed("space")) {
      yield;
    }
    yield* this.glide(1, -2, 28);
    this.costume = "robot-a";
    yield* this.thinkAndWait("I wonder what goes on here?", 10);
    this.visible = false;
    yield* this.wait(5);
    /* TODO: Implement stop all */ null;
  }
}
