import { game } from "cc";
import BTAction from "db://assets/Scripts/Base/BTAction";
import { NodeStatus } from "db://assets/Scripts/Enum";
import Blackboard from "db://assets/Scripts/Blackboard";

export default class ActionSkill extends BTAction {
  private duration: number = 2000;
  private startTime: number = 0;
  constructor(duration: number = 2000) {
    super();
    this.duration = duration;
  }

  onStart() {
    super.onStart();
    this.startTime = game.totalTime;
    Blackboard.Instance.mp -= 20;
    console.log("ActionSkill onStart", this.startTime, this.duration);
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
      "ActionSkill onEnd",
      game.totalTime,
      this.startTime,
      this.duration,
    );
  }
}
