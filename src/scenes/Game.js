import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");

    this.mouseY = 0.5;
    this.player = null;
  }

  create() {
    this.cameras.main.setBackgroundColor(0x000000);

    this.player = this.add.rectangle(10, 384, 20, 60, 0xffffff).setOrigin(0.5);
    this.add.rectangle(1014, 384, 20, 60, 0xffffff).setOrigin(0.5);

    this.game.canvas.onmousemove = (e) => {
      this.mouseY =
        (e.clientY - this.game.canvas.offsetTop) /
        this.game.canvas.offsetHeight;
    };
  }

  update() {
    this.player.setY(this.mouseY * this.game.config.height);
  }
}
