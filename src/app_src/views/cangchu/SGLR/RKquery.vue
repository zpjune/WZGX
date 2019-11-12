<template>
  <div id="RKLR" class="app-container calendar-list-container">
    <!-- <div style="text-align: center; font-weight: bold;margin-bottom:15px;">
      <span>组织单位配置表</span>
    </div>-->
    <div class="topSearh" id="topsearch">
      <el-row>
        <!-- <el-col :span="3">
          <el-input placeholder="入库单号" style="width:95%;" size="mini" clearable></el-input>
        </el-col>-->
        <el-col :span="3">
          <el-date-picker
            size="mini"
            style="width:200px;"
            type="month"
            value-format="yyyy-MM-dd"
            placeholder="入库时间"
            v-model="listQuery.RKTime"
            :clearable="true"
          ></el-date-picker>
        </el-col>
        <!-- <el-col :span="3">
          <el-input placeholder="物料名称" style="width:95%;" size="mini" clearable></el-input>
        </el-col>-->

        <el-col :span="3">
          <el-input
            placeholder="货位号"
            style="width:95%;"
            size="mini"
            clearable
            v-model="listQuery.LocationNumber"
          ></el-input>
        </el-col>

        <!-- <el-col :span="3">
          <el-input placeholder="物料组" style="width:95%;" size="mini" clearable></el-input>
        </el-col>-->

        <el-col :span="9">
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
          >新增</el-button>
          <el-button type="primary" icon="el-icon-edit" size="mini">导入</el-button>
          <el-button size="mini" type="primary" icon="el-icon-document">导出</el-button>-->
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
            <!-- <el-table-column align="center" label="入库单号" :show-overflow-tooltip="true">
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
            </el-table-column>-->
            <el-table-column
              align="center"
              label="大类"
              :show-overflow-tooltip="true"
              prop="RK_CLASSCODE"
            ></el-table-column>
            <el-table-column
              align="center"
              label="物资编码"
              :show-overflow-tooltip="true"
              prop="RK_CODE"
            ></el-table-column>
            <el-table-column
              align="center"
              label="物料描述"
              :show-overflow-tooltip="true"
              prop="RK_DESCRIBE"
            ></el-table-column>
            <el-table-column
              align="center"
              label="计量单位"
              :show-overflow-tooltip="true"
              prop="RK_MEASUREMENT"
            ></el-table-column>
            <el-table-column
              align="center"
              label="入库数量"
              :show-overflow-tooltip="true"
              prop="RK_QUANTITY"
            ></el-table-column>
            <el-table-column align="center" label="入库时间" :show-overflow-tooltip="true">
              <template slot-scope="scope">{{scope.row.RK_TIME|parseTime}}</template>
            </el-table-column>
            <el-table-column
              align="center"
              label="委托单位"
              :show-overflow-tooltip="true"
              prop="RK_COMPANY"
            ></el-table-column>
            <el-table-column
              align="center"
              label="保管员"
              :show-overflow-tooltip="true"
              prop="RK_CUSTODIAN"
            ></el-table-column>
            <el-table-column
              align="center"
              label="入库地点"
              :show-overflow-tooltip="true"
              prop="RK_LOCATION"
            ></el-table-column>
            <el-table-column
              align="center"
              label="货位号"
              :show-overflow-tooltip="true"
              prop="RK_LOCATIONNUMBER"
            ></el-table-column>
            <el-table-column
              align="center"
              label="备注"
              :show-overflow-tooltip="true"
              prop="RK_REMARK"
            ></el-table-column>
            <!-- <el-table-column align="center" width="200" label="操作">
              <template slot-scope="scope">
                <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">修改</el-button>
                <el-button type="danger" size="mini" @click="handleDelete(scope.row)">删除</el-button>
              </template>
            </el-table-column>-->
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
            <el-form-item label="大类编码" prop="RK_ClassCode">
              <el-input v-model="temp.RK_CLASSCODE"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="物资编码" prop="RK_Code">
              <el-input v-model="temp.RK_CODE"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="物资描述" prop="RK_Describe">
              <el-input v-model="temp.RK_DESCRIBE"></el-input>
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
            <el-form-item label="计量单位" prop="RK_Measurement">
              <el-input v-model="temp.RK_MEASUREMENT"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="入库数量" prop="RK_QUANTITY">
              <el-input v-model="temp.RK_QUANTITY"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="入库时间" prop="RK_Time">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="temp.RK_TIME"
                style="width: 100%;"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="委托单位" prop="RK_Company">
              <el-input v-model="temp.RK_COMPANY"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="保管员" prop="RK_Custodian">
              <el-input v-model="temp.RK_CUSTODIAN"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="入库地点" prop="RK_Location">
              <el-input v-model="temp.RK_LOCATION"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="货位号" prop="RK_LocationNumber">
              <el-input v-model="temp.RK_LOCATIONNUMBER"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="备注" prop="RK_Remark">
              <el-input v-model="temp.RK_REMARK"></el-input>
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
import {
  createRKInfo,
  delRKInfo,
  updateRKInfo,
  getRKInfo
} from "@/app_src/api/cangchu/SGLR/RKLR";
import { parseTime } from "@/frame_src/utils";
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
      list: [],
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
        RKTime: "",
        LocationNumber: ""
      },
      temp: {
        RK_CLASSCODE: "",
        RK_CODE: "",
        RK_DESCRIBE: "",
        RK_MEASUREMENT: "",
        RK_QUANTITY: "",
        RK_TIME: "",
        RK_COMPANY: "",
        RK_CUSTODIAN: "",
        RK_LOCATION: "",
        RK_LOCATIONNUMBER: "",
        RK_REMARK: ""
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
        RK_CLASSCODE: "",
        RK_CODE: "",
        RK_DESCRIBE: "",
        RK_MEASUREMENT: "",
        RK_QUANTITY: "",
        RK_TIME: "",
        RK_COMPANY: "",
        RK_CUSTODIAN: "",
        RK_LOCATION: "",
        RK_LOCATIONNUMBER: "",
        RK_REMARK: ""
      };
    },

    getList() {
      this.listLoading = true;
      getRKInfo(this.listQuery).then(response => {
        if (response.data.code === 2000) {
          this.list = response.data.items;
          this.listLoading = false;
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
          delRKInfo(row).then(response => {
            if (response.data.code === 2000) {
              this.$notify({
                position: "bottom-right",
                title: "成功！",
                message: response.data.message,
                type: "success",
                duration: 2000
              });
              this.getList();
            }
          });
        })
        .catch();
    },
    createData() {
      // 创建
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          createRKInfo(this.temp).then(response => {
            var message = response.data.message;
            var message = "成功";
            var title = "失败";
            var type = "error";
            if (response.data.code === 2000) {
              this.getList();
              title = "成功";
              type = "success";
              // this.list.unshift(this.temp)
            }
            this.editVisible = false;
            this.$notify({
              position: "bottom-right",
              title: title,
              message: message,
              type: type,
              duration: 3000
            });
          });
        }
      });
    },
    updateData() {
      this.$refs["dataForm"].validate(valid => {
        if (valid) {
          const tempData = Object.assign({}, this.temp); // 这样就不会共用同一个对象
          updateRKInfo(tempData).then(response => {
            var message = response.data.message;
            var message = "成功";
            var title = "失败";
            var type = "error";
            if (response.data.code === 2000) {
              this.getList();
              title = "成功";
              type = "success";
            }
            this.editVisible = false;
            this.$notify({
              position: "bottom-right",
              title: title,
              message: message,
              type: type,
              duration: 3000
            });
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
  },
  fliters: {
    parseTime
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

