<template>
  <div>
    <div class="row">
      <div
        :class="startControlDatas.id <= 2 ? 'col-lg-2' : 'col-lg-4'"
        v-for="(startControlDatas, index) in startControlLine1"
        :key="index"
      >
        <div class="startBtnBox">
          <h6>
            <font-awesome-icon :icon="startControlDatas.icon" />
            {{ startControlDatas.name }}
            <span class="pull-right">{{ startControlDatas.statu }} </span>
          </h6>
          <div class="content">
            <button class="btn btn-github startBtn">开启</button>
            <div class="detail" v-if="startControlDatas.innerIcon">
              <div
                v-for="icon in startControlDatas.innerIcon"
                :style="icon.iconControl ? 'color: #ff0' : 'color: #8f8'"
              >
                <font-awesome-icon icon="fa-solid fa-circle-radiation" />
              </div>
              <div class="text">{{ startControlDatas.detail }}</div>
            </div>
          </div>
          <base-progress
            value-position="right"
            :value="startControlDatas.value"
          />
        </div>
      </div>
      <div class="col-lg-3" v-for="startControlDatas in startControlLine2">
        <div class="startBtnBox">
          <h6>
            <font-awesome-icon :icon="startControlDatas.icon" />
            {{ startControlDatas.name }}
            <span class="pull-right">{{ startControlDatas.statu }}</span>
          </h6>
          <button class="btn btn-github">开启</button>
          <base-progress
            value-position="right"
            :value="startControlDatas.value"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { BaseProgress } from "src/components/index";
import {
  faCalendar,
  faChartLine,
  faDesktop,
  faArrowsRotate,
  faBolt,
  faLightbulb,
  faCircleRadiation,
  faThermometer,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faCalendar,
  faChartLine,
  faDesktop,
  faLightbulb,
  faArrowsRotate,
  faBolt,
  faCircleRadiation,
  faThermometer
);
export default {
  components: {
    BaseProgress,
  },
  data() {
    return {
      startControlLine1: [
        {
          id: 1,
          name: "主控",
          statu: "准加",
          icon: "fa-solid fa-desktop",
          value: 50,
        },
        {
          id: 2,
          name: "冷却",
          statu: "准加",
          icon: "fa-solid fa-arrows-rotate",
          value: 60,
        },
        {
          id: 3,
          name: "低压",
          statu: "准加",
          icon: "fa-solid fa-lightbulb",
          innerIcon: [
            {
              iconControl: true,
            },
            {
              iconControl: true,
            },
            {
              iconControl: true,
            },
            {
              iconControl: false,
            },
          ],
          value: 70,
        },
        {
          id: 4,
          name: "高压",
          statu: "系统准加 / 调制器准加",
          icon: "fa-solid fa-bolt",
          iconCount: 3,
          iconControl: false,
          innerIcon: [
            {
              iconControl: true,
            },
            {
              iconControl: false,
            },
            {
              iconControl: false,
            },
          ],
          detail: "聚焦电源#3-#5",
          value: 80,
        },
      ],
      startControlLine2: [
        {
          id: 1,
          name: "恒温机组",
          statu: "预热",
          icon: "fa-solid fa-thermometer",
          value: 50,
        },
        {
          id: 2,
          name: "辅助电源",
          statu: "准加",
          icon: "fa-solid fa-calendar",
          value: 60,
        },
        {
          id: 3,
          name: "电子枪电源",
          statu: "加压中",
          icon: "fa-solid fa-calendar",
          value: 70,
        },
        {
          id: 4,
          name: "电子枪电压",
          statu: "加压中",
          icon: "fa-solid fa-chart-line",
          value: 80,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.startBtnBox {
  background-color: rgba(0, 0, 0, 0.5);
  .content {
    display: flex;
    .startBtn {
      margin-left: 25px;
    }
    .detail {
      margin-left: 180px;
      display: flex;
      position: relative;
      .fa-circle-radiation {
        width: 25px;
        height: 25px;
        padding-left: 6px;
      }
      .text {
        position: absolute;
        left: 2px;
        top: 28px;
        color: white;
        font-size: 12px;
      }
    }
  }

  h6 {
    padding-top: 2px;
    background-color: black;
    margin-top: 15px;
    color: white;
    span {
      color: rgba(240, 173, 78, 1);
      padding-right: 10px;
    }
  }
}
</style>
