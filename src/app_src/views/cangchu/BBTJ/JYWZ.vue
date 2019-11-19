
<template>
  <div id="JYWZ" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="仓库号" style="width:95%;" size="mini" clearable v-model="listQuery.FacCode"></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="物料码" style="width:95%;" size="mini" clearable v-model="listQuery.MATNR"></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-button type="primary" icon="el-icon-search" size="mini" @click="getList">查询</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-table
          size="mini"
          :data="list"
          element-loading-text="给我一点时间"
          border
          fit
          highlight-current-row
          style="width: 100%"
        >
          <el-table-column align="center" label="全部存货及物资按期限分类">
            <el-table-column prop="CKH" align="center" label="仓库号"></el-table-column>
            <el-table-column prop="MATNR" align="center" label="物料编码" width="150"></el-table-column>
            <el-table-column align="center" label="1年以内(含一年">
              <el-table-column  align="center" label="账面余额" prop="BENNIAN"></el-table-column>
              <el-table-column align="center" label="跌价准备"></el-table-column>
            </el-table-column>
            <el-table-column align="center" label="1-3年(含3年)">
              <el-table-column align="center" label="小计">
                <el-table-column prop="SANNIAN" align="center" label="账面余额"></el-table-column>
                <el-table-column align="center" label="跌价准备"></el-table-column>
              </el-table-column>
              <el-table-column align="center" label="其中：2-3年无动态">
                <el-table-column prop="GESMEWT" align="center" label="账面余额"></el-table-column>
                <el-table-column align="center" label="跌价准备"></el-table-column>
              </el-table-column>
            </el-table-column>
            <el-table-column align="center" label="3年以上">
              <el-table-column align="center" label="小计">
                <el-table-column prop="SANNIANYISHANG" align="center" label="账面余额"></el-table-column>
                <el-table-column align="center" label="跌价准备"></el-table-column>
              </el-table-column>
              <el-table-column align="center" label="其中：无动态">
                <el-table-column prop="GESMENS" align="center" label="账面余额"></el-table-column>
                <el-table-column align="center" label="跌价准备"></el-table-column>
              </el-table-column>
            </el-table-column>
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
          :total="total"
          style="text-align: center;"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import waves from "@/frame_src/directive/waves"; // 水波纹指令
import panel from "@/frame_src/components/TreeList/panel.vue";
import { getToken } from "@/frame_src/utils/auth";
import { parseTime1 } from "@/frame_src/utils/index.js";
import { NumFormat } from "@/frame_src/filters/index.js";
import { GetJYWZTJInfo } from "@/app_src/api/cangchu/BBTJ/JYWZ";
export default {
  directives: {
    waves
  },
  name: "JYWZ",
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
      ],

      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        FacCode:"",
        MATNR:""
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
    tableRowClassName({ row, rowIndex }) {
      // 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。
      if (rowIndex === 0) {
        return "el-button--primary is-active"; // 'warning-row'
      } // 'el-button--primary is-plain'// 'warning-row'
      return "";
    },
    getList() {
      GetJYWZTJInfo(this.listQuery).then(response => {
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
        const tHeader = ["工号", "姓名", "单位", "奖金", "预扣税"];
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

</style>





