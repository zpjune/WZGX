<template>
  <div id="KCWZ" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="工厂" style="width:95%;" size="mini" clearable></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-button type="primary" icon="el-icon-search" size="mini">查询</el-button>
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
          <el-table-column prop="MATKLNO" align="center" label="类号"></el-table-column>
          <el-table-column prop="MATKL" align="center" label="大类名称"></el-table-column>
          <el-table-column prop="WERKS" align="center" label="工厂"></el-table-column>
          <el-table-column align="center" label="期末库存">
            <el-table-column align="center" label="其中2(按年限分)">
              <el-table-column align="center" label="1年以下">
                <el-table-column prop="HJUO" align="center" label="小计"></el-table-column>
                <el-table-column prop="LBKUMUO" align="center" label="实存"></el-table-column>
                <el-table-column prop="XCKUMUO" align="center" label="虚存"></el-table-column>
              </el-table-column>
              <el-table-column align="center" label="1-2年">
                <el-table-column prop="HJOT" align="center" label="小计"></el-table-column>
                <el-table-column prop="LBKUMOT" align="center" label="实存"></el-table-column>
                <el-table-column prop="KUMOTNS" align="center" label="其中无动态"></el-table-column>
                <el-table-column prop="XCKUMOT" align="center" label="虚存"></el-table-column>
              </el-table-column>
              <el-table-column align="center" label="2-3年">
                <el-table-column prop="HJTH" align="center" label="小计"></el-table-column>
                <el-table-column prop="LBKUMTH" align="center" label="实存"></el-table-column>
                <el-table-column prop="KUMTHNS" align="center" label="其中无动态"></el-table-column>
                <el-table-column prop="XCKUMTH" align="center" label="虚存"></el-table-column>
              </el-table-column>
              <el-table-column align="center" label="3年以上">
                <el-table-column prop="HJUH" align="center" label="小计"></el-table-column>
                <el-table-column prop="LBKUMUH" align="center" label="实存"></el-table-column>
                <el-table-column prop="KUMUHNS" align="center" label="其中无动态"></el-table-column>
                <el-table-column prop="XCKUMUH" align="center" label="虚存"></el-table-column>
              </el-table-column>
            </el-table-column>
          </el-table-column>
          <el-table-column prop="ZGZSL" align="center" label="本年度入库库存"></el-table-column>
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

export default {
  directives: {
    waves
  },
  name: "JYWZ",
  data() {
    return {
      tableKey: 0,
      list: [
        {
          MATKLNO: "一",
          MATKL: "六十大类合计",
          WERKS: "工厂一",
          HJUO: 4,
          LBKUMUO: 2,
          XCKUMUO: 2,
          HJOT: 0,
          LBKUMOT: 0,
          KUMOTNS: 0,
          XCKUMOT: 0,
          HJTH: 6,
          LBKUMTH: 1,
          KUMTHNS: 2,
          XCKUMTH: 3,
          HJUH: 10,
          LBKUMUH: 0,
          KUMUHNS: 0,
          XCKUMUH: 10,
          ZGZSL:100
        },
         {
          MATKLNO: "01",
          MATKL: "冶金原料及铸铁管",
          WERKS: "工厂一",
          HJUO: 3,
          LBKUMUO: 1,
          XCKUMUO: 2,
          HJOT: 0,
          LBKUMOT: 6,
          KUMOTNS: 6,
          XCKUMOT: 0,
          HJTH: 0,
          LBKUMTH: 0,
          KUMTHNS: 0,
          XCKUMTH: 0,
          HJUH: 20,
          LBKUMUH: 0,
          KUMUHNS: 0,
          XCKUMUH: 20,
          ZGZSL:130
        },
         {
          MATKLNO: "02",
          MATKL: "石油专用管材",
          WERKS: "工厂一",
          HJUO: 0,
          LBKUMUO: 0,
          XCKUMUO: 0,
          HJOT: 6,
          LBKUMOT: 6,
          KUMOTNS: 0,
          XCKUMOT: 0,
          HJTH: 3,
          LBKUMTH: 0,
          KUMTHNS: 0,
          XCKUMTH: 3,
          HJUH: 32,
          LBKUMUH: 0,
          KUMUHNS: 2,
          XCKUMUH: 30,
          ZGZSL:105
        },
         {
          MATKLNO: "03",
          MATKL: "普通钢材",
          WERKS: "工厂一",
          HJUO: 0,
          LBKUMUO: 0,
          XCKUMUO: 0,
          HJOT: 0,
          LBKUMOT: 9,
          KUMOTNS: 0,
          XCKUMOT: 0,
          HJTH: 7,
          LBKUMTH: 0,
          KUMTHNS: 7,
          XCKUMTH: 0,
          HJUH: 40,
          LBKUMUH: 0,
          KUMUHNS: 5,
          XCKUMUH: 35,
          ZGZSL:54
        },
         {
          MATKLNO: "04",
          MATKL: "金属丝、金属绳",
          WERKS: "工厂一",
          HJUO: 0,
          LBKUMUO: 0,
          XCKUMUO: 0,
          HJOT: 0,
          LBKUMOT: 0,
          KUMOTNS: 0,
          XCKUMOT: 5,
          HJTH: 0,
          LBKUMTH: 0,
          KUMTHNS: 10,
          XCKUMTH: 0,
          HJUH: 60,
          LBKUMUH: 0,
          KUMUHNS: 0,
          XCKUMUH: 60,
          ZGZSL:100
        },
                {
          MATKLNO: "05",
          MATKL: "有色金属及加工",
          WERKS: "工厂二",
          HJUO: 0,
          LBKUMUO: 0,
          XCKUMUO: 0,
          HJOT: 0,
          LBKUMOT: 0,
          KUMOTNS: 0,
          XCKUMOT: 5,
          HJTH: 0,
          LBKUMTH: 0,
          KUMTHNS: 10,
          XCKUMTH: 0,
          HJUH: 60,
          LBKUMUH: 0,
          KUMUHNS: 0,
          XCKUMUH: 60,
          ZGZSL:100
        },
                {
          MATKLNO: "06",
          MATKL: "建筑五金",
          WERKS: "工厂一",
          HJUO: 0,
          LBKUMUO: 0,
          XCKUMUO: 0,
          HJOT: 0,
          LBKUMOT: 0,
          KUMOTNS: 0,
          XCKUMOT: 5,
          HJTH: 0,
          LBKUMTH: 0,
          KUMTHNS: 10,
          XCKUMTH: 0,
          HJUH: 60,
          LBKUMUH: 0,
          KUMUHNS: 0,
          XCKUMUH: 60,
          ZGZSL:100
        },        {
          MATKLNO: "07",
          MATKL: "石油及产品",
          WERKS: "工厂二",
          HJUO: 0,
          LBKUMUO: 0,
          XCKUMUO: 0,
          HJOT: 0,
          LBKUMOT: 0,
          KUMOTNS: 0,
          XCKUMOT: 5,
          HJTH: 0,
          LBKUMTH: 0,
          KUMTHNS: 10,
          XCKUMTH: 0,
          HJUH: 60,
          LBKUMUH: 0,
          KUMUHNS: 0,
          XCKUMUH: 60,
          ZGZSL:100
        },
                {
          MATKLNO: "08",
          MATKL: "煤炭",
          WERKS: "工厂二",
          HJUO: 0,
          LBKUMUO: 0,
          XCKUMUO: 0,
          HJOT: 0,
          LBKUMOT: 0,
          KUMOTNS: 0,
          XCKUMOT: 5,
          HJTH: 0,
          LBKUMTH: 0,
          KUMTHNS: 10,
          XCKUMTH: 0,
          HJUH: 60,
          LBKUMUH: 0,
          KUMUHNS: 0,
          XCKUMUH: 60,
          ZGZSL:100
        },
                {
          MATKLNO: "09",
          MATKL: "非金属建筑材料",
          WERKS: "工厂一",
          HJUO: 0,
          LBKUMUO: 0,
          XCKUMUO: 0,
          HJOT: 0,
          LBKUMOT: 0,
          KUMOTNS: 0,
          XCKUMOT: 5,
          HJTH: 0,
          LBKUMTH: 0,
          KUMTHNS: 10,
          XCKUMTH: 0,
          HJUH: 60,
          LBKUMUH: 0,
          KUMUHNS: 0,
          XCKUMUH: 60,
          ZGZSL:120
        },
         {
          MATKLNO: "10",
          MATKL: "水泥及制品",
          WERKS: "工厂一",
          HJUO: 0,
          LBKUMUO: 0,
          XCKUMUO: 0,
          HJOT: 0,
          LBKUMOT: 0,
          KUMOTNS: 0,
          XCKUMOT: 5,
          HJTH: 0,
          LBKUMTH: 0,
          KUMTHNS: 10,
          XCKUMTH: 0,
          HJUH: 60,
          LBKUMUH: 0,
          KUMUHNS: 0,
          XCKUMUH: 60,
          ZGZSL:100
        }

      ],
      importList: [],
      total: null,
      listQuery: {
        page: 1,
        limit: 10,
        SJD: "",
        LGNUM: ""
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







