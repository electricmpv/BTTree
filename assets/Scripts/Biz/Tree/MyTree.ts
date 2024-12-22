import BTTree from "db://assets/Scripts/Base/BTTree";
import CompositeSequence from "db://assets/Scripts/Biz/Composite/CompositeSequence";
import CompositeSelector from "db://assets/Scripts/Biz/Composite/CompositeSelector";
import ConditionalMP from "db://assets/Scripts/Biz/Conditional/ConditionalMP";
import ActionWait from "db://assets/Scripts/Biz/Action/ActionWait";
import ActionSkill from "db://assets/Scripts/Biz/Action/ActionSkill";
import ConditionalHP from "db://assets/Scripts/Biz/Conditional/ConditionalHP";
import ActionAttack from "db://assets/Scripts/Biz/Action/ActionAttack";
import CompositeRandomSequence from "db://assets/Scripts/Biz/Composite/CompositeRandomSequence";
import ActionWork from "db://assets/Scripts/Biz/Action/ActionWork";
import ActionSleep from "db://assets/Scripts/Biz/Action/ActionSleep";

export default class MyTree extends BTTree {
  constructor() {
    super();
    this.init();
  }

  init() {
    this.root = new CompositeSequence([
      new CompositeSelector([
        new CompositeSequence([
          new ConditionalMP(),
          new CompositeSequence([new ActionWait(), new ActionSkill()]),
        ]),
        new CompositeSequence([new ConditionalHP(), new ActionAttack()]),
        new CompositeRandomSequence([new ActionWork(), new ActionSleep()]),
      ]),
    ]);
  }
}
/* new DecoratorInverter([new ActionFailure()]),
    //new ActionLog("hello world"),
    new ActionLog("hahahaha"),*/
