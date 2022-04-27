<template>
  <div>
    <div class="row">
      <div
        class="col-lg-2 col-sm-2"
        v-for="(item, index) in devSetCurrentData"
        :key="index"
      >
        <div>
          <div class="card-title settitle">
            {{ item.header }}
          </div>
          <div class="text-center card-body setbody" v-if="item.data !== null">
            <button
              :id="item.id"
              class="btn btn-simple btn-github"
              @click="setDevData(item, $event)"
            >
              {{ item.data }}
            </button>
          </div>
          <div class="text-center card-body setbody" v-else>
            <button
              :id="item.id"
              class="btn btn-simple btn-github"
              @click="setDevData(item, $event)"
            >
              - -
            </button>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      :visible.sync="visible.visibleControl"
      width="30%"
      v-for="(visible, index) in VisibleControl"
      :key="index"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
    >
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      devSetCurrentData: [
        {
          id: 1,
          header: "设备功率(KW)",
          data: 8.1,
        },
        {
          id: 2,
          header: "PFN电压(KV)",
          data: 23.12,
        },
        {
          id: 3,
          header: "重复频率(HZ)",
          data: 221,
        },
        {
          id: 4,
          header: "EGUN电压(V)",
          data: 12.32,
        },
        {
          id: 5,
          header: "束流/扫宽(CM)",
          data: null,
        },
        {
          id: 6,
          header: "传送带速度(HZ)",
          data: null,
        },
      ],
      VisibleControl: [
        {
          visibleControl: false,
          rule: "required|devPowerVal",
          devPowerInputValue: "",
          errorTip: "设备功率数值范围：0~20KW",
          buttonTip: "保存功率",
        },
        {
          visibleControl: false,
          rule: "required",
          devPowerInputValue: "",
          errorTip: "未定义",
          buttonTip: "保存PFN电压",
        },
        {
          visibleControl: false,
          rule: "required",
          devPowerInputValue: "",
          errorTip: "未定义",
          buttonTip: "保存频率",
        },
        {
          visibleControl: false,
          rule: "required",
          devPowerInputValue: "",
          errorTip: "未定义",
          buttonTip: "保存EGUN电压",
        },
        {
          visibleControl: false,
          rule: "required",
          devPowerInputValue: "",
          errorTip: "未定义",
          buttonTip: "保存扫宽",
        },
        {
          visibleControl: false,
          rule: "required",
          devPowerInputValue: "",
          errorTip: "未定义",
          buttonTip: "保存速度",
        },
      ],
      dialogFormSetTitle: "",
      dialogFormSetRootData: "",
      dialogFormDataUnit: "",
    };
  },
  methods: {
    submit() {
      alert("Form has been submitted!");
    },
    setDevData(currentItem, $event) {
      this.dialogFormSetRootData = currentItem.data;
      let receive = currentItem.header.split("(");
      this.dialogFormSetTitle = receive[0];
      let unit = receive[1].split(")");
      this.dialogFormDataUnit = unit[0];
      for (let index = 0; index < this.VisibleControl.length; index++) {
        if (index + 1 == $event.currentTarget.id) {
          this.VisibleControl[index].visibleControl = true;
        }
      }
    },
  },
};
</script>
<style lang="scss" scope>
.currentDataSite {
  padding-left: 20px;
}
.settitle {
  margin: 0;
  margin-top: 10px;
  background: white;
  color: black;
  font-weight: 800;
}
.setbody {
  background: black;
  padding: 5px;
}
</style>
