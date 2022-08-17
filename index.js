import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Robot from "./Robot/Robot.js";
import RetroRobot from "./RetroRobot/RetroRobot.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Robot: new Robot({
    x: -2,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  RetroRobot: new RetroRobot({
    x: 130,
    y: -103,
    direction: -68.81567115495389,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 2
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
