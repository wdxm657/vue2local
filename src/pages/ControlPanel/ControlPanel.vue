<template>
  <div>
    <top-data></top-data>
    <device-fault></device-fault>
    <set-device></set-device>
    <start-device></start-device>
    <product-order></product-order>
  </div>
</template>
<script>
import topData from "./components/topData.vue";
import deviceFault from "./components/deviceFault.vue";
import setDevice from "./components/setDevice.vue";
import startDevice from "./components/startDevice.vue";
import productOrder from "./components/productOrder.vue";

export default {
  name: "controlPanel",
  components: {
    topData,
    deviceFault,
    setDevice,
    startDevice,
    productOrder,
  },
};
</script>
