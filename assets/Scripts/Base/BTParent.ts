import BTNode from "db://assets/Scripts/Base/BTNode";
import { NodeStatus } from "db://assets/Scripts/Enum";

export default abstract class BTParent extends BTNode {
  childrens: Array<BTNode> = [];
  private _index = 0;
  get index() {
    return this._index;
  }
  set index(index: number) {
    this._index = index;
  }

  constructor(childrens: Array<BTNode>) {
    super();
    this.childrens = childrens;
  }
  abstract canExecute(): boolean;
  abstract onChildExecuted(status: NodeStatus): void;

  decorate(status: NodeStatus) {
    return status;
  }
}
