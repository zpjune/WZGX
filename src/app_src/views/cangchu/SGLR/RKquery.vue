<template>
  <div id="RKquery" class="app-container calendar-list-container">
    <!-- <div style="text-align: center; font-weight: bold;margin-bottom:15px;">
      <span>组织单位配置表</span>
    </div>-->
    <div class="topSearh" id="topsearch">
      <el-row>
        <el-col :span="3">
          <el-input placeholder="入库单号" style="width:95%;" size="mini" clearable></el-input>
        </el-col>
        <el-col :span="3">
          <el-date-picker
            size="mini"
            style="width:200px;"
            type="month"
            value-format="yyyy-MM-dd"
            placeholder="入库时间"
            v-model="listQuery.RKSJ"
            :clearable="true"
          ></el-date-picker>
        </el-col>
        <el-col :span="3">
          <el-input placeholder="物料名称" style="width:95%;" size="mini" clearable></el-input>
        </el-col>

        <el-col :span="3">
          <el-input placeholder="仓库号" style="width:95%;" size="mini" clearable></el-input>
        </el-col>

        <el-col :span="3">
          <el-input placeholder="物料组" style="width:95%;" size="mini" clearable></el-input>
        </el-col>

        <el-col :span="9">
          <el-button
            size="mini"
            class="filter-item"
            type="primary"
            v-waves
            icon="el-icon-search"
            @click="handleFilter"
          >查询</el-button>
        <el-button size="mini" type="primary" icon="el-icon-document">导出</el-button>
        </el-col>
      </el-row>
    </div>
    <el-card>
      <el-row>
        <el-col :span="24">
          <el-table
            :key="tableKey"
            :data="list"
            size="mini"
            :header-cell-class-name="tableRowClassName"
            v-loading="listLoading"
            element-loading-text="给我一点时间"
            border
            fit
            highlight-current-row
            style="width: 100%;text-align:left;"
          >
            <el-table-column align="center" label="入库单号" :show-overflow-tooltip="true">
              <template slot-scope="scope">
                <span>{{scope.row.RKDH}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="物料编码" :show-overflow-tooltip="true">
              <template slot-scope="scope">
                <span>{{scope.row.WLBM}}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" label="物料名称" :show-overflow-tooltip="true">
              <template slot-scope="scope">
                <span>{{scope.row.WLMC}}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" label="物料组" :show-overflow-tooltip="true">
              <template slot-scope="scope">
                <span>{{scope.row.WLZ}}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" label="库存地点" :show-overflow-tooltip="true">
              <template slot-scope="scope">
                <span>{{scope.row.KCDD}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="仓库号" :show-overflow-tooltip="true">
              <template slot-scope="scope">
                <span>{{scope.row.CKH}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="入库时间" :show-overflow-tooltip="true">
              <template slot-scope="scope">
                <span>{{scope.row.RKSJ}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="数量" :show-overflow-tooltip="true">
              <template slot-scope="scope">
                <span>{{scope.row.SL}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="金额" :show-overflow-tooltip="true">
              <template slot-scope="scope">
                <span>{{scope.row.JE}}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="保管员" :show-overflow-tooltip="true">
              <template slot-scope="scope">
                <span>{{scope.row.BGY}}</span>
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
        </el-col>
      </el-row>
    </el-card>
   
  </div>
</template>



<script>
// import { Treeselect, LOAD_CHILDREN_OPTIONS } from "@riophae/vue-treeselect";
// import "@riophae/vue-treeselect/dist/vue-treeselect.css";

import waves from "@/frame_src/directive/waves"; // 水波纹指令
import { getToken } from "@/frame_src/utils/auth";
export default {
  name: "RKquery",
  directives: {
    waves
  },
  //   components: {
  //     Treeselect
  //   },
  data() {
    return {
      tableKey: 0,
      list: [
         {
          RKDH: "1-20190118-00021",
          SL: 200,
          JE: 6000,
          RKSJ: "2019-08-17 14:00:00.000",
          BGY: "张三",
          WLBM: "03090603",
          WLMC: "翅片无缝钢管",
          WLZ: "89715251",
          KCDD: "一号仓库",
          CKH: "001"
        },
        {
          RKDH: "1-20190120-00023",
          SL: 200,
          JE: 6000,
          RKSJ: "2019-08-17 14:00:00.000",
          BGY: "张三",
          WLBM: "03090801",
          WLMC: "液压支柱用热轧无缝钢管",
          WLZ: "17020123",
          KCDD: "一号仓库",
          CKH: "001"
        },
        {
          RKDH: "1-20190119-00092",
          SL: 200,
          JE: 6000,
          RKSJ: "2019-08-17 14:00:00.000",
          BGY: "张三",
          WLBM: "03100102",
          WLMC: "镀锌焊接钢管",
          WLZ: "89715251",
          KCDD: "一号仓库",
          CKH: "001"
        }
        ,{
          RKDH: "1-20190118-00011",
          SL: 200,
          JE: 6000,
          RKSJ: "2019-08-17 14:00:00.000",
          BGY: "张三",
          WLBM: "03090403",
          WLMC: "高压锅炉用无缝钢管",
          WLZ: "17021117",
          KCDD: "一号仓库",
          CKH: "001"
        },
        {
          RKDH: "1-20190118-00031",
          SL: 200,
          JE: 6000,
          RKSJ: "2019-08-17 14:00:00.000",
          BGY: "张三",
          WLBM: "03090201",
          WLMC: "合金无缝钢管",
          WLZ: "44011501",
          KCDD: "一号仓库",
          CKH: "001"
        },
        {
          RKDH: "1-20190120-00033",
          SL: 200,
          JE: 6000,
          RKSJ: "2019-08-17 14:00:00.000",
          BGY: "张三",
          WLBM: "04010202",
          WLMC: "预应力钢丝",
          WLZ: "17020202",
          KCDD: "一号仓库",
          CKH: "001"
        },
        {
          RKDH: "1-20190119-00042",
          SL: 200,
          JE: 6000,
          RKSJ: "2019-08-17 14:00:00.000",
          BGY: "张三",
          WLBM: "04010105",
          WLMC: "通讯用镀锌钢丝",
          WLZ: "17020202",
          KCDD: "一号仓库",
          CKH: "001"
        },
                {
          RKDH: "1-20190118-00011",
          SL: 200,
          JE: 6000,
          RKSJ: "2019-08-17 14:00:00.000",
          BGY: "张三",
          WLBM: "03100303",
          WLMC: "钢门窗用异型焊接钢管",
          WLZ: "17020123",
          KCDD: "一号仓库",
          CKH: "001"
        },
        {
          RKDH: "1-20190118-00021",
          SL: 200,
          JE: 6000,
          RKSJ: "2019-08-17 14:00:00.000",
          BGY: "张三",
          WLBM: "03090603",
          WLMC: "翅片无缝钢管",
          WLZ: "89715251",
          KCDD: "一号仓库",
          CKH: "001"
        },
        {
          RKDH: "1-20190120-00023",
          SL: 200,
          JE: 6000,
          RKSJ: "2019-08-17 14:00:00.000",
          BGY: "张三",
          WLBM: "03090801",
          WLMC: "液压支柱用热轧无缝钢管",
          WLZ: "17020123",
          KCDD: "一号仓库",
          CKH: "001"
        },
        {
          RKDH: "1-20190119-00092",
          SL: 200,
          JE: 6000,
          RKSJ: "2019-08-17 14:00:00.000",
          BGY: "张三",
          WLBM: "03100102",
          WLMC: "镀锌焊接钢管",
          WLZ: "89715251",
          KCDD: "一号仓库",
          CKH: "001"
        },
                {
          RKDH: "1-20190118-00031",
          SL: 200,
          JE: 6000,
          RKSJ: "2019-08-17 14:00:00.000",
          BGY: "张三",
          WLBM: "03090201",
          WLMC: "合金无缝钢管",
          WLZ: "44011501",
          KCDD: "一号仓库",
          CKH: "001"
        },
        {
          RKDH: "1-20190120-00033",
          SL: 200,
          JE: 6000,
          RKSJ: "2019-08-17 14:00:00.000",
          BGY: "张三",
          WLBM: "04010202",
          WLMC: "预应力钢丝",
          WLZ: "17020202",
          KCDD: "一号仓库",
          CKH: "001"
        },
        {
          RKDH: "1-20190119-00042",
          SL: 200,
          JE: 6000,
          RKSJ: "2019-08-17 14:00:00.000",
          BGY: "张三",
          WLBM: "04010105",
          WLMC: "通讯用镀锌钢丝",
          WLZ: "17020202",
          KCDD: "一号仓库",
          CKH: "001"
        }
      ],
      total: 15,
      listLoading: false,
      importmodeloptions: [
        {
          value: "样表一",
          label: "样表一"
        },
        {
          value: "样表二",
          label: "样表二"
        }
      ],
      taxofficeoptions: [], //税务机关
      orgregionoptions: [], //机关所在地
      taxcodeoptions: [], //税号
      responsibilityoptions: [], //责任中心
      listQuery: {
        limit: 10,
        page: 1,
        S_OrgCode: null,
        ResponsibilityCenter: "",
        TaxOffice: "",
        ImportModel: "",
        TaxNumber: "",
        OrgRegion: ""
      },
      temp: {
        RKDH: "RKD-201908170987",
        SL: 200,
        JE: 6000,
        RKSJ: "2019-08-17 14:00:00.000",
        BGY: "张三",
        WLBM: "12902001",
        WLMC: "火塞花",
        WLZ: "配件",
        KCDD: "一号仓库",
        CKH: "001"
      },
      textMap: {
        update: "修改入库信息",
        create: "添加入库信息"
      },
      editVisible: false,
      dialogStatus: "",

      treeData: []
    };
  },
  methods: {
    resetTemp() {
      this.temp = {
        RKDH: "",
        SL: "",
        JE: "",
        RKSJ: "",
        BGY: "",
        WLBM: "",
        WLMC: "",
        WLZ: "",
        KCDD: "",
        CKH: ""
      };
    },

    getList() {
      //   this.listLoading = true;
      //   getTaxOrgList(this.listQuery).then(response => {
      //     if (response.data.code === 2000) {
      //       this.list = response.data.items;
      this.total = 15;
      //       this.listLoading = false;
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
    handleFilter() {
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
  created() {
    this.listLoading = false;

    this.getList();
  },

  computed: {
    getRoleLevel() {
      if (this.$store.state.user.roleLevel === "admin") {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="scss" >
#RKquery {
  .topSearh {
    margin-bottom: 15px;
  }
  .page {
    text-align: center;
  }
  .buttom {
    float: right;
  }
  .vue-treeselect__control {
    height: 28px !important;
    width: 100%;
  }
  .vue-treeselect__placeholder,
  .vue-treeselect__single-value {
    line-height: 28px;
  }
}
.selecttrees {
  .vue-treeselect--searchable .vue-treeselect__input-container {
    height: 28px !important;
    width: 100%;
  }
  .el-dialog__body {
    padding: 0px 10px 10px !important;
  }
}
</style>

