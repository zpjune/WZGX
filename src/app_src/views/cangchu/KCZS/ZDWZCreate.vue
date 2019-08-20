<template>
  <div id="ZDWZCreate" class="app-container calendar-list-container">
    <div class="topSearh" id="topsearch">
      <el-row>
        <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
          <el-select
            v-model="listQuery.WL_LOCATIONCODE"
            size="mini"
            style="width:95%"
            placeholder="请选择库存地点"
          >
            <el-option
              v-for="(item,key) in KCDDOptions"
              :key="key"
              :value="item.KCDD_CODE"
              :label="item.KCDD_NAME"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
          <el-select
            v-model="listQuery.WLZ_CODE"
            size="mini"
            style="width:95%"
            placeholder="请选择物料组编码"
            @change="getWLOptions(0)"
          >
            <el-option
              v-for="(item,key) in WLZOptions"
              :key="key"
              :value="item.WLZ_CODE"
              :label="item.WLZ_CODE"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
          <el-select
            v-model="listQuery.WL_CODE"
            size="mini"
            style="width:95%"
            placeholder="请选择物料名称"
            :disabled="listQuery.WLZ_CODE===''||listQuery.WLZ_CODE===null"
          >
            <el-option
              v-for="(item,key) in WLOptions"
              :key="key"
              :value="item.WL_CODE"
              :label="item.WL_NAME"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="9">
          <el-button
            size="mini"
            class="filter-item"
            type="primary"
            v-waves
            icon="el-icon-search"
            @click="getList"
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
            <el-table-column align="center" label="物料组" :show-overflow-tooltip="true" prop="WLZ_CODE"></el-table-column>
            <el-table-column align="center" label="物料编码" :show-overflow-tooltip="true" prop="WL_CODE"></el-table-column>
            <el-table-column align="center" label="物料名称" :show-overflow-tooltip="true" prop="WL_NAME"></el-table-column>
            <el-table-column align="center" label="存放地点" :show-overflow-tooltip="true" prop="KCDD_NAME"></el-table-column>
            <el-table-column align="center" label="最高储备" :show-overflow-tooltip="true" prop="MAXHAVING"></el-table-column>
            <el-table-column align="center" label="最低储备" :show-overflow-tooltip="true" prop="MINHAVING"></el-table-column>
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
        <el-form ref="dataForm" :model="temp" label-width="120px" style="width: 99%;"  :rules="rules">
          <el-col :span="24">
            <el-form-item label="物料组" prop="WLZ_CODE">
              <el-select
                v-model="temp.WLZ_CODE"
                size="mini"
                style="width:95%"
                placeholder="请选择物料组编码"
                @change="getWLOptions(1)"
              >
                <el-option
                  v-for="(item,key) in WLZOptions"
                  :key="key"
                  :value="item.WLZ_CODE"
                  :label="item.WLZ_CODE"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="物料名称" prop="WL_CODE">
              <el-select
                v-model="temp.WL_CODE"
                
                style="width:95%"
                placeholder="请选择物料名称"
                :disabled="temp.WLZ_CODE===''||temp.WLZ_CODE===null"
                size="mini"
              >
                <el-option
                  v-for="(item,key) in TempWLOptions"
                  :key="key"
                  :value="item.WL_CODE"
                  :label="item.WL_NAME"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="存放地点" prop="WL_LOCATIONCODE">
              <el-select
                v-model="temp.WL_LOCATIONCODE"
                size="mini"
                style="width:95%"
                placeholder="请选择库存地点"
              >
                <el-option
                  v-for="(item,key) in KCDDOptions"
                  :key="key"
                  :value="item.KCDD_CODE"
                  :label="item.KCDD_NAME"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="最低储备" prop="MAXHAVING">
              <el-input v-model="temp.MAXHAVING" size="mini" style="width:95%"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="最高储备" prop="MINHAVING">
              <el-input v-model="temp.MINHAVING" size="mini" style="width:95%"></el-input>
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

import {
  GetZDWZWHInfo,
  CreateZDWZWHInfo,
  EditZDWZWHInfo,
  DelZDWZWHInfo,
  GetKCDDInfo,
  GetWLZCODE,
  GetWZCODE
} from "@/app_src/api/cangchu/ZDWZ/ZDWZCreate";

import waves from "@/frame_src/directive/waves"; // 水波纹指令
import { getToken } from "@/frame_src/utils/auth";
import { parseTime } from "@/frame_src/utils";
export default {
  name: "ZDWZCreate",
  directives: {
    waves
  },
  data() {
    return {
      tableKey: 0,
      list: [],
      total: 0,
      listLoading: false,
      listQuery: {
        limit: 10,
        page: 1,
        WL_LOCATIONCODE: "",
        WLZ_CODE: "",
        WL_CODE: ""
      },
      KCDDOptions: [],
      WLZOptions: [],
      WLOptions: [],
      TempWLOptions: [],
      temp: {
        WLZ_CODE: "",
        WL_CODE: "",
        WL_LOCATIONCODE: "",
        WL_LOCATIONCODE: "",
        MAXHAVING: "",
        MINHAVING: ""
      },
      textMap: {
        update: "修改",
        create: "添加"
      },
      editVisible: false,
      dialogStatus: "",
      treeData: [],
      rules: {
        WLZ_CODE: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        WL_CODE: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        WL_LOCATIONCODE: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        WL_LOCATIONCODE: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        MAXHAVING: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        MINHAVING: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    resetTemp() {
      this.temp = {
        WLZ_CODE: "",
        WL_CODE: "",
        WL_LOCATIONCODE: "",
        WL_LOCATIONCODE: "",
        MINHAVING: ""
      };
    },
    getList() {
      GetZDWZWHInfo(this.listQuery).then(response => {
        if (response.data.code === 2000) {
          this.listLoading = false;
          this.list = response.data.items;
          this.total=response.data.total;
        } else {
          this.listLoading = false;
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
    createInfo() {
      CreateZDWZWHInfo(this.temp).then(response => {
        if (response.data.code === 2000) {
          this.editVisible = false;
          this.$notify({
            position: "bottom-right",
            title: "成功",
            message: response.data.message,
            type: "success",
            duration: 2000
          });
          this.getList();
        } else {
          this.$notify({
            position: "bottom-right",
            title: "失败",
            message: response.data.message,
            type: "warning",
            duration: 2000
          });
        }
      });
    },
    editInfo() {
      EditZDWZWHInfo(this.temp).then(response => {
        if (response.data.code === 2000) {
          this.editVisible = false;
          this.$notify({
            position: "bottom-right",
            title: "成功",
            message: response.data.message,
            type: "success",
            duration: 2000
          });
          this.getList();
        } else {
          this.$notify({
            position: "bottom-right",
            title: "失败",
            message: response.data.message,
            type: "warning",
            duration: 2000
          });
        }
      });
    },
    delInfo() {
      DelZDWZWHInfo(this.temp).then(response => {
        if (response.data.code === 2000) {
          this.editVisible = false;
          this.$notify({
            position: "bottom-right",
            title: "成功",
            message: response.data.message,
            type: "success",
            duration: 2000
          });
        } else {
          this.$notify({
            position: "bottom-right",
            title: "失败",
            message: response.data.message,
            type: "warning",
            duration: 2000
          });
        }
      });
    },
    getKCDDOptions() {
      GetKCDDInfo().then(response => {
        if (response.data.code === 2000) {
          this.KCDDOptions = response.data.items;
        }
      });
    },
    getWLZOptions() {
      GetWLZCODE().then(response => {
        if (response.data.code === 2000) {
          this.WLZOptions = response.data.items;
        }
      });
    },
    getWLOptions(flag) {
      let temp = {
        WLZ_CODE: ""
      };
      if (flag === 0) {
        temp.WLZ_CODE = this.listQuery.WLZ_CODE;
        GetWZCODE(temp).then(response => {
          if (response.data.code === 2000) {
            this.WLOptions = response.data.items;
          }
        });
      } else {
        temp.WLZ_CODE = this.temp.WLZ_CODE;
        GetWZCODE(temp).then(response => {
          if (response.data.code === 2000) {
            this.TempWLOptions = response.data.items;
          }
        });
      }
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
      this.getWLOptions(1);
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
        .then(() => {})
        .catch();
    },
    createData() {
      // 创建
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          this.createInfo();
        }
      });
    },
    updateData() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          this.editInfo();
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
    //this.listLoading = false;
    this.getList();
    this.getKCDDOptions();
    this.getWLZOptions();
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
#ZDWZCreate {
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

