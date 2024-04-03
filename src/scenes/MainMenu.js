import { Scene } from "phaser";

export class MainMenu extends Scene {
  constructor() {
    super("MainMenu");
  }

  create() {
    this.cameras.main.setBackgroundColor(0x000000);

    this.add
      .text(512, 300, "PONG", {
        fontStyle: "500",
        fontFamily: "DM Mono",
        fontSize: 128,
        color: "#ffffff",
        align: "center",
      })
      .setOrigin(0.5);

    this.add
      .text(512, 410, "CLICK TO PLAY", {
        fontFamily: "DM Mono",
        fontSize: 38,
        color: "#ffffff",
        align: "center",
      })
      .setOrigin(0.5);

    this.add
      .text(512, 500, "◁∅", {
        fontFamily: "monospace",
        fontSize: 18,
        color: "#ffffff",
        align: "center",
      })
      .setOrigin(0.5);

    this.input.once("pointerdown", () => {
      this.scene.start("Game");
    });
  }
}
