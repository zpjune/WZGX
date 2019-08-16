<template>
  <div id="GCWH" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input
          placeholder="请输入工厂名称"
          style="width:95%;"
          size="mini"
          clearable
          v-model="temp.DW_NAME"
        ></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input
          placeholder="请输入工厂编码"
          style="width:95%;"
          size="mini"
          clearable
          v-model="temp.DW_CODE"
        ></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-select v-model="temp.DW_ISSS" size="mini" placeholder="是否上市" style="width:90%">
          <el-option label="上市" value="Y"></el-option>
          <el-option label="未上市" value="N"></el-option>
        </el-select>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-button type="primary" icon="el-icon-zoom-in" size="mini" @click="Create">新建</el-button>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="GetList">查询</el-button>
        <el-button type="primary" icon="el-icon-document" size="mini">导出</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-table
          size="mini"
          :data="fac"
          :header-cell-class-name="tableRowClassName"
          v-loading="listloading"
          element-loading-text="给我一点时间"
          border
          fit
          highlight-current-row
        >
          <el-table-column label="工厂编码" prop="DW_CODE"></el-table-column>
          <el-table-column label="工厂名称" prop="DW_NAME"></el-table-column>
          <el-table-column label="是否上市">
            <template slot-scope="scope">{{scope.row.DW_ISSS|ChangeFlag}}</template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="primary" @click="Edit(scope.row)" size="mini">编辑</el-button>
              <el-button type="danger" @click="del(scope.row)" size="mini">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-dialog :visible.sync="show" :title="dialogTitle" width="30%">
          <el-card>
            <el-form :model="DWModel" :rules="rules" label-width="80px" ref="DWModel">
              <el-form-item label="工厂编码" prop="DW_CODE">
                <el-input v-model="DWModel.DW_CODE" :disabled="dialogTitle=='修改工厂信息'"></el-input>
              </el-form-item>
              <el-form-item label="工厂名称" prop="DW_NAME">
                <el-input v-model="DWModel.DW_NAME"></el-input>
              </el-form-item>
              <el-form-item label="是否上市" prop="DW_ISSS">
                <el-select v-model="DWModel.DW_ISSS">
                  <el-option label="上市" value="Y"></el-option>
                  <el-option label="未上市" value="N"></el-option>
                </el-select>
              </el-form-item>
              <div style="text-align:center">
                <el-button type="primary" @click="submit">提交</el-button>
                <el-button @click="show=false">取消</el-button>
              </div>
            </el-form>
          </el-card>
        </el-dialog>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="1"
          :page-sizes="[10,20,30, 50]"
          :page-size="20"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          style="text-align: center;"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  GetGCInfo,
  CreateGCInfo,
  EditGCInfo,
  DelGCinfo
} from "@/app_src/api/cangchu/ZDWZ/GCWH";
export default {
  name: "GCWH",
  data() {
    return {
      listloading: true,
      total: 0,
      temp: {
        limit: 10,
        page: 1,
        DW_CODE: "",
        DW_NAME: ""
      },
      DWModel: {
        DW_CODE: "",
        DW_NAME: "",
        DW_ISSS: ""
      },
      rules: {
        DW_CODE: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        DW_NAME: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        DW_ISSS: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ]
      },
      fac: [],
      dialogTitle: "",
      show: false
    };
  },
  filters: {
    ChangeFlag(data) {
      if (data === "Y") {
        return "上市";
      } else {
        return "未上市";
      }
    }
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      // 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。
      if (rowIndex === 0) {
        return "el-button--primary is-active"; // 'warning-row'
      } // 'el-button--primary is-plain'// 'warning-row'
      return "";
    },
    reset() {
      this.DWModel = {
        DW_CODE: "",
        DW_NAME: ""
      };
    },
    GetList() {
      GetGCInfo(this.temp).then(response => {
        if (response.data.code === 2000) {
          this.fac = response.data.items;
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
    Create() {
      this.show = true;
      this.$nextTick(() => {
        this.$refs["DWModel"].clearValidate();
      });
      this.reset();
      this.dialogTitle = "新建工厂信息";
    },
    Edit(data) {
      this.show = true;
      this.$nextTick(() => {
        this.$refs["DWModel"].clearValidate();
      });
      this.DWModel = Object.assign({}, data);

      this.dialogTitle = "修改工厂信息";
    },
    del(data) {
      this.$confirm("您确定要删除此项信息吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        DelGCinfo(data).then(response => {
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
      });
    },
    submit() {
      this.$refs["DWModel"].validate(valid => {
        if (valid) {
          if (this.dialogTitle == "新建工厂信息") {
            CreateGCInfo(this.DWModel).then(response => {
              if (response.data.code === 2000) {
                this.$notify({
                  position: "bottom-right",
                  title: "成功",
                  message: response.data.message,
                  type: "success",
                  duration: 2000
                });
                this.show = false;
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
          } else {
            EditGCInfo(this.DWModel).then(response => {
              if (response.data.code === 2000) {
                this.$notify({
                  position: "bottom-right",
                  title: "成功",
                  message: response.data.message,
                  type: "success",
                  duration: 2000
                });
                this.show = false;
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
        }
      });
    },
    handleSizeChange(val) {
      this.temp.limit = val;
      this.GetList();
    },
    handleCurrentChange(val) {
      this.temp.page = val;
      this.GetList();
    }
  },
  mounted() {
    this.GetList();
  }
};
</script>



<style lang="scss" scoped>
</style>


