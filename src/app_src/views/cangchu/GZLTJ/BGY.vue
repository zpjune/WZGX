<template>
  <div id="BGY" class="app-container calendar-list-container">
    <div class="topSearh" id="topsearch">
      <el-row>
        <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
          <el-date-picker
            size="mini"
            style="width:200px;"
            type="month"
            value-format="yyyy-MM-dd"
            placeholder="选择年月"
            v-model="listQuery.ZCJRQ"
            :clearable="true"
          ></el-date-picker>
        </el-col>

        <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
          <el-input placeholder="保管员"  style="width:95%;"  size="mini" clearable></el-input>
        </el-col>
        <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
          <el-button
            size="mini"
            class="filter-item"
            type="primary"
            v-waves
            icon="el-icon-search"
            @click="handleFilter"
          >搜索</el-button>
          <!-- <el-button size="mini" type="primary" icon="el-icon-edit" @click="exportSumExcel">导出</el-button> -->
        </el-col>
      </el-row>
    </div>

    <el-card class="box-card">
      <el-table
        size="mini"
        :data="sumlist"
        :header-cell-class-name="tableRowClassName"
        v-loading="sumlistLoading"
        element-loading-text="给我一点时间"
        border
        fit
        highlight-current-row
        style="width: 100%"
        :summary-method="getSummaries"
        show-summary
      >
        <!-- <el-table-column
          width="180px"
          fixed="left"
          align="center"
          label="单位"
          :show-overflow-tooltip="true"
        >
          <template slot-scope="scope">
            <span>{{scope.row.S_OrgName}}</span>
          </template>
        </el-table-column>-->
        <el-table-column width="90px" align="center" label="时间月">
          <template slot-scope="scope">
            <span>{{scope.row.ZCJRQ|parseTime1}}</span>
          </template>
        </el-table-column>
        <el-table-column width="180px" align="right" label="保管员">
          <template slot-scope="scope">
            <span>{{scope.row.ZFHSL }}</span>
          </template>
        </el-table-column>
        <el-table-column width="200px" align="right" label="月发出量">
          <template slot-scope="scope">
            <span>{{scope.row.ZFHSL |NumFormat}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="150px"
          align="center"
          class-name="small-padding fixed-width"
        >
          <template slot-scope="scope">
            <el-button size="mini" @click="sumdetail(scope.row.ZCJR)" type="primary" plain>明细</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="1"
        :page-sizes="[10,20,30, 50]"
        :page-size="1"
        layout="total, sizes, prev, pager, next, jumper"
        :total="1"
        style="text-align: center;"
      ></el-pagination>
    </el-card>
    <el-dialog :visible.sync="showed" width="80%" title="月度明细">
      <div class="topSearh">
        <el-row>
          <el-col :span="24">
            <el-input style="width: 200px;" class="filter-item" placeholder="单号" size="mini" clearable></el-input>
            <el-input
              style="width: 200px;"
              class="filter-item"
              placeholder="保管员"
              size="mini"
              clearable
            ></el-input>
            <el-button
              size="mini"
              class="filter-item"
              type="primary"
              v-waves
              icon="el-icon-search"
              @click="handleFilterDetail"
            >搜索</el-button>
          </el-col>
        </el-row>
      </div>
      <el-card class="box-card">
        <el-table
          size="mini"
          :data="list"
          :header-cell-class-name="tableRowClassName"
          v-loading="listLoading"
          element-loading-text="给我一点时间"
          border
          fit
          highlight-current-row
          style="width: 100%"
        >
          <el-table-column width="200px" align="center" label="时间">
            <template slot-scope="scope">
              <span>{{scope.row.ZCJRQ|parseTime}}</span>
            </template>
          </el-table-column>
          <el-table-column width="180px" align="center" label="单号">
            <template slot-scope="scope">
              <span>{{scope.row.ZDHTZD}}</span>
            </template>
          </el-table-column>
          <el-table-column width="180px" align="center" label="保管员">
            <template slot-scope="scope">
              <span>{{scope.row.ZCJR}}</span>
            </template>
          </el-table-column>
          <el-table-column width="180px" align="center" label="数量">
            <template slot-scope="scope">
              <span>{{scope.row.ZFHSL|NumFormat}}</span>
            </template>
          </el-table-column>
        </el-table>
        <div class="page">
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="listQuery.page"
            :page-sizes="[10,20,30, 50]"
            :page-size="listQuery.limit"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
      </el-card>
    </el-dialog>
  </div>
</template>

<script>
import waves from "@/frame_src/directive/waves"; // 水波纹指令
import panel from "@/frame_src/components/TreeList/panel.vue";
import { getToken } from "@/frame_src/utils/auth";
import { parseTime1 } from "@/frame_src/utils/index.js";
import { NumFormat } from "@/frame_src/filters/index.js";
export default {
  name: "BGY",
  data() {
    return {
      showed: false,
      tableKey: 0,
      list: [],
      sumlist: [
        {
          ZCJRQ: "2019-05-08 12:00:00",
          ZCJR: "张三",
          ZFHSL: 230
        },
        {
          ZCJRQ: "2019-06-08 12:00:00",
          ZCJR: "李四",
          ZFHSL: 260
        },
        {
          ZCJRQ: "2019-07-08 12:00:00",
          ZCJR: "王五",
          ZFHSL: 310
        },
        {
          ZCJRQ: "2019-08-08 12:00:00",
          ZCJR: "赵六",
          ZFHSL: 210
        },
        {
          ZCJRQ: "2019-09-08 12:00:00",
          ZCJR: "李雷",
          ZFHSL: 240
        },
        {
          ZCJRQ: "2019-10-08 12:00:00",
          ZGZSL: "韩梅梅",
          ZFHSL: 350
        }
      ],
      sumlistLoading: false,
      list: [
        {
          ZDHTZD: "CKD-201905060111",
          ZCJRQ: "2019/01/31 00:00:00.000",
          ZCJR: "张三",
          ZFHSL: 47
        },
        {
          ZDHTZD: "CKD-201905060111",
          ZCJRQ: "2019-10-08 12:00:00",
          ZCJR: "张三",
          ZFHSL: 39
        },
        {
          ZDHTZD: "CKD-201905060111",
          ZCJRQ: "2019-10-08 12:00:00",
          ZCJR: "张三",
          ZFHSL: 30
        },
        {
          ZDHTZD: "CKD-201905060111",
          ZCJRQ: "2019-10-08 12:00:00",
          ZCJR: "张三",
          ZFHSL: 50
        },
        {
          ZDHTZD: "CKD-201905060111",
          ZCJRQ: "2019-10-08 12:00:00",
          ZCJR: "张三",
          ZFHSL: 140
        },
        {
          ZDHTZD: "CKD-201905060111",
          ZCJRQ: "2019-10-08 12:00:00",
          ZCJR: "张三",
          ZFHSL: 150
        }
      ],
      total: null,
      totalDetail: null,
      listLoading: false,
      listSumQuery: {
        ZCJRQ: "",
        // S_OrgCode: this.$store.state.user.orgCode,
        // S_WorkDate: this.$store.state.user.sysTime,
        // S_OrgName: this.$store.state.user.departName,
        //TaxNumber: ""
      },
      listQuery: {
        page: 1,
        limit: 10,
        //Is_Page: "true",
        ZCJRQ: "",
        // S_OrgCode: this.$store.state.user.orgCode,
        // // S_BeginWorkDate: '',
        // // S_EndWorkDate: this.$store.state.user.sysTime,
        // S_OrgName: this.$store.state.user.departName,
        // S_WorkDate: this.$store.state.user.sysTime,
        // TaxNumber: "",
        // TaxRate: ""
      }
    };
  },
  filters: {
    parseTime1,
    NumFormat
  },
  methods: {
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "合计";
          return;
        }
        const values = data.map(item => item[column.property]);
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          if (index === 2) {
            sums[index] += " 元";
          } else {
            sums[index] = sums[index].toFixed(2);
            sums[index] += " 吨";
          }
        } else {
          sums[index] = "";
        }
      });

      return sums;
    },
    getSumList() {
      //  this.sumlistLoading = true;
      //   getGroupSumMonthTaxSalary(this.listSumQuery).then(response => {
      //     if (response.data.code === 2000) {
      //       this.sumlist = response.data.items;
      this.sumlistLoading = false;
      //     } else {
      //       this.$notify({
      //         position: "bottom-right",
      //         title: "失败",
      //         message: response.data.message,
      //         type: "error",
      //         duration: 2000
      //       });
      //     }
      //   });
    },
    sumdetail(orgName, orgCode) {
      this.title = "月度明细";
      this.showed = true;
      //   this.listQuery.S_OrgCode = orgCode;
      //   this.listQuery.S_OrgName = orgName;
      //   this.listQuery.S_WorkDate = this.listSumQuery.S_WorkDate;
      //   this.listQuery.S_Department = this.listSumQuery.S_Department;
      this.getList();
    },

    getList() {
      //   this.listLoading = true;
      //   getMonthTaxSalary(this.listQuery).then(response => {
      //     if (response.data.code === 2000) {
      //this.list = response.data.items;
      this.total = 15;
      this.listLoading = false;
      // } else {
      //   this.listLoading = false;
      //   this.$notify({
      //     position: "bottom-right",
      //     title: "失败",
      //     message: response.data.message,
      //     type: "error",
      //     duration: 2000
      //   });
      // }
      //});
    },
    created() {
      this.getSumList();
      //this.getList();
      //this.createTime();
    },
    handleSizeChange(val) {
      this.listQuery.limit = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.listQuery.page = val;
      this.getList();
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v =>
        filterVal.map(j => {
          return v[j];
        })
      );
    },
    handleFilter() {
      //this.listQuery.page = 1;
      this.getSumList();
    },

    handleFilterDetail() {
      this.listQuery.page = 1;
      this.getList();
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 0) {
        return "el-button--primary is-active"; // 'warning-row'
      } // 'el-button--primary is-plain'// 'warning-row'
      return "";
    }
  },
  computed: {
    getRoleLevel() {
      if (this.$store.state.user.roleLevel === "admin") {
        return true;
      } else {
        return false;
      }
    },
    headers() {
      return {
        "X-Token": getToken()
      };
    }
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




