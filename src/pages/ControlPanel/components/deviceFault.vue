<template>
  <div class="devFault row">
    <div class="box">
      <div class="errTitle">
        <a href="#/dashboard"><div class="fonts">设备故障</div></a>
      </div>
      <div class="errorDev">
        <b class="warningDevBox">设备故障</b>&nbsp;
        <b class="errorDevBox">设备故障</b>
      </div>
    </div>
    <div class="box">
      <div class="errTitle">
        <a href="#/dashboard"> <div class="fonts">采样越限</div> </a>
      </div>
      <div class="errorDev">
        <b class="warningDevBox">设备故障</b>&nbsp;
        <b class="errorDevBox">设备故障</b>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.devFault {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  border-radius: 10px;
  .box {
    display: flex;
    .errTitle {
      padding: 1px;
      width: 25px;
      text-align: center;
      background: red;
      border-radius: 8px;
      .fonts {
        font-weight: 600;
        color: white;
      }
    }
    .errorDev {
      width: 840px;
      padding: 5px;
      border: solid 1px black;
      border-radius: 3px;
      margin-left: 5px;
      .warningDevBox {
        padding: 1px;
        border-radius: 2px;
        background-color: rgb(255, 251, 0);
        color: black;
        font-weight: 500;
      }
      .errorDevBox {
        padding: 1px;
        border-radius: 2px;
        background-color: rgb(255, 0, 0);
        color: black;
        font-weight: 500;
      }
    }
  }
}
</style>
