/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 48,
        y: 50
      }),
      new Costume("costume2", "./Sprite1/costumes/costume2.svg", {
        x: 46,
        y: 53
      })
    ];

    this.sounds = [new Sound("Meow", "./Sprite1/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    yield* this.askAndWait("Enter Math Operation");
    this.stage.vars.operation = this.answer;
    yield* this.askAndWait("number 1");
    this.stage.vars.numone = this.answer;
    yield* this.askAndWait("number 2");
    this.stage.vars.numtwo = this.answer;
    if (this.stage.vars.operation == "+") {
      this.stage.vars.answer = this.stage.vars.numone + this.stage.vars.numtwo;
    } else {
      if (this.stage.vars.operation == "-") {
        this.stage.vars.answer = this.stage.vars.numone - 0;
      } else {
        if (this.stage.vars.operation == "*") {
          this.stage.vars.answer =
            this.stage.vars.numone * this.stage.vars.numtwo;
        } else {
          if (this.stage.vars.operation == "/") {
            this.stage.vars.answer =
              this.stage.vars.numone / this.stage.vars.numtwo;
          } else {
            0;
          }
        }
      }
    }
    this.say("" + "Your answer is " + this.stage.vars.answer);
  }
}
