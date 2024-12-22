import Singleton from "db://assets/Scripts/Base/Singleton";

export default class Blackboard extends Singleton {
  static get Instance() {
    return super.GetInstance<Blackboard>();
  }

  hp = 100;
  mp = 100;
}
