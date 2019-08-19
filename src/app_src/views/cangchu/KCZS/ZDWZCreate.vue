<template>
  <div id="ZDWZCreate" class="app-container calendar-list-container">
    <div class="topSearh" id="topsearch">
      <el-row>
        <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
          <el-input placeholder="请输入库存地点编码" style="width:95%;" size="mini" clearable></el-input>
        </el-col>
        <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
          <el-input placeholder="请输入库存地点" style="width:95%;" size="mini" clearable></el-input>
        </el-col>
        <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
          <el-input placeholder="请输入物料编码" style="width:95%;" size="mini" clearable></el-input>
        </el-col>
        <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
          <el-input placeholder="请输入物料名称" style="width:95%;" size="mini" clearable></el-input>
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
            <el-table-column align="center" label="序号" :show-overflow-tooltip="true" prop="non"></el-table-column>
            <el-table-column align="center" label="物料组" :show-overflow-tooltip="true" prop="WLZ"></el-table-column>
            <el-table-column align="center" label="物料编码" :show-overflow-tooltip="true" prop="WLBM"></el-table-column>
            <el-table-column align="center" label="物料名称" :show-overflow-tooltip="true" prop="WLMC"></el-table-column>
            <el-table-column align="center" label="存放地点" :show-overflow-tooltip="true" prop="KCDD"></el-table-column>
            <el-table-column align="center" label="最高储备" :show-overflow-tooltip="true" prop="ZGCB"></el-table-column>
            <el-table-column align="center" label="最低储备" :show-overflow-tooltip="true" prop="ZDCB"></el-table-column>
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
            <el-form-item label="物料组" prop="CK_ClassCode">
              <el-input v-model="temp.CK_ClassCode"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="物料编码" prop="CK_ClassCode">
              <el-input v-model="temp.CK_ClassCode"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="物料名称" prop="CK_ClassCode">
              <el-input v-model="temp.CK_ClassCode"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="存放地点" prop="CK_ClassCode">
              <el-input v-model="temp.CK_ClassCode"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="最低储备" prop="CK_Code">
              <el-input v-model="temp.CK_Code"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="最高储备" prop="CK_Describe">
              <el-input v-model="temp.CK_Describe"></el-input>
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
  GetKCDDInfo
} from "@/app_src/api/cangchu/ZDWZ/ZDWZCreate";

import waves from "@/frame_src/directive/waves"; // 水波纹指令
import { getToken } from "@/frame_src/utils/auth";
import { parseTime } from "@/frame_src/utils";
export default {
  name: "CKLR",
  directives: {
    waves
  },
  data() {
    return {
      tableKey: 0,
      list: [],
      total: 15,
      listLoading: false,
      listQuery: {
        limit: 10,
        page: 1,
        CKTime: "",
        LocationNumber: ""
      },
      temp: {
        CK_ClassCode: "",
        CK_Code: "",
        CK_Describe: ""
      },
      textMap: {
        update: "修改",
        create: "添加"
      },
      editVisible: false,
      dialogStatus: "",

      treeData: []
    };
  },
  methods: {
    resetTemp() {
      this.temp = {
        CK_ClassCode: "",
        CK_Code: "",
        CK_Describe: ""
      };
    },

    getList() {},

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
        .then(() => {})
        .catch();
    },
    createData() {
      // 创建
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
        }
      });
    },
    updateData() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
        }
      });
    },
    handleSizeChange(val) {
      this.listQuery.limit = val;
      // this.getList();
    },
    handleCurrentChange(val) {
      this.listQuery.page = val;
      //this.getList();
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

