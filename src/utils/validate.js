import { extend, localize } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import zhCN from "vee-validate/dist/locale/zh_CN.json";
localize({
  zhCN,
});
localize("zhCN");
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

extend("devPowerVal", {
  validate: (value) => {
    if (value >= 0 && value <= 20) {
      return true;
    }
    else return false;
  }
});
