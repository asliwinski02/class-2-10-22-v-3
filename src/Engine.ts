import display from "./display";

// place your code on line 4 above the export statement below

// in Engine.ts
class Engine {
  private engineType: number;

  constructor() {}

  public makeNoise() {
    display("The engine makes a defualt noise");
  }

  toString() {
    return "Engine";
  }
}

export default Engine;
