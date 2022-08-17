/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("IMG-1107", "./Stage/costumes/IMG-1107.jpg", {
        x: 480,
        y: 360
      }),
      new Costume("IMG-1114", "./Stage/costumes/IMG-1114.jpg", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [new Sound("Clapping", "./Stage/sounds/Clapping.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.myVariable = 0;
  }

  *whenGreenFlagClicked() {
    this.costume = "IMG-1107";
    yield* this.wait(90);
    /* TODO: Implement looks_switchbackdroptoandwait */ null;
  }
}
