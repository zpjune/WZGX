<template>
  <div id="BGYWH" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input
          placeholder="请输入保管员姓名"
          style="width:95%;"
          size="mini"
          clearable
          v-model="temp.DW_NAME"
        ></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input
          placeholder="请输入保管员编码"
          style="width:95%;"
          size="mini"
          clearable
          v-model="temp.DW_CODE"
        ></el-input>
      </el-col>

      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <treeselect
          placeholder="请选择单位"
          :options="options"
          :normalizer="normalizer"
          :loadOptions="loadOptions"
          v-model="temp.WORKER_DP"
          :disable-branch-nodes="true"
          :show-count="true"
        />
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="4">
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
          <el-table-column label="保管员编码" prop="WORKER_CODE"></el-table-column>
          <el-table-column label="保管员姓名" prop="WORKER_NAME"></el-table-column>
          <el-table-column label="单位工厂" prop="DW_NAME"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="primary" @click="Edit(scope.row)" size="mini">编辑</el-button>
              <el-button type="danger" @click="del(scope.row)" size="mini">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-dialog :visible.sync="show" :title="dialogTitle" width="30%">
          <el-card>
            <el-form :model="BGYModel" :rules="rules" label-width="100px" ref="BGYModel">
              <el-form-item label="保管员编码" prop="WORKER_CODE">
                <el-input v-model="BGYModel.WORKER_CODE" :disabled="dialogTitle=='修改工厂信息'"></el-input>
              </el-form-item>
              <el-form-item label="保管员名称" prop="WORKER_NAME">
                <el-input v-model="BGYModel.WORKER_NAME"></el-input>
              </el-form-item>
              <el-form-item label="单位" prop="WORKER_DP">
                <treeselect
                  placeholder="请选择单位"
                  :options="options"
                  :normalizer="normalizer"
                  :loadOptions="loadOptions"
                  v-model="BGYModel.WORKER_DP"
                  :disable-branch-nodes="true"
                  :show-count="true"
                />
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
  GetBGYInfo,
  CreateBGYInfo,
  EditBGYInfo,
  DelBGYInfo,
  GetGCInfo
} from "@/app_src/api/cangchu/ZDWZ/BGYWH";
import { Treeselect, LOAD_CHILDREN_OPTIONS } from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
export default {
  name: "BGYWH",
  components: {
    Treeselect
  },

  data() {
    return {
      listloading: true,
      total: 0,
      temp: {
        limit: 10,
        page: 1,
        WORKER_CODE: "",
        WORKER_NAME: "",
        GC_CODE:null,
        WORKER_DP: null
      },
      BGYModel: {
        WORKER_CODE: "",
        WORKER_NAME: "",
        GC_CODE:null,
        WORKER_DP: null
      },
      rules: {
        WORKER_CODE: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        WORKER_NAME: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        WORKER_DP: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ]
      },
      fac: [],
      dialogTitle: "",
      options: [],
      show: false,
      normalizer(node, instanceId) {
        return {
          id: node.DW_CODE,
          label: node.DW_NAME,
          children: node.Children
        };
      }
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
      this.BGYModel = {
        WORKER_CODE: "",
        WORKER_NAME: "",
        WORKER_DP: null,
        GC_CODE:null,
      };
    },
    loadOptions({ action, parentNode, callback }) {
      if (action === LOAD_CHILDREN_OPTIONS) {
        if (parentNode.Children == null) {
          parentNode.Children = undefined;
          callback();
        }
      }
    },
    // SearchSelect(node, instanceId){
    //   this.temp.WORKER_DP=node.DW_NAME;
    // },
    // FormSelect(node, instanceId){
    //   this.BGYModel.WORKER_DP=node.DW_NAME;
    // },
    GetList() {
      GetBGYInfo(this.temp).then(response => {
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
      this.dialogTitle = "新建工厂信息";
      this.$nextTick(() => {
        this.$refs["BGYModel"].clearValidate();
      });
      this.reset();
    },
    Edit(data) {
      this.BGYModel = Object.assign({}, data);
      this.show = true;
      this.dialogTitle = "修改工厂信息";
      this.$nextTick(() => {
        this.$refs["BGYModel"].clearValidate();
      });
    },
    del(data) {
      this.$confirm("您确定要删除此项信息吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        DelBGYInfo(data).then(response => {
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
      console.log(this.BGYModel);
      this.$refs["BGYModel"].validate(valid => {
        if (valid) {
          if (this.dialogTitle == "新建工厂信息") {
            CreateBGYInfo(this.BGYModel).then(response => {
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
            EditBGYInfo(this.BGYModel).then(response => {
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
    GetOptions() {
      GetGCInfo().then(response => {
        if (response.data.code === 2000) {
          this.options = response.data.items;
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
    this.GetOptions();
  }
};
</script>



<style lang="scss" >
.vue-treeselect__control {
  height: 28px !important;
  width: 100%;
}
.vue-treeselect__placeholder,
.vue-treeselect__single-value {
  line-height: 28px;
}
</style>


