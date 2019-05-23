<template>
    <div id="JYWZ">
  <div class="topSearh" id="topsearch">
      <el-row>


            <el-col :span="24">
        <el-select
            size="mini"
            filterable
            clearable
            v-model="listQuery.SJD"
            placeholder="阶段"
          >
            <el-option
              v-for="item in sjdoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
            <!-- </el-col>
                    <el-col :span="21"> -->
          <el-input
            style="width: 200px;"
            class="filter-item"
            placeholder="仓库号"
            v-model="listQuery.LGNUM"
            size="mini"
          ></el-input>
          <el-button
            size="mini"
            class="filter-item"
            type="primary"
            v-waves
            icon="el-icon-search"
            @click="handleFilter"
          >搜索</el-button>

          <!-- <el-button
            size="mini"
            class="filter-item"
            style="margin-left: 10px;"
            @click="handleCreate"
            type="primary"
            icon="el-icon-edit"
          >新增</el-button>-->
          <!-- <el-button size="mini" type="primary" icon="el-icon-edit" @click="exportExcel">导出</el-button> -->
        </el-col>
      </el-row>
    </div>
    <el-card class="box-card">
      <el-table
        :key="tableKey"
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
        <el-table-column  fixed="left" align="center" label="时间段">
          <template slot-scope="scope">
            <span>{{scope.row.SJD}}</span>
          </template>
        </el-table-column>
        <el-table-column  fixed="left" align="center" label="物料编码">
          <template slot-scope="scope">
            <span>{{scope.row.MATNR}}</span>
          </template>
        </el-table-column>
      
        <el-table-column  align="center" label="账面余额">
          <template slot-scope="scope">
            <span>{{scope.row.GESME |NumFormat}}</span>
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
    </div>
</template>



<script>
import waves from "@/frame_src/directive/waves"; // 水波纹指令
import panel from "@/frame_src/components/TreeList/panel.vue";
import { getToken } from "@/frame_src/utils/auth";
import { parseTime1 } from "@/frame_src/utils/index.js";
import { NumFormat } from "@/frame_src/filters/index.js";

export default {
    directives: {
        waves
    },
  name:"JYWZ",
    data() {
        return {
            
     sjdoptions: [
        {
          value: "1年以下",
          label: "1年以下"
        },
        {
          value: "1-2年",
          label: "1-2年"
        },
        {
          value: "2-3年",
          label: "2-3年"
        },
        {
          value: "3年以上",
          label: "3年以上"
        }
      ],
      tableKey: 0,
      list: [
          {
            SJD: "1年以下",
            MATNR: "加油卡",
            GESME: 130
          },
          {
            SJD: "1-2年",
            MATNR: "基站",
            GESME: 20
          },
          {
            SJD: "2-3年",
            MATNR: "设备1",
            GESME: 230
          },
          {
            SJD: "3年以上",
            MATNR: "设备2",
            GESME: 30
          },

      ],
      importList: [],
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        SJD: "",
        LGNUM:"",
        // S_OrgCode: this.$store.state.user.orgCode,
        // S_WorkDate: this.$store.state.user.sysTime
      },
      treeData: []
        };
    },
    filters: {
    parseTime1,
    NumFormat
  },
    methods: {
       
        getList() {
    //          this.listLoading = true;
    //   getOneBonusList(this.listQuery).then(response => {
    //     if (response.data.code === 2000) {
    //       this.list = response.data.items;
          this.total = 20;
          this.listLoading = false;
    //     } else {
    //       this.listLoading = false;
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
            this.listQuery.page = 1;
            this.getList();
        },
        tableRowClassName({ row, rowIndex }) {
            if (rowIndex === 0) {
                return "el-button--primary is-active"; // 'warning-row'
            } // 'el-button--primary is-plain'// 'warning-row'
            return "";
        },
      
         exportExcelInfo() {
      import("@/frame_src/vendor/Export2Excel").then(excel => {
        const tHeader = [
          "工号",
          "姓名",
          "单位",
          "奖金",
          "预扣税"
        ];
        const filterVal = [
          "S_WorkerCode",
          "S_WorkerName",
          "S_OrgName",
          "OneTimeBonus",
          "DeductibleTax"
         
        ];
        const data = this.formatJson(filterVal, this.importList);
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename:
            this.exportComp + this.listQuery.S_WorkDate.substr(0, 7) + "奖金表"
        });
      });
    }
    },
    created() {
        
        this.getList();
    },
    activated() {

        this.getList();
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
      margin-left: 15px;
          margin-top: 15px;
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





