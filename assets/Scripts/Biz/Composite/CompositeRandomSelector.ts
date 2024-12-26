import BTComposite from "db://assets/Scripts/Base/BTComposite";
import { NodeStatus } from "db://assets/Scripts/Enum";

export default class CompositeRandomSelector extends BTComposite {
  executionOrder: number[] = [];

  get index() {
    return this.executionOrder[this.executionOrder.length - 1];
  }
  onStart() {
    super.onStart();
    this.shuffle();
  }

  shuffle() {
    this.executionOrder = [];
    for (let i = 0; i < this.childrens.length; i++) {
      this.executionOrder.push(i);
    }
    for (let i = this.executionOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.executionOrder[i], this.executionOrder[j]] = [
        this.executionOrder[j],
        this.executionOrder[i],
      ];
    }
  }

  canExecute(): boolean {
    return !!this.executionOrder.length && this.status !== NodeStatus.Success;
  }
  onChildExecuted(status: NodeStatus): void {
    switch (status) {
      case NodeStatus.Success:
        this.status = NodeStatus.Success;
        break;
      case NodeStatus.Failure:
        this.executionOrder.pop();
        if (!this.executionOrder.length) {
          this.status = NodeStatus.Failure;
        } else {
          this.status = NodeStatus.Running;
        }
        this.status = NodeStatus.Failure;
        break;
      case NodeStatus.Running:
        this.status = NodeStatus.Running;
        break;
      default:
        break;
    }
  }
  /*    shuffle() {
          this.executionOrder = [];
          const indexList = Array.from(
              { length: this.childrens.length },
              (e, i: number) => i
          );

          for (let i = indexList.length - 1; i >= 0; i--) {
              const randomIndex = Math.floor(Math.random() * indexList.length);
              this.executionOrder.push(indexList.splice(randomIndex, 1)[0]);
          }
      }*/

  /* onUpdate() {
    if (this.status === NodeStatus.Success) {
      return NodeStatus.Success;
    }
    if (!this.executionOrder.length) {
      this.status = NodeStatus.Failure;
      return NodeStatus.Failure;
    }
    const child = this.childrens[this.index];
    const res = child.run();
    if (res === NodeStatus.Failure) {
      this.executionOrder.pop();
    }
    if (res === NodeStatus.Success) {
      this.status = NodeStatus.Success;
      return NodeStatus.Success;
    }

    return NodeStatus.Running;
  }*/
}
