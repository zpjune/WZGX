<template>
  <div id="FCLTJ" class="app-container calendar-list-container">
    <div class="topSearh" id="topsearch">
      <el-row>
        <el-col :span="24">
          <el-date-picker
            size="mini"
            v-model="listQuery.Date"
            style="width:200px;"
            type="month"
            value-format="yyyy-MM-dd"
            placeholder="选择年月(起)"
            :clearable="true"
          ></el-date-picker>
          <el-button
            size="mini"
            class="filter-item"
            type="primary"
            icon="el-icon-search"
            @click="getList"
          >查询</el-button>
          <!-- <el-button size="mini" type="primary" icon="el-icon-edit" @click="exportSumExcel">导出</el-button> -->
        </el-col>
      </el-row>
    </div>

    <el-card class="box-card">
      <el-table
        size="mini"
        :data="list"
        :header-cell-class-name="tableRowClassName"
        element-loading-text="给我一点时间"
        border
        fit
        highlight-current-row
        style="width: 100%"
        :show-summary="false"
        :summary-method="getSummaries"
      >
        <!-- <el-table-column width="120px" align="center" label="时间月">
          <template slot-scope="scope">
            <span>{{scope.row.BUDAT|parseTime1}}</span>
          </template>
        </el-table-column>-->
        <el-table-column width="150px" align="center" label="工厂">
          <template slot-scope="scope">
            <span>{{scope.row.WERKS_NAME}}</span>
          </template>
        </el-table-column>
        <el-table-column width="200px" align="right" prop="ZGZSL" label="月发出量">
          <template slot-scope="scope">
            <span>{{scope.row.DANGYUE |NumFormat}}</span>
          </template>
        </el-table-column>
        <el-table-column width="220px" align="right" prop="MSEG" label="累计月发出总金额">
          <template slot-scope="scope">
            <span>{{scope.row.LEIJI |NumFormat}}</span>
          </template>
        </el-table-column>

        <!-- <el-table-column
          label="操作"
          width="150px"
          align="center"
          class-name="small-padding fixed-width"
        >-->
        <!-- <template slot-scope="scope">
            <el-button size="mini" @click="sumdetail(scope.row.BUDAT)" type="primary" plain>明细</el-button>
          </template>
        </el-table-column>-->
      </el-table>
    </el-card>
  </div>
</template>

<script>
import panel from "@/frame_src/components/TreeList/panel.vue";
import { getToken } from "@/frame_src/utils/auth";
import { parseTime1 } from "@/frame_src/utils/index.js";
import { NumFormat } from "@/frame_src/filters/index.js";
import { GetFCLInfo } from "@/app_src/api/cangchu/BBTJ/FCLTJ";
export default {
  name: "FCLTJ",
  data() {
    return {
      tableKey: 0,
      list: [],
      total: 0,
      listloading: false,
      listQuery: {
        page: 1,
        limit: 10,
        Date: ""
      }
    };
  },

  filters: {
    parseTime1,
    NumFormat
  },

  methods: {
    handleFilter() {},
    getList() {
      GetFCLInfo(this.listQuery).then(response => {
        if (response.data.code === 2000) {
          this.list = response.data.items;
          this.total = response.data.total;
          this.listloading = false;
        } else {
          this.listloading = false;
          this.$notify({
            position: "bottom-right",
            title: "失败",
            message: response.data.message,
            type: "error",
            duration: 2000
          });
        }
      });
    },

    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 0) {
        return "el-button--primary is-active"; // 'warning-row'
      } // 'el-button--primary is-plain'// 'warning-row'
      return "";
    },
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "总价";
          return;
        }
        //   
      });

      return sums;
    }
  },
  mounted() {
    this.getList();
  }
};
</script>


<style lang="scss" scoped>
.topSearh {
  margin-bottom: 15px;
}
.page {
  text-align: center;
}
.vue-treeselect__control {
  height: 28px !important;
  width: 100%;
}
.vue-treeselect__placeholder,
.vue-treeselect__single-value {
  line-height: 28px;
}
</style>


