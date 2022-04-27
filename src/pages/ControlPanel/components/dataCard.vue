<template>
  <div class="dataBox">
    <div class="data" v-for="data in items">
      {{ data }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
    },
  },
};
</script>
<style lang="scss" scoped>
.dataBox {
  margin-top: 5px;
  background: black;
  width: 188px;
  border-radius: 15px;
  .data {
    color: white;
    padding-top: 5px;
    text-align: center;
    height: 30px;
  }
}
</style>
