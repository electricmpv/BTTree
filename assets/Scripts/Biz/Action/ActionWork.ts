import { game } from "cc";
import BTAction from "db://assets/Scripts/Base/BTAction";
import { NodeStatus } from "db://assets/Scripts/Enum";

export default class ActionWork extends BTAction {
  private duration: number = 2000;
  private startTime: number = 0;
  constructor(duration: number = 2000) {
    super();
    this.duration = duration;
  }

  onStart() {
    super.onStart();
    this.startTime = game.totalTime;
    console.log("ActionWork onStart", this.startTime, this.duration);
  }

  onUpdate() {
    if (game.totalTime - this.startTime >= this.duration) {
      return NodeStatus.Success;
    }
    return NodeStatus.Running;
  }

  onEnd() {
    super.onEnd();
    console.log(
      "ActionWork onEnd",
      game.totalTime,
      this.startTime,
      this.duration,
    );
  }
}
