<template>
  <div id="JJRK" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input
          placeholder="编码"
          style="width:95%;"
          size="mini"
          clearable
          v-model="listQuery.CODE"
        ></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input
          placeholder="物料编码"
          style="width:95%;"
          size="mini"
          clearable
          v-model="listQuery.MATNR"
        ></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input
          placeholder="请输入物料描述"
          style="width:95%;"
          size="mini"
          clearable
          v-model="listQuery.MATNX"
        ></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-button type="primary" icon="el-icon-search" size="mini" @click="getList">查询</el-button>
        <el-button type="primary" icon="el-icon-zoom-in" size="mini" @click="create">新建</el-button>
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
          style="width: 100%"
        >
          <el-table-column label="编码" prop="CODE" fixed="left"></el-table-column>
          <el-table-column label="申请单位" prop="ORG_SHORT_NAME" width="80" fixed="left"></el-table-column>
          <el-table-column label="物料编码" prop="MATNR" fixed="left" width="150"></el-table-column>
          <el-table-column label="物料描述" prop="MATNX"></el-table-column>
          <el-table-column label="计量数量" prop="MEINS"></el-table-column>
          <el-table-column label="入库数量" prop="RKNUMBER"></el-table-column>
          <el-table-column label="单价" prop="PRICE"></el-table-column>
          <el-table-column label="总价" prop="TOTALPRICE"></el-table-column>
          <!-- <el-table-column label="入库时间" width="100">
            <template slot-scope="scope">{{scope.row.RK_TIME|change}}</template>
          </el-table-column>-->
          <!-- <el-table-column label="实际数量" prop="RKNUMBER1"></el-table-column>
          <el-table-column label="实际金额" prop="TOTALPRICE1"></el-table-column>-->
          <el-table-column label="入库原因" prop="NAME" width="220px"></el-table-column>
          <!-- <el-table-column label="责任单位" prop="ZRDW"></el-table-column>
          <el-table-column label="责任人" prop="ZRR"></el-table-column>
          <el-table-column label="审批意见" prop="SUGGESTION"></el-table-column>
          <el-table-column label="关闭时间" width="100">
            <template slot-scope="scope">{{scope.row.CLOSE_TIME|change}}</template>
          </el-table-column>-->
          <el-table-column label="供应商" prop="GYS"></el-table-column>
          <el-table-column label="库存地点" prop="KCDD_NAME" width="150"></el-table-column>
          <el-table-column label="制单人" prop="USER_NAME" width="150"></el-table-column>
          <el-table-column label="操作" width="190">
            <template slot-scope="scope">
              <el-button
                type="info"
                @click="startProcess(scope.row)"
                size="mini"
                v-if="scope.row.APPROVAL_STATUS===0"
              >送审</el-button>
              <el-button
                type="primary"
                @click="update(scope.row)"
                size="mini"
                v-if="scope.row.APPROVAL_STATUS===0"
              >编辑</el-button>
              <el-button
                type="danger"
                @click="del(scope.row)"
                size="mini"
                v-if="scope.row.APPROVAL_STATUS===0"
              >删除</el-button>
              <el-button
                type="warning"
                @click="recall(scope.row)"
                size="mini"
                v-if="scope.row.APPROVAL_STATUS===1"
              >撤回</el-button>
              <!-- <el-button
                type="warning"
                @click="CancelRK(scope.row)"
                size="mini"
                v-if="scope.row.APPROVAL_STATUS===2"
              >入库取消</el-button>-->
              <span v-if="scope.row.APPROVAL_STATUS===2">等待保管员操作...</span>
              <span v-if="scope.row.APPROVAL_STATUS===3">此出库单已被驳回，无法操作</span>
              <span v-if="scope.row.APPROVAL_STATUS===4">业务已完成,无法操作本条数据</span>
            </template>
          </el-table-column>
        </el-table>
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
    <el-dialog :visible.sync="show" :title="title" width="70%">
      <el-card>
        <el-form :model="temp" :rules="rules" label-width="120px" ref="dataform">
          <el-row>
            <el-col :span="24" style="text-align:center;">
              <span>中国石油大港油田物资供销公司</span>
            </el-col>
            <el-col
              :span="24"
              style="text-align:center; font-size:20px;font-weight:bold;margin-top:10px;"
            >
              <span>紧急入库单</span>
            </el-col>
          </el-row>
          <el-row style="margin-top:10px;">
            <el-col :span="6">
              <el-form-item label="单据编码">
                <el-input v-model="temp.CODE" disabled placeholder="系统自动生成，无需填写"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="制单日期">
                <el-input v-model="currentTime" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="制单人">
                <el-input v-model="username" disabled style="width:45%"></el-input>
              </el-form-item>
            </el-col>
            <el-row>
              <el-col :span="6">
                <el-form-item label="申请单位" prop="DW_CODE">
                  <!-- <el-select v-model="temp.DW_CODE">
                  <el-option
                    v-for="(item,key) in OrgOptions"
                    :key="key"
                    :label="item.ORG_SHORT_NAME"
                    :value="item.ORG_CODE"
                  ></el-option>
                  </el-select>-->
                  <treeselect
                    v-model="temp.DW_CODE"
                    :multiple="false"
                    :options="roleTree"
                    :load-options="loadOptions"
                    :loadOptions="loadOptions"
                    placeholder="请选择部门"
                    :normalizer="normalizer"
                    :disable-branch-nodes="false"
                    noResultsText="未搜索到结果"
                    noChildrenText=" "
                    style="font-size:14px; width:100%;"
                    @select="getNode"
                    disabled
                  />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="物料编码" prop="MATNR">
                  <el-input v-model="temp.MATNR"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="物料描述" prop="MATNX">
                  <el-input v-model="temp.MATNX"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <el-form-item label="计量单位" prop="MEINS">
                  <el-input v-model="temp.MEINS"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="入库数量" prop="RKNUMBER">
                  <el-input v-model="temp.RKNUMBER"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="单价" prop="PRICE">
                  <el-input v-model="temp.PRICE"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="总金额" prop="TOTALPRICE">
                  <el-input v-model="temp.TOTALPRICE"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="入库地点" prop="KCDD">
                  <el-select v-model="temp.KCDD" style="width:100%">
                    <el-option
                      v-for="(item,key) in KCDDOptions"
                      :key="key"
                      :label="item.KCDD_NAME"
                      :value="item.KCDD_CODE"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="供应商" prop="GYS">
                  <el-input v-model="temp.GYS"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="入库原因" prop="REASON">
                <el-select
                  v-model="temp.REASON"
                  style="width:100%"
                  @change="change"
                  v-if="!inputstatus"
                >
                  <el-option
                    v-for="(item,key) in ReasonOptions"
                    :key="key"
                    :value="item.CODE"
                    :label="item.NAME"
                  ></el-option>
                </el-select>
                <el-input v-model="temp.REASON" v-if="inputstatus"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- <el-row>
            <el-col :span="8">
              <el-form-item label="入库时间" prop="RK_TIME">
                <el-date-picker v-model="temp.RK_TIME" style="width:100%"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="实际数量" prop="RKNUMBER1">
                <el-input v-model="temp.RKNUMBER1"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="实际金额" prop="TOTALPRICE1">
                <el-input v-model="temp.TOTALPRICE1"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="入库原因" prop="REASON">
                <el-select v-model="temp.REASON">
                  <el-option
                    v-for="(item,key) in ReasonOptions"
                    :key="key"
                    :value="item.CODE"
                    :label="item.NAME"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="责任单位" prop="ZRDW">
                <el-input v-model="temp.ZRDW"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="责任人" prop="ZRR">
                <el-input v-model="temp.ZRR"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="关闭日期" prop="CLOSE_TIME">
                <el-date-picker v-model="temp.CLOSE_TIME" style="width:100%"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>-->
          <div style="text-align:center">
            <el-button type="primary" @click="submit">提交</el-button>
            <el-button @click="show=false">取消</el-button>
          </div>
        </el-form>
      </el-card>
    </el-dialog>
  </div>
</template>

<script>
import {
  GetRKInfo,
  GetOrgInfo,
  GetKCDDInfo,
  GetCodeOptions,
  CreateJJRKInfo,
  UpdateJJRKInfo,
  DelJJRKInfo,
  StartProcess,
  Recall,
  CancelRK
} from "@/app_src/api/cangchu/SWKC/JJRK";
import { fetchOrgList } from "@/frame_src/api/org";
import { Treeselect, LOAD_CHILDREN_OPTIONS } from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
export default {
  name: "JJRK",
  components: {
    Treeselect
  },
  data() {
    var validateDecimal = (rule, value, callback) => {
      let reg = /^[0-9]*\.?\d*$/;
      if (!reg.test(value)) {
        return callback(new Error("年龄不能为空"));
      } else {
        callback();
      }
    };
    return {
      listloading: false,
      fac: [],
      listQuery: {
        limit: 10,
        page: 1,
        CODE: "",
        MATNR: "",
        MATNX: "",
        ParentCode: "JJREASON",
        userid: this.$store.state.user.userId,
        type: 0
      },
      total: 0,
      show: false,
      temp: {
        CODE: "",
        ORGID: "",
        DW_CODE: this.$store.state.user.orgCode,
        MATNR: "",
        MATNX: "",
        MEINS: "",
        RKNUMBER: "",
        PRICE: "",
        TOTALPRICE: "",
        RK_TIME: "",
        RKNUMBER1: "",
        TOTALPRICE1: "",
        REASON: "",
        ZRDW: "",
        ZRR: "",
        SUGGESTION: "",
        CLOSE_TIME: "",
        userid: this.$store.state.user.userId,
        GYS: "",
        KCDD: ""
      },
      rules: {
        CODE: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        DW_CODE: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        MATNR: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        MATNX: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        MEINS: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        RKNUMBER: [
          { required: true, message: "此项不能为空！", trigger: "change" },
          {
            validator: validateDecimal,
            message: "请输入正确的值",
            trigger: "change"
          }
        ],
        PRICE: [
          { required: true, message: "此项不能为空！", trigger: "change" },
          {
            validator: validateDecimal,
            message: "请输入正确的值",
            trigger: "change"
          }
        ],
        TOTALPRICE: [
          { required: true, message: "此项不能为空！", trigger: "change" },
          {
            validator: validateDecimal,
            message: "请输入正确的值",
            trigger: "change"
          }
        ],
        RK_TIME: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        RKNUMBER1: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        TOTALPRICE1: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        REASON: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        ZRDW: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        ZRR: [{ required: true, message: "此项不能为空！", trigger: "change" }],
        CLOSE_TIME: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        GYS: [{ required: true, message: "此项不能为空！", trigger: "change" }],
        KCDD: [{ required: true, message: "此项不能为空！", trigger: "change" }]
      },
      ReasonOptions: [],
      OrgOptions: [],
      roleTree: [],
      KCDDOptions: [],
      title: "",
      currentTime: "",
      inputstatus: false,
      username: this.$store.state.user.name,
      normalizer(node) {
        return {
          id: node.orgCode,
          label: node.orgShortName,
          children: node.children
        };
      }
    };
  },
  methods: {
    getList() {
      GetRKInfo(this.listQuery).then(response => {
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
    getOrgInfo() {
      GetOrgInfo().then(response => {
        if (response.data.code === 2000) {
          this.OrgOptions = response.data.items;
        }
      });
    },
    GetKCDDInfo() {
      GetKCDDInfo().then(response => {
        if (response.data.code === 2000) {
          this.KCDDOptions = response.data.items;
        }
      });
    },
    GetCodeOptions() {
      let temp = {
        ParentCode: "JJREASON"
      };
      GetCodeOptions(temp).then(response => {
        if (response.data.code === 2000) {
          this.ReasonOptions = response.data.items;
        }
      });
    },
    submit() {
      this.$refs["dataform"].validate(valid => {
        if (valid) {
          if (this.title === "新建") {
            CreateJJRKInfo(this.temp).then(response => {
              if (response.data.code === 2000) {
                this.$notify({
                  position: "bottom-right",
                  title: "成功",
                  message: response.data.message,
                  type: "success",
                  duration: 2000
                });
                this.show = false;
                this.getList();
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
            UpdateJJRKInfo(this.temp).then(response => {
              if (response.data.code === 2000) {
                this.$notify({
                  position: "bottom-right",
                  title: "成功",
                  message: response.data.message,
                  type: "success",
                  duration: 2000
                });
                this.show = false;
                this.getList();
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
    reset() {
      this.temp = {
        CODE: "",
        DW_CODE: this.$store.state.user.orgCode,
        MATNR: "",
        MATNX: "",
        MEINS: "",
        RKNUMBER: "",
        PRICE: "",
        TOTALPRICE: "",
        RK_TIME: "",
        RKNUMBER1: "",
        TOTALPRICE1: "",
        REASON: "",
        ZRDW: "",
        ZRR: "",
        SUGGESTION: "",
        CLOSE_TIME: "",
        userid: this.$store.state.user.userId,
        GYS: "",
        KCDD: ""
      };
    },
    create() {
      this.show = true;
      this.inputstatus = false;
      this.title = "新建";
      this.$nextTick(() => {
        this.$refs["dataform"].clearValidate();
      });
      this.reset();
      this.temp.KCDD = "";
      let temp = {
        orgCode: this.temp.DW_CODE
      };
      GetKCDDInfo(temp).then(response => {
        if (response.data.code === 2000) {
          this.KCDDOptions = response.data.items;
        }
      });
    },
    update(data) {
      this.temp = Object.assign({}, data);
      this.temp.userid = this.$store.state.user.userId;
      console.log(this.temp);
      this.show = true;
      this.title = "修改";
      this.$nextTick(() => {
        this.$refs["dataform"].clearValidate();
      });
      let temp = {
        orgCode: this.temp.DW_CODE
      };
      GetKCDDInfo(temp).then(response => {
        if (response.data.code === 2000) {
          this.KCDDOptions = response.data.items;
        }
      });
      if (this.ReasonOptions.findIndex(t => t.CODE === data.REASON) === -1) {
        this.inputstatus = true;
      } else {
        this.inputstatus = false;
      }
    },
    del(data) {
      this.$confirm("您确定要删除此项信息吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        DelJJRKInfo(data).then(response => {
          if (response.data.code === 2000) {
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
              type: "error",
              duration: 2000
            });
          }
        });
      });
    },
    startProcess(data) {
      StartProcess(data).then(response => {
        if (response.data.code === 2000) {
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
            type: "error",
            duration: 2000
          });
        }
      });
    },
    recall(data) {
      this.$confirm("您确定撤回此流程吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        Recall(data).then(response => {
          if (response.data.code === 2000) {
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
              type: "error",
              duration: 2000
            });
          }
        });
      });
    },
    CancelRK(data) {
      this.$confirm("您确定ERP中是否已经录入了本入库单的信息?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        CancelRK(data).then(response => {
          if (response.data.code === 2000) {
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
              type: "error",
              duration: 2000
            });
          }
        });
      });
    },
    load() {
      // 查询组织结构数据this.treeListQuery
      fetchOrgList().then(response => {
        if (response.data.code === 2000) {
          this.roleTree = [];
          this.roleTree = response.data.items;
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
      // this.roleTree.push(...defaultValue.roleList);
    },
    loadOptions({ action, parentNode, callback }) {
      if (action === LOAD_CHILDREN_OPTIONS) {
        if (parentNode.children == null) {
          parentNode.children = undefined;
          callback();
        }
      }
    },
    change(data) {
      if (
        this.ReasonOptions.findIndex(t => t.CODE === data) ===
        this.ReasonOptions.length - 1
      ) {
        this.temp.REASON = "";
        this.inputstatus = true;
      } else {
        this.inputstatus = false;
      }
    },
    getNode(node, instanceId) {
      this.temp.KCDD = "";
      let temp = {
        orgCode: node.orgCode
      };
      GetKCDDInfo(temp).then(response => {
        if (response.data.code === 2000) {
          this.KCDDOptions = response.data.items;
        }
      });
    },
    tableRowClassName({ row, rowIndex }) {
      // 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。
      if (rowIndex === 0) {
        return "el-button--primary is-active"; // 'warning-row'
      } // 'el-button--primary is-plain'// 'warning-row'
      return "";
    },
    handleSizeChange(val) {
      this.listQuery.limit = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.listQuery.page = val;
      this.getList();
    },
    getTime() {
      let date = new Date();
      let year = date.getFullYear();

      //由于js的月份是从0开始的,所以月份加上1
      let month = date.getMonth() + 1;

      //返回的是一个月中的某一天1-31
      let myDate = date.getDate();

      //返回的是一个星期中的某一天0-6,0是一个星期的第一天星期天
      let myDay = date.getDay();

      //获取24小时格式的小时
      let hours = date.getHours();
      let map1 = [1, 2, 3, 4, 5, 6, 7];
      let map2 = ["一", "二", "三", "四", "五", "六", "日"];
      let realDay = "";
      if (myDay === 0) {
        realDay = map2[6];
      } else {
        realDay = map2[map1.findIndex(t => t === myDay)];
      }
      this.currentTime = year + "年" + month + "月" + myDate + "日";
    }
  },
  filters: {
    change(val) {
      if (val === null || val === "") {
        return val;
      } else {
        return val.substring(0, 10);
      }
    }
  },
  mounted() {
    this.getTime();
    this.getList();
    //this.getOrgInfo();
    //this.GetKCDDInfo();
    this.load();
    this.GetCodeOptions();
  }
};
</script>



<style lang="scss" scoped>
</style>


