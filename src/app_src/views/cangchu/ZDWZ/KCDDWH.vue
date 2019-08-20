<template>
  <div id="KCDDWH" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input
          placeholder="请输入地点名称"
          style="width:95%;"
          size="mini"
          clearable
          v-model="temp.KCDD_NAME"
        ></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input
          placeholder="请输入地点编码"
          style="width:95%;"
          size="mini"
          clearable
          v-model="temp.KCDD_CODE"
        ></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-button type="primary" icon="el-icon-zoom-in" size="mini" @click="Create">新建</el-button>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleFilter">查询</el-button>
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
          <el-table-column label="地点编码" prop="KCDD_CODE"></el-table-column>
          <el-table-column label="地点名称" prop="KCDD_NAME"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="primary" @click="Edit(scope.row)" size="mini">编辑</el-button>
              <el-button type="danger" @click="del(scope.row)" size="mini">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-dialog :visible.sync="show" :title="dialogTitle" width="30%">
          <el-card>
            <el-form :model="KCDDModel" :rules="rules" label-width="80px" ref="KCDDModel">
              <el-form-item label="地点编码" prop="KCDD_CODE">
                <el-input v-model="KCDDModel.KCDD_CODE" :disabled="dialogTitle=='修改地点信息'"></el-input>
              </el-form-item>
              <el-form-item label="地点名称" prop="KCDD_NAME">
                <el-input v-model="KCDDModel.KCDD_NAME"></el-input>
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
  GetKCDDInfo,
  CreateKCDDInfo,
  EditKCDDInfo,
  DelKCDDinfo
} from "@/app_src/api/cangchu/ZDWZ/KCDDWH";
export default {
  name: "KCDDWH",
  data() {
    return {
      listloading: true,
      total: 0,
      temp: {
        limit: 10,
        page: 1,
        KCDD_CODE:'',
        KCDD_NAME: ""
      },
      KCDDModel: {
        KCDD_CODE: "",
        KCDD_NAME: "",
      },
      rules: {
        KCDD_CODE: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        KCDD_NAME: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ]
      },
      fac: [],
      dialogTitle: "",
      show: false
    };
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
      this.KCDDModel= {
        KCDD_CODE: "",
        KCDD_NAME: "",
      }
    },
    GetList() {
      GetKCDDInfo(this.temp).then(response => {
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
        this.$refs["KCDDModel"].clearValidate();
      });
      this.reset();
      this.dialogTitle = "新建地点信息";
    },
    Edit(data) {
      this.show = true;
      this.$nextTick(() => {
        this.$refs["KCDDModel"].clearValidate();
      });
      this.KCDDModel = Object.assign({}, data);

      this.dialogTitle = "修改地点信息";
    },
    del(data) {
      this.$confirm("您确定要删除此项信息吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        DelKCDDinfo(data).then(response => {
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
      this.$refs["KCDDModel"].validate(valid => {
        if (valid) {
          if (this.dialogTitle == "新建地点信息") {
            CreateKCDDInfo(this.KCDDModel).then(response => {
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
            EditKCDDInfo(this.KCDDModel).then(response => {
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
    handleFilter(){
      this.temp.page=1;
      this.GetList();
    },
    handleSizeChange(val) {
      this.temp.limit=val;
      this.GetList();
    },
    handleCurrentChange(val) {
      this.temp.page=val;
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


