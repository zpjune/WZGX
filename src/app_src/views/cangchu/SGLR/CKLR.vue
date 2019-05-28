<template>
  <div id="RKLR" class="app-container calendar-list-container">
    <!-- <div style="text-align: center; font-weight: bold;margin-bottom:15px;">
      <span>组织单位配置表</span>
    </div>-->
    <div class="topSearh" id="topsearch">
      <el-row>
        <el-col :span="3">
          <el-input placeholder="出库单号" style="width:95%;" size="mini" clearable></el-input>
        </el-col>
        <el-col :span="3">
          <el-date-picker
            size="mini"
            style="width:200px;"
            type="month"
            value-format="yyyy-MM-dd"
            placeholder="出库时间"
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
          >搜索</el-button>
          <el-button
            size="mini"
            class="filter-item"
            style="margin-left: 10px;"
            @click="handleCreate"
            type="primary"
            icon="el-icon-edit"
          >新增</el-button>
        <el-button type="primary" icon="el-icon-edit" size="mini">导入</el-button>
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
            <el-table-column align="center" label="出库单号" :show-overflow-tooltip="true">
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
            <el-table-column align="center" label="出库时间" :show-overflow-tooltip="true">
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
            <el-table-column align="center" width="200" label="操作">
              <template slot-scope="scope">
                <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">修改</el-button>
                <el-button type="danger" size="mini" @click="handleDelete(scope.row)">删除</el-button>
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
    <el-dialog
      :visible.sync="editVisible"
      class="selecttrees"
      :title="textMap[dialogStatus]"
      width="500px"
    >
      <el-card>
        <el-form ref="dataForm" :model="temp" label-width="120px" style="width: 99%;">
          <el-col :span="24">
            <el-form-item label="出库单号" prop="RKDH">
              <el-input v-model="temp.RKDH"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="物料编码" prop="WLBM">
              <el-input v-model="temp.WLBM"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="物料名称" prop="WLMC">
              <el-input v-model="temp.WLMC"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <!-- <el-form-item label="导入模板" prop="ImportModel">
              <el-select
                filterable
                v-model="temp.ImportModel"
                placeholder="导入模板"
                style="width:100%;"
                 size="mini"
              >
                <el-option
                  v-for="item in importmodeloptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>-->
            <el-form-item label="物料组" prop="WLZ">
              <el-input v-model="temp.WLZ"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="出库时间" prop="RKSJ">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="temp.RKSJ"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="数量" prop="SL">
              <el-input v-model="temp.SL"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="金额" prop="JE">
              <el-input v-model="temp.JE"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="仓库号" prop="CKH">
              <el-input v-model="temp.CKH"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="库存地点" prop="KCDD">
              <el-input v-model="temp.KCDD"></el-input>
            </el-form-item>
          </el-col>
        </el-form>
        <div style="text-align:center">
          <el-button @click="editVisible = false">取消</el-button>
          <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">保存</el-button>
          <el-button v-else type="primary" @click="updateData">保存</el-button>
        </div>
      </el-card>
    </el-dialog>
  </div>
</template>



<script>
// import { Treeselect, LOAD_CHILDREN_OPTIONS } from "@riophae/vue-treeselect";
// import "@riophae/vue-treeselect/dist/vue-treeselect.css";

import waves from "@/frame_src/directive/waves"; // 水波纹指令
import { getToken } from "@/frame_src/utils/auth";
export default {
  name: "RKLR",
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
          RKDH: "2-20190118-00021",
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
          RKDH: "2-20190120-00023",
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
          RKDH: "2-20190119-00092",
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
          RKDH: "2-20190118-00011",
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
          RKDH: "2-20190118-00031",
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
          RKDH: "2-20190120-00033",
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
          RKDH: "2-20190119-00042",
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
          RKDH: "2-20190118-00011",
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
          RKDH: "2-20190118-00021",
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
          RKDH: "2-20190120-00023",
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
          RKDH: "2-20190119-00092",
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
          RKDH: "2-20190118-00031",
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
          RKDH: "2-20190120-00033",
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
          RKDH: "2-20190119-00042",
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

    handleCreate() {
      this.resetTemp();
      this.editVisible = true;
      this.dialogStatus = "create";
      if (this.$refs["dataForm"] !== undefined) {
        this.$refs["dataForm"].resetFields();
      }
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row); // copy obj
      this.editVisible = true;
      this.dialogStatus = "update";
      this.$nextTick(() => {
        this.$refs["dataForm"].clearValidate();
      });
    },
    handleDelete(row) {
      this.$confirm("确认删除记录吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          //   const query = { S_ID: row.S_Id };
          //   deleteTaxOrg(query).then(response => {
          //     this.message = response.data.message;
          //     this.title = "失败";
          //     this.type = "error";
          //     if (response.data.code === 2000) {
          //       // const index = this.list.indexOf(row)
          //       // this.list.splice(index, 1)
          this.getList();
          this.title = "成功";
          this.type = "success";
          //     }
          this.$notify({
            position: "bottom-right",
            title: this.title,
            message: this.message,
            type: this.type,
            duration: 2000
          });
          //   });
        })
        .catch(() => {});
    },
    createData() {
      // 创建
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          //   createTaxOrg(this.temp).then(response => {
          //     var message = response.data.message;
          var message = "成功";
          var title = "失败";
          var type = "error";
          //     if (response.data.code === 2000) {
          this.getList();
          title = "成功";
          type = "success";
          // this.list.unshift(this.temp)
          //     }
               this.editVisible = false;
          this.$notify({
            position: "bottom-right",
            title: title,
            message: message,
            type: type,
            duration: 3000
          });
          //   });
        }
      });
    },
    updateData() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          const tempData = Object.assign({}, this.temp); // 这样就不会共用同一个对象
          //   tempData.S_UpdateBy = this.$store.state.user.userId;
          //   //tempData.NOTICE_CONTENT=this.content
          //   updateTaxOrg(tempData).then(response => {
          //     var message = response.data.message;
          var message = "成功";
          var title = "失败";
          var type = "error";
          //     if (response.data.code === 2000) {
          this.getList();
          title = "成功";
          type = "success";
          // }
          this.editVisible = false;
          this.$notify({
            position: "bottom-right",
            title: title,
            message: message,
            type: type,
            duration: 3000
          });
          //   });
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
#RKLR {
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

