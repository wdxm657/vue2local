<template>
  <div class="row">
    <div class="col-md-12">
      <card card-body-classes="table-full-width">
        <h4
          slot="header"
          class="card-title"
          style="
            background-color: rgba(82, 95, 127, 0.1);
            padding-bottom: 5px;
            padding-top: 5px;
            padding-left: 10px;
          "
        >
          <i class="fa fa-list-alt"></i>
          加工队列
        </h4>
        <div class="col-12">
          <div>
            <div
              class="
                col-12
                d-flex
                justify-content-center justify-content-sm-between
                flex-wrap
              "
            >
              <el-select
                class="select-primary mb-3 pagination-select"
                v-model="pagination.perPage"
                placeholder="Per page"
              >
                <el-option
                  class="select-primary"
                  v-for="(item, index) in pagination.perPageOptions"
                  :key="index"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
            </div>
            <!-- <el-table :data="tableData">
                    <el-table-column
                      v-for="(lableTtile, index) in lableTtiles"
                      :key="index"
                      :label="lableTtile.translate"
                      :property="lableTtile.title"
                    >
                    </el-table-column>
                  </el-table> -->
            <div
              class="
                el-table
                el-table--fit
                el-table--enable-row-hover
                el-table--enable-row-transition
              "
              ref="getWidth"
            >
              <div class="el-table__header-wrapper">
                <table
                  cellspcing="0"
                  cellpadding="0"
                  border="0"
                  class="el-table__header"
                >
                  <thead class="has-gutter">
                    <tr>
                      <th
                        colspan="1"
                        rowspan="1"
                        class="is-leaf el-table__cell"
                        v-for="(lableTitle, index) in lableTtiles"
                        :key="index"
                      >
                        <div class="cell">{{ lableTitle.translate }}</div>
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div class="el-table__body-wrapper is-scrolling-none">
                <table
                  cellspcing="0"
                  cellpadding="0"
                  border="0"
                  class="el-table__body"
                >
                  <tbody
                    class="has-gutter"
                    v-for="(tableRowData, index) in tableData"
                    :key="index"
                  >
                    <tr class="el-table__row">
                      <td
                        colspan="1"
                        rowspan="1"
                        class="el-table__cell"
                        v-for="(tabledata, index) in tableRowData"
                        :key="index"
                      >
                        <div class="cell" v-if="index == 'processProgress'">
                          {{ tabledata }}%
                        </div>
                        <div class="cell" v-else>{{ tabledata }}</div>
                      </td>
                      <td colspan="1" rowspan="1" class="el-table__cell">
                        <div class="cell">111</div>
                      </td>
                    </tr>
                    <tr class="el-table__row">
                      <base-progress
                        value-position="right"
                        :value="tableRowData.processProgress"
                        :style="progressBarStyle"
                      />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- <div
                    slot="footer"
                    class="
                      col-12
                      d-flex
                      justify-content-center justify-content-sm-between
                      flex-wrap
                    "
                  >
                    <div class="">
                      <p class="card-category">
                        Showing {{ from + 1 }} to {{ to }} of
                        {{ total }} entries
                      </p>
                    </div>
                    <base-pagination
                      class="pagination-no-border"
                      v-model="pagination.currentPage"
                      :per-page="pagination.perPage"
                      :total="total"
                    >
                    </base-pagination>
                  </div> -->
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import { BaseProgress } from "src/components/index";
export default {
  components: {
    BaseProgress,
  },
  data() {
    return {
      tableName: [
        "id",
        // "productName",
        // "size",
        // "counts",
        // "dose",
        // "sweep",
        // "scanCurrent",
        // "conveyorBelt",
        // "processingTime",
        // "processProgress",
        // "status",
        // "",
      ],
      tableData: [
        {
          id: 220309972000201,
          productName: "粉(按重量物品) # 金星水产",
          size: "52 x 36 x 15",
          counts: "50",
          dose: "5 / 5",
          sweep: "48",
          scanCurrent: "5.97",
          conveyorBelt: "15.34",
          processingTime: "14.4 分钟",
          processProgress: 0,
          status: "加工队列",
        },
        {
          id: 2,
          productName: "2号",
          size: "1",
          counts: "1",
          dose: "1",
          sweep: "1",
          scanCurrent: "1",
          conveyorBelt: "1",
          processingTime: "1",
          processProgress: 50,
          status: "正常",
        },
        {
          id: 3,
          productName: "3号",
          size: "1",
          counts: "1",
          dose: "1",
          sweep: "1",
          scanCurrent: "1",
          conveyorBelt: "1",
          processingTime: "1",
          processProgress: 100,
          status: "正常",
        },
        {
          id: 4,
          productName: "4号",
          size: "1",
          counts: "1",
          dose: "1",
          sweep: "1",
          scanCurrent: "1",
          conveyorBelt: "1",
          processingTime: "1",
          processProgress: 20,
          status: "正常",
        },
        {
          id: 5,
          productName: "4号",
          size: "1",
          counts: "1",
          dose: "1",
          sweep: "1",
          scanCurrent: "1",
          conveyorBelt: "1",
          processingTime: "1",
          processProgress: 20,
          status: "正常",
        },
        {
          id: 6,
          productName: "1号",
          size: "1",
          counts: "1",
          dose: "1",
          sweep: "1",
          scanCurrent: "1",
          conveyorBelt: "1",
          processingTime: "1",
          processProgress: 20,
          status: "正常",
        },
        {
          id: 7,
          productName: "1号",
          size: "1",
          counts: "1",
          dose: "1",
          sweep: "1",
          scanCurrent: "1",
          conveyorBelt: "1",
          processingTime: "1",
          processProgress: 20,
          status: "正常",
        },
        {
          id: 8,
          productName: "1号",
          size: "1",
          counts: "1",
          dose: "1",
          sweep: "1",
          scanCurrent: "1",
          conveyorBelt: "1",
          processingTime: "1",
          processProgress: 20,
          status: "正常",
        },
        {
          id: 9,
          productName: "1号",
          size: "1",
          counts: "1",
          dose: "1",
          sweep: "1",
          scanCurrent: "1",
          conveyorBelt: "1",
          processingTime: "1",
          processProgress: 20,
          status: "正常",
        },
        {
          id: 10,
          productName: "1号",
          size: "1",
          counts: "1",
          dose: "1",
          sweep: "1",
          scanCurrent: "1",
          conveyorBelt: "1",
          processingTime: "1",
          processProgress: 20,
          status: "正常",
        },
        {
          id: 11,
          productName: "1号",
          size: "1",
          counts: "1",
          dose: "1",
          sweep: "1",
          scanCurrent: "1",
          conveyorBelt: "1",
          processingTime: "1",
          processProgress: 20,
          status: "正常",
        },
      ],
      lableTtiles: [
        {
          translate: "批号|临时订单",
          title: "id",
        },
        {
          translate: "产品名称 # 客户",
          title: "productName",
        },
        {
          translate: "尺寸(CM)",
          title: "size",
        },
        {
          translate: "数量(箱)",
          title: "counts",
        },
        {
          translate: "剂量/单面剂量(KGY)",
          title: "dose",
        },
        {
          translate: "扫宽(CM)",
          title: "sweep",
        },
        {
          translate: "扫描电流(A)",
          title: "scanCurrent",
        },
        {
          translate: "传送带速度(HZ)",
          title: "conveyorBelt",
        },
        {
          translate: "预计加工时间",
          title: "processingTime",
        },
        {
          translate: "已加工进度",
          title: "processProgress",
        },
        {
          translate: "状态",
          title: "status",
        },
        {
          translate: "actions",
        },
      ],
      pagination: {
        perPage: 5,
        currentPage: 1,
        perPageOptions: [5, 10, 25, 50],
        total: 0,
      },
      progressBarStyle: "",
      rowWidth:""
    };
  },
  methods: {
    getWidth() {
      this.$nextTick(function () {
        let width = this.$refs.getWidth.clientWidth + "px;";
        this.rowWidth = "width: " + width;
        this.progressBarStyle = this.rowWidth + "margin-top: 0px;";
      });
    },
  },
  mounted: function () {
    this.getWidth();
  },
};
</script>
<style lang="scss" >
.is-leaf {
  background-color: transparent !important;
}
</style>
