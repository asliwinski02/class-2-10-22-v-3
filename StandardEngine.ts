import Engine from "./Engine";
import display from "./display";

class StandardEngine extends Engine {
  constructor() {
    super();
  }

  public makeNoise(): void {
    display("The engine nakes no noise.");
  }
}

export default StandardEngine;
