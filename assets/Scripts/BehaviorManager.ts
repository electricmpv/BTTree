import { _decorator, Component } from "cc";
import BTTree from "db://assets/Scripts/Base/BTTree";
import MyTree from "db://assets/Scripts/Biz/Tree/MyTree";
import BTNode from "db://assets/Scripts/Base/BTNode";
import BTParent from "db://assets/Scripts/Base/BTParent";

const { ccclass, property } = _decorator;

@ccclass("BehaviorManager")
export class BehaviorManager extends Component {
  tree!: BTTree;
  nodeList: BTNode[] = [];
  activeStack: Array<number> = [];
  parentIndex: Array<number> = [];
  childrenIndex: Array<Array<number> | null> = [];

  start() {
    this.enableBehavior();
  }
  enableBehavior() {
    this.tree = new MyTree();
    this.parentIndex.push(-1);
    this.addToNodeList(this.tree.root);
    console.log(this.parentIndex);
    console.log(this.childrenIndex);
  }

  addToNodeList(node: BTNode) {
    this.nodeList.push(node);
    const index = this.nodeList.length - 1;
    if (node instanceof BTParent) {
      this.childrenIndex.push([]);
      for (let i = 0; i < node.childrens.length; i++) {
        this.parentIndex.push(index);
        this.childrenIndex[index]!.push(this.nodeList.length);
        this.addToNodeList(node.childrens[i]);
      }
    } else {
      this.childrenIndex.push(null);
    }
  }
  update() {
    //this.tree.root.run();
  }
}
