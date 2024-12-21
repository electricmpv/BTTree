import { _decorator, Component } from "cc";
import BTTree from "db://assets/Scripts/Base/BTTree";
import MyTree from "db://assets/Scripts/Biz/Tree/MyTree";

const { ccclass, property } = _decorator;

@ccclass("BehaviorManager")
export class BehaviorManager extends Component {
  tree: BTTree;
  start() {
    this.initTree();
  }
  initTree() {
    this.tree = new MyTree();
  }

  update() {
    this.tree.root.run();
  }
}
