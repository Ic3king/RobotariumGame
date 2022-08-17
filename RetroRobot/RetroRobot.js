/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class RetroRobot extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Retro Robot a", "./RetroRobot/costumes/Retro Robot a.svg", {
        x: 55.04000000000008,
        y: 85.55
      }),
      new Costume("Retro Robot b", "./RetroRobot/costumes/Retro Robot b.svg", {
        x: 55.774600647044025,
        y: -0.22501319457890645
      }),
      new Costume("Retro Robot c", "./RetroRobot/costumes/Retro Robot c.svg", {
        x: 70.61999999999998,
        y: 90.3795
      })
    ];

    this.sounds = [
      new Sound("computer beeps1", "./RetroRobot/sounds/computer beeps1.wav"),
      new Sound("computer beeps2", "./RetroRobot/sounds/computer beeps2.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (!this.keyPressed("right arrow")) {
      yield;
    }
    this.visible = true;
    this.goto(130, -103);
    yield* this.sayAndWait(
      "Hello! I am one of the robots in National Robotarium!",
      10
    );
    this.visible = false;
    yield* this.wait(5);
    /* TODO: Implement stop all */ null;
  }
}
