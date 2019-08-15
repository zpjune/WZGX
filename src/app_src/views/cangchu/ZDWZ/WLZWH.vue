<template>
  <div id="WLZWH" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input
          placeholder="请输入物料编码"
          style="width:95%;"
          size="mini"
          v-model="temp.WLZCODE"
          clearable
        ></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input
          placeholder="请输入物料名称"
          style="width:95%;"
          size="mini"
          clearable
          v-model="temp.WLZNAME"
        ></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-button type="primary" icon="el-icon-search" size="mini">查询</el-button>
        <el-button type="primary" icon="el-icon-document" size="mini">导出</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="18">
        <el-table
          :data="goods"
          row-key="flagID"
          lazy
          :load="load"
          :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
          border
          size="mini"
          :header-cell-class-name="tableRowClassName"
          v-loading="listloading"
          element-loading-text="给我一点时间"
          fit
          highlight-current-row
          empty-text="空"
        >
          <el-table-column label="大类编码" prop="DLCODE" width="120px"></el-table-column>
          <el-table-column label="大类名称" prop="DLNAME"></el-table-column>
          <el-table-column label="中类编码" prop="ZLCODE"></el-table-column>
          <el-table-column label="中类名称" prop="ZLNAME"></el-table-column>
          <el-table-column label="小类编码" prop="XLCODE"></el-table-column>
          <el-table-column label="小类名称" prop="XLNAME"></el-table-column>
          <el-table-column label="物料编码" prop="PMCODE"></el-table-column>
          <el-table-column label="物料名称" prop="PMNAME"></el-table-column>
          <el-table-column label="型号规格规范" prop="XHGGGF" width="120px"></el-table-column>
          <el-table-column label="基本计量单位" prop="JBJLDW" width="120px"></el-table-column>
          <!-- <el-table-column label="属性名称1" prop="SX1MC"></el-table-column>
          <el-table-column label="属性单位1" prop="SX1DW"></el-table-column>
          <el-table-column label="属性名称2" prop="SX2MC"></el-table-column>
          <el-table-column label="属性单位2" prop="SX2DW"></el-table-column>
          <el-table-column label="属性名称3" prop="SX3MC"></el-table-column>
          <el-table-column label="属性单位3" prop="SX3DW"></el-table-column>
          <el-table-column label="属性名称4" prop="SX4MC"></el-table-column>
          <el-table-column label="属性单位4" prop="SX4DW"></el-table-column>
          <el-table-column label="属性名称5" prop="SX1MC"></el-table-column>
          <el-table-column label="属性单位5" prop="SX5DW"></el-table-column>
          <el-table-column label="属性名称6" prop="SX6MC"></el-table-column>
          <el-table-column label="属性单位6" prop="SX6DW"></el-table-column>
          <el-table-column label="属性名称7" prop="SX7MC"></el-table-column>
          <el-table-column label="属性单位7" prop="SX7DW"></el-table-column>
          <el-table-column label="属性名称8" prop="SX8MC"></el-table-column>
          <el-table-column label="属性单位8" prop="SX8DW"></el-table-column>
          <el-table-column label="属性名称9" prop="SX9MC"></el-table-column>
          <el-table-column label="属性单位9" prop="SX9DW"></el-table-column>
          <el-table-column label="属性名称10" prop="SX01MC" width="120px"></el-table-column>
          <el-table-column label="属性单位10" prop="SX10DW" width="120px"></el-table-column>-->
          <el-table-column label="操作" fixed="right" width="150px">
            <template slot-scope="scope">
              <div v-if="scope.row.PMCODE!=null&&scope.row.PMCODE.length>6">
                <el-button type="primary" size="small" @click="editNode(scope.row)">编辑</el-button>
                <el-button type="danger" size="small" @click="delNode(scope.row)">删除</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>

        <el-dialog :visible.sync="show" :title="dialogTitle">
          <el-card>
            <el-form label-width="100px">
              <el-form-item label="修改类型">
                <el-radio
                  v-for="(item,key) in editOptions"
                  :label="item.label"
                  :value="item.value"
                  :key="key"
                  v-model="type"
                ></el-radio>
                <el-check-group v-model="checkList">
                  <el-checkbox  v-for="(item,key) in editOptions" :key=key :label="item.lable"></el-checkbox>
                </el-check-group>
              </el-form-item>
              <el-form-item label="大类名称">
                <el-input v-model="WLZModule.DLNAME"></el-input>
              </el-form-item>
              <el-form-item label="中类名称">
                <el-input v-model="WLZModule.ZLNAME"></el-input>
              </el-form-item>
              <el-form-item label="小类名称">
                <el-input v-model="WLZModule.XLNAME"></el-input>
              </el-form-item>
              <el-form-item label="小类名称">
                <el-input v-model="WLZModule.XLNAME"></el-input>
              </el-form-item>
            </el-form>
          </el-card>
        </el-dialog>

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
import {
  GetParentWLZList,
  GetChildrenWLZList,
  editNode,
  getOptions,
  createNode,
  delNode
} from "@/app_src/api/cangchu/ZDWZ/WLZWH";
export default {
  name: "WLZWH",

  data() {
    return {
      listloading: false,
      show: false,
      dialogTitle: "",
      type:0,
      goods: [],
      temp: {
        WLZCODE: "",
        WLZNAME: "",
        limit: 10,
        page: 1
      },
      WLZModule: {
        DLCODE: "",
        DLNAME: "",
        ZLNAME: "",
        ZLCODE: "",
        XLCODE: "",
        XLNAME: "",
        PMCODE: "",
        PMNAME: "",
        XHGGGF: "",
        JBJLDW: ""
      },
      editOptions: [
        { label: "大类", value: 0 },
        { label: "中类", value: 1 },
        { label: "小类", value: 2 }
      ],
      checkList:[],
      DLOptions: [],
      ZLOptions: [],
      ZLOptions: []
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
    GetList() {
      GetParentWLZList(this.temp).then(response => {
        if (response.data.code === 2000) {
          this.goods = response.data.items;
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
    load(tree, treeNode, resolve) {
      let arr = [];
      let temp = {
        DLCODE: tree.DLCODE,
        ZLCODE: tree.ZLCODE,
        XLCODE: tree.XLCODE,
        level: treeNode.level
      };
      GetChildrenWLZList(temp).then(response => {
        arr = response.data;
        console.log(arr);
        resolve(arr);
      });
    },
    createNode() {
      this.dialogTitle = "创建节点";
      this.show = true;
      this.reset();
      this.getOptions();
    },
    editNode(data) {
      this.dialogTitle = "修改节点";
      this.show = true;
      this.getOptions();
    },
    reset() {
      this.WLZModule = {
        DLCODE: "",
        DLNAME: "",
        ZLNAME: "",
        ZLCODE: "",
        XLCODE: "",
        XLNAME: "",
        PMCODE: "",
        PMNAME: "",
        XHGGGF: "",
        JBJLDW: ""
      };
    },
    submit() {
      if (this.dialogTitle == "创建节点") {
        createNode(this.WLZModule).then(response => {
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
      } else {
        this.$confirm("您确认删除此节点吗?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            editNode(this.WLZModule).then(response => {
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
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      }
    },
    delNode(data) {
      delNode(data.ID).then(response => {
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
    },
    getOptions() {
      getOptions().then(response => {
        if (response.data.code === 2000) {
          this.DLOptions = response.data.DLOptions;
          this.ZLOptions = response.data.ZLOptions;
          this.XLOptions = response.data.XLOptions;
        }
      });
    },
    handleSizeChange() {},
    handleCurrentChange() {},
    createRandomData() {}
  },
  mounted() {
    this.GetList();
  }
};
</script>



<style lang="scss" scoped>
</style>


