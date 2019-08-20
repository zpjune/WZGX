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
        <el-button type="primary" icon="el-icon-zoom-in" size="mini" @click="createNode">新建</el-button>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleFilter">查询</el-button>
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
              <div v-if="!scope.row.hasChildren">
                <el-button type="primary" size="small" @click="editNode(scope.row)">编辑</el-button>
                <el-button type="danger" size="small" @click="delNode(scope.row)">删除</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>

        <el-dialog :visible.sync="show" :title="dialogTitle" width="30%">
          <el-card>
            <el-form label-width="110px" :model="WLZModule" ref="WLZModule" :rules="rules">
              <el-form-item label="类别是否存在">
                <!-- <el-radio
                  v-for="(item,key) in editOptions"
                  :label="item.label"
                  :value="item.value"
                  :key="key"
                  v-model="type"
                ></el-radio>-->
                <el-checkbox-group v-model="checkList" @change="CheckGroup">
                  <el-checkbox v-for="(item,key) in editOptions" :key="key" :label="item.label"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <div v-show="selectOptionsFlag[0]==='1'">
                <el-form-item label="大类名称" prop="DLCODE">
                  <el-select v-model="WLZModule.DLCODE" style="width:100%" @change="ChangeZL">
                    <el-option
                      v-for="(item,key) in DLOptions"
                      :key="key"
                      :label="item.DLNAME"
                      :value="item.DLCODE"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div v-show="selectOptionsFlag[0]==='0'">
                <el-form-item label="大类名称" prop="DLNAME">
                  <el-input v-model="WLZModule.DLNAME"></el-input>
                </el-form-item>
                <el-form-item label="大类编码" prop="DLCODE">
                  <el-input v-model="WLZModule.DLCODE"></el-input>
                </el-form-item>
              </div>

              <div v-show="selectOptionsFlag[1]==='1'">
                <el-form-item label="中类名称" prop="ZLCODE">
                  <el-select v-model="WLZModule.ZLCODE" style="width:100%" @change="ChangeXL">
                    <el-option
                      v-for="(item,key) in ZLOptions"
                      :key="key"
                      :label="item.ZLNAME"
                      :value="item.ZLCODE"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div v-show="selectOptionsFlag[1]==='0'">
                <el-form-item label="中类名称" prop="ZLNAME">
                  <el-input v-model="WLZModule.ZLNAME"></el-input>
                </el-form-item>
                <el-form-item label="中类编码" prop="ZLCODE">
                  <el-input v-model="WLZModule.ZLCODE"></el-input>
                </el-form-item>
              </div>

              <div v-show="selectOptionsFlag[2]==='1'">
                <el-form-item label="小类名称" prop="XLCODE">
                  <el-select v-model="WLZModule.XLCODE" style="width:100%" @change="ChangeXXL">
                    <el-option
                      v-for="(item,key) in XLOptions"
                      :key="key"
                      :label="item.XLNAME"
                      :value="item.XLCODE"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div v-show="selectOptionsFlag[2]==='0'">
                <el-form-item label="小类名称" prop="XLNAME">
                  <el-input v-model="WLZModule.XLNAME"></el-input>
                </el-form-item>
                <el-form-item label="小类编码" prop="XLCODE">
                  <el-input v-model="WLZModule.XLCODE"></el-input>
                </el-form-item>
              </div>
              <el-form-item label="品名" prop="PMNAME">
                <el-input v-model="WLZModule.PMNAME"></el-input>
              </el-form-item>
              <el-form-item label="品名编码" prop="PMCODE">
                <el-input v-model="WLZModule.PMCODE"></el-input>
              </el-form-item>
              <el-form-item label="型号规格规范" prop="XHGGGF">
                <el-input v-model="WLZModule.XHGGGF"></el-input>
              </el-form-item>
              <el-form-item label="基本计量单位" prop="JBJLDW">
                <el-input v-model="WLZModule.JBJLDW"></el-input>
              </el-form-item>
              <div style="text-align:center">
                <el-button type="primary" size="mini" @click="submit">提交</el-button>
                <el-button type="primary" size="mini" @click="show=false">取消</el-button>
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
          :page-size="1"
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
  GetParentWLZList,
  GetChildrenWLZList,
  editNode,
  getDLOptions,
  getZLOptions,
  getXLOptions,
  createNode,
  delNode
} from "@/app_src/api/cangchu/ZDWZ/WLZWH";
export default {
  name: "WLZWH",

  data() {
    return {
      listloading: true,
      show: false,
      dialogTitle: "",
      type: 0,
      total: 0,
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
      rules: {
        DLCODE: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        DLNAME: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        ZLNAME: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        ZLCODE: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        XLCODE: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        XLNAME: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        PMCODE: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        PMNAME: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        XHGGGF: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        JBJLDW: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ]
      },
      editOptions: [
        { label: "大类", value: 0 },
        { label: "中类", value: 1 },
        { label: "小类", value: 2 }
      ],
      checkList: ["大类", "中类", "小类"],
      selectOptionsFlag: "111",
      DLOptions: [],
      ZLOptions: [],
      XLOptions: []
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
    load(tree, treeNode, resolve) {
      let arr = [];
      let temp = {
        DLCODE: tree.DLCODE,
        ZLCODE: tree.ZLCODE,
        XLCODE: tree.XLCODE,
        FlagID: tree.flagID,
        level: treeNode.level
      };
      GetChildrenWLZList(temp).then(response => {
        arr = response.data;
        resolve(arr);
      });
    },
    createNode() {
      this.dialogTitle = "创建节点";
      this.show = true;
      this.$nextTick(() => {
        this.$refs["WLZModule"].clearValidate();
      });
      this.reset();
      this.getDLOptions();
    },
    editNode(data) {
      this.dialogTitle = "修改节点";
      this.show = true;
      this.WLZModule = Object.assign({}, data);
      this.$nextTick(() => {
        this.$refs["WLZModule"].clearValidate();
      });
      this.getDLOptions();
      this.getZLOptions();
      this.getXLOptions();
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
    CheckGroup() {
      let a = 0b001;
      let b = 0b010;
      let c = 0b100;
      let flag = 0;
      this.checkList.forEach(item => {
        if (item === "大类") {
          flag += c;
        }
        if (item === "中类") {
          flag += b;
        }
        if (item === "小类") {
          flag += a;
        }
      });
      this.selectOptionsFlag = flag.toString(2);
      while (this.selectOptionsFlag.length < 3) {
        this.selectOptionsFlag = "0" + this.selectOptionsFlag;
      }
      console.log(this.selectOptionsFlag);
    },
    submit() {
      this.$refs["WLZModule"].validate(valid => {
        if (valid) {
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
            editNode(this.WLZModule).then(response => {
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
    delNode(data) {
      this.$confirm("您确认删除此节点吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let temp = {
            ID: data.ID
          };
          delNode(temp).then(response => {
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
    },
    getDLOptions() {
      getDLOptions().then(response => {
        if (response.data.code === 2000) {
          this.DLOptions = response.data.DLOptions;
          //this.ZLOptions = response.data.ZLOptions;
          //this.XLOptions = response.data.XLOptions;
        }
      });
    },
    getZLOptions() {
      let temp = {
        DLCODE: this.WLZModule.DLCODE
      };
      getZLOptions(temp).then(response => {
        console.log(1);
        if (response.data.code === 2000) {
          this.ZLOptions = response.data.ZLOptions;
        }
      });
    },
    getXLOptions() {
      let temp = {
        DLCODE: this.WLZModule.DLCODE,
        ZLCODE: this.WLZModule.ZLCODE
      };
      getXLOptions(temp).then(response => {
        if (response.data.code === 2000) {
          this.XLOptions = response.data.XLOptions;
        }
      });
    },
    ChangeZL(data) {
      this.getZLOptions();
      this.DLOptions.forEach(item => {
        if (item.DLCODE === data) {
          this.WLZModule.DLNAME = item.DLNAME;
        }
      });
    },
    ChangeXL(data) {
      this.getXLOptions();
      this.ZLOptions.forEach(item => {
        if (item.ZLCODE === data) {
          this.WLZModule.ZLNAME = item.ZLNAME;
        }
      });
    },
    ChangeXXL(data) {
      this.XLOptions.forEach(item => {
        if (item.XLCODE === data) {
          this.WLZModule.XLNAME = item.XLNAME;
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
    },
    createRandomData() {}
  },
  mounted() {
    this.GetList();
  }
};
</script>



<style lang="scss" scoped>
</style>


