<template>
  <div class="top row">
    <!-- <div v-for="item in unit">
      <data-card :items="item"></data-card>
    </div> -->
    <div class="dataBox" v-for="item in unit">
      <div class="data" v-for="data in item">
        {{ data }}
      </div>
    </div>
  </div>
</template>
<script>
import dataCard from "./dataCard.vue";
export default {
  components: {
    dataCard,
  },
  data() {
    return {
      unit: [
        ["26.00 / 26.00", "人工线电压A/B", "(KV)"],
        ["111 / 111", "重复频率A/B", "(Hz)"],
        ["8.1", "电子枪平均发射电流", "(mA)"],
        ["8.1", "电子枪脉冲电流", "(mA)"],
        ["8.1", "电子枪电压", "(V)"],
        ["8.1", "实时扫宽", "(cm)"],
        ["12.5", "实时束流", "(uA)"],
        ["8.1", "应用设置功率", "(kW)"],
        ["8.1", "实时设备功率", "(kW)"],
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.top {
  padding: 10px;
  display: flex;
  justify-content: space-around;
  .dataBox {
  margin-top: 5px;
  background: black;
  border-radius: 15px;
  .data {
    color: white;
    min-width: 188px;
    padding-top: 5px;
    text-align: center;
    height: 30px;
  }
}
}
</style>
