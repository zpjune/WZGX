<template>
  <div id="TotalCRKCreate" class="app-container calendar-list-container">
    <div class="topSearh" id="topsearch">
      <el-row>
        <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
          <el-select v-model="listQuery.DK_CODE" placeholder="请选择库存地点" clearable size="mini" style="width:95%">
            <el-option
              v-for="(item,key) in KCCODEOptions"
              :key="key"
              :label="item.NAME"
              :value="item.CODE"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="2">
          <el-date-picker
            style="width:95%;"
            size="mini"
            type="month"
            placeholder="选择月"
            v-model="listQuery.ERDATE"
            value-format="yyyyMM"
          ></el-date-picker>
        </el-col>
        <el-col :span="9">
          <el-button
            size="mini"
            class="filter-item"
            type="primary"
            v-waves
            icon="el-icon-search"
            @click="GetList"
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
            v-loading="listloading"
            element-loading-text="给我一点时间"
            border
            fit
            highlight-current-row
            style="width: 100%;text-align:left;"
          >
            <el-table-column align="center" label="序号" :show-overflow-tooltip="true" >
              <template slot-scope="scope">
                {{scope.$index+1}}
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              label="出入库时间"
              :show-overflow-tooltip="true"
              prop="ERDATE"
            ></el-table-column>
            <el-table-column align="center" label="库存地点" :show-overflow-tooltip="true" prop="NAME"></el-table-column>
            <el-table-column align="center" label="入库量" :show-overflow-tooltip="true" prop="RKL"></el-table-column>
            <el-table-column align="center" label="出库量" :show-overflow-tooltip="true" prop="CKL"></el-table-column>
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
        <el-form
          ref="dataForm"
          :model="temp"
          :rules="rules"
          label-width="120px"
          style="width: 99%;"
        >
          <el-col :span="24">
            <el-form-item label="月份" prop="ERDATE">
              <el-date-picker
                type="month"
                placeholder="选择月"
                v-model="temp.ERDATE"
                style="width:100%"
                value-format="yyyyMM"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="库存地点" prop="DK_CODE">
              <el-select v-model="temp.DK_CODE" style="width:100%">
                <el-option
                  v-for="(item,key) in KCCODEOptions"
                  :key="key"
                  :label="item.NAME"
                  :value="item.CODE"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="入库量" prop="RKL">
              <el-input v-model="temp.RKL"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="出库量" prop="CKL">
              <el-input v-model="temp.CKL"></el-input>
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
import { parseTime } from "@/frame_src/utils";
import {
  GetCodeOptions,
  GetCRKInfo,
  CreateCRKInfo,
  UpdateCRKInfo,
  DelCRKInfo
} from "@/app_src/api/cangchu/ZDWZ/CRKWH";
export default {
  name: "CKLR",
  directives: {
    waves
  },
  data() {
    return {
      tableKey: 0,
      list: [],
      KCCODEOptions: [],
      total: 0,
      listloading: false,
      listQuery: {
        limit: 10,
        page: 1,
        DK_CODE: "",
        ERDATE: ""
      },
      temp: {
        DK_CODE: "",
        ERDATE: "",
        RKL: "",
        CKL: "",
        userid: this.$store.state.user.userId
      },
      textMap: {
        update: "修改",
        create: "添加"
      },
      editVisible: false,
      dialogStatus: "",
      treeData: [],
      rules: {
        DK_CODE: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        ERDATE: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        RKL: [{ required: true, message: "此项不能为空！", trigger: "change" }],
        CKL: [{ required: true, message: "此项不能为空！", trigger: "change" }]
      }
    };
  },
  methods: {
    resetTemp() {
      this.temp = {
        DK_CODE: "",
        ERDATE: "",
        RKL: "",
        CKL: "",
        userid: this.$store.state.user.userId
      };
    },
    GetList() {
      GetCRKInfo(this.listQuery).then(response => {
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
    GetCodeOptions() {
      let temp = {
        ParentCode: "TOTAL"
      };
      GetCodeOptions(temp).then(response => {
        if (response.data.code === 2000) {
          this.KCCODEOptions = response.data.items;
        }
      });
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
      this.$confirm("确认删除信息吗", "确认信息", {
        distinguishCancelAndClose: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(() => {
          let temp = {
            ID: row.ID
          };
          DelCRKInfo(temp).then(response => {
            if (response.data.code === 2000) {
              this.$notify({
                position: "bottom-right",
                title: "成功",
                message: response.data.message,
                type: "success",
                duration: 2000
              });
              this.GetList();
            } else {
              this.$notify({
                position: "bottom-right",
                title: "失败",
                message: response.data.message,
                type: "error",
                duration: 2000
              });
            }
          });
        })
        .catch();
    },
    createData() {
      // 创建
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          CreateCRKInfo(this.temp).then(response => {
            if (response.data.code === 2000) {
              this.$notify({
                position: "bottom-right",
                title: "成功",
                message: response.data.message,
                type: "success",
                duration: 2000
              });
              this.editVisible=false;
              this.GetList();
            } else {
              this.$notify({
                position: "bottom-right",
                title: "失败",
                message: response.data.message,
                type: "error",
                duration: 2000
              });
            }
          });
        }
      });
    },
    updateData() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          UpdateCRKInfo(this.temp).then(response => {
            if (response.data.code === 2000) {
              this.$notify({
                position: "bottom-right",
                title: "成功",
                message: response.data.message,
                type: "success",
                duration: 2000
              });
              this.editVisible=false;
              this.GetList();
            } else {
              this.$notify({
                position: "bottom-right",
                title: "失败",
                message: response.data.message,
                type: "error",
                duration: 2000
              });
            }
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
    handleFilter() {
      this.listQuery.page = 1;
      // this.getList();
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
    // this.getList();
  },
  mounted() {
    this.GetList();
    this.GetCodeOptions();
  },

  computed: {
    getRoleLevel() {
      if (this.$store.state.user.roleLevel === "admin") {
        return true;
      } else {
        return false;
      }
    }
  },
  fliters: {
    parseTime
  }
};
</script>

<style lang="scss" >
#TotalCRKCreate {
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

