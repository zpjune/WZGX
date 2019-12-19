<template>
  <div id="JJRKSP" class="app-container calendar-list-container">
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
          <el-table-column label="编码" prop="CODE" fixed="left" width="150"></el-table-column>
          <el-table-column label="申请单位" prop="ORG_SHORT_NAME" width="250" fixed="left"></el-table-column>
          <el-table-column label="物料编码" fixed="left" width="150">
            <template slot-scope="scope">{{scope.row.MATNR|substringWLCODE}}</template>
          </el-table-column>
          <el-table-column label="物料描述" prop="MATNX" width="400"></el-table-column>
          <el-table-column label="计量单位" prop="MEINS"></el-table-column>
          <el-table-column label="入库数量" prop="RKNUMBER"></el-table-column>
          <el-table-column label="单价" prop="PRICE"></el-table-column>
          <el-table-column label="总价" prop="TOTALPRICE"></el-table-column>
          <!-- <el-table-column label="入库时间" width="100">
            <template slot-scope="scope">{{scope.row.RK_TIME|change}}</template>
          </el-table-column>-->
          <!-- <el-table-column label="实际数量" prop="RKNUMBER1"></el-table-column>
          <el-table-column label="实际金额" prop="TOTALPRICE1"></el-table-column>-->
          <el-table-column label="入库原因" prop="NAME" width="250px"></el-table-column>
          <!-- <el-table-column label="责任单位" prop="ZRDW"></el-table-column>
          <el-table-column label="责任人" prop="ZRR"></el-table-column>
          <el-table-column label="审批意见" prop="SUGGESTION"></el-table-column>
          <el-table-column label="关闭时间" width="100">
            <template slot-scope="scope">{{scope.row.CLOSE_TIME|change}}</template>
          </el-table-column>-->
          <el-table-column label="供应商" prop="GYS"></el-table-column>
          <el-table-column label="库存地点" prop="KCDD_NAME" width="150"></el-table-column>
          <el-table-column label="制单人" prop="USER_NAME" width="100"></el-table-column>
          <el-table-column label="操作" width="150">
            <template slot-scope="scope">
              <el-button type="primary" @click="update(scope.row)" size="mini">审批</el-button>
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
                <el-input v-model="temp.CREATEDATE" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="制单人">
                <el-input v-model="temp.USER_NAME" disabled></el-input>
              </el-form-item>
            </el-col>
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
            <el-row>
              <el-col :span="6">
                <el-form-item label="物料组" prop="MATKL">
                  <el-input v-model="temp.MATKL" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="物料编码" prop="MATNR">
                  <el-input v-model="temp.MATNR" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="2">
                <el-button type="primary" @click="getWL" style="margin-left:60px;" disabled>请选择物料</el-button>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="物料描述" prop="MATNX">
                  <el-input v-model="temp.MATNX" disabled type="textarea" :rows="2"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <el-form-item label="计量单位" prop="MEINS">
                  <el-input v-model="temp.MEINS" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="入库数量" prop="RKNUMBER">
                  <el-input v-model="temp.RKNUMBER" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="单价" prop="PRICE">
                  <el-input v-model="temp.PRICE" disabled></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="总金额" prop="TOTALPRICE">
                  <el-input v-model="temp.TOTALPRICE" disabled></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="入库地点" prop="KCDD">
                  <el-select v-model="temp.KCDD" style="width:100%" disabled>
                    <el-option
                      v-for="(item,key) in KCDDOptions"
                      :key="key"
                      :label="item.KCDD_NAME+'-'+item.KCDD_CODE"
                      :value="item.KCDD_CODE"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="供应商" prop="GYS">
                  <el-input v-model="temp.GYS" disabled></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="入库原因" prop="REASON">
                <el-select v-model="temp.REASON" style="width:100%" @change="change" disabled>
                  <el-option
                    v-for="(item,key) in ReasonOptions"
                    :key="key"
                    :value="item.CODE"
                    :label="item.NAME"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="24" v-if="inputstatus">
              <el-form-item label="其他入库原因" prop="OTHERREASON">
                <el-input v-model="temp.OTHERREASON" v-if="inputstatus" disabled></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <div style="text-align:center">
            <el-button type="primary" @click="agree">同意</el-button>
            <el-button type="danger" @click="disagree">驳回</el-button>
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
  Approval
} from "@/app_src/api/cangchu/SWKC/JJRK";
import { fetchOrgList } from "@/frame_src/api/org";
import { Treeselect, LOAD_CHILDREN_OPTIONS } from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
export default {
  name: "JJRKSP",
  components: {
    Treeselect
  },
  data() {
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
        type: 1,
        SortType: 1, //默认倒叙
        GroupType: 0 //默认按照单号
      },
      total: 0,
      show: false,
      temp: {
        CODE: "",
        DW_CODE: "",
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
        USER_NAME: "",
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
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        PRICE: [
          { required: true, message: "此项不能为空！", trigger: "change" }
        ],
        TOTALPRICE: [
          { required: true, message: "此项不能为空！", trigger: "change" }
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
      KCDDOptions: [],
      title: "",
      roleTree: [],
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

    reset() {
      this.temp = {
        CODE: "",
        DW_CODE: "",
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
        USER_NAME: "",
        GYS: "",
        KCDD: "",
        APPROVAL_STATUS: ""
      };
    },
    update(data) {
      this.reset();
      this.temp = Object.assign({}, data);
      this.temp.userid = this.$store.state.user.userId;
      this.show = true;
      this.title = "审批";
      this.$nextTick(() => {
        this.$refs["dataform"].clearValidate();
      });
      if (
        this.ReasonOptions.findIndex(t => t.CODE === data.REASON) ===
        this.ReasonOptions.length - 1
      ) {
        this.inputstatus = true;
      } else {
        this.inputstatus = false;
      }
    },
    agree() {
      this.temp.APPROVAL_STATUS = 2;
      this.Approval();
    },
    disagree() {
      this.temp.APPROVAL_STATUS = 3;
      this.Approval();
    },
    Approval() {
      Approval(this.temp).then(response => {
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
    getNode(node, instanceId) {
      this.temp.orgName = node.orgName;
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
    }
  },
  filters: {
    change(val) {
      if (val === null || val === "") {
        return val;
      } else {
        return val.substring(0, 10);
      }
    },
    substringWLCODE(val) {
      if (val.startsWith("0000000")) {
        return val.substring(7, 18);
      } else {
        return val;
      }
    }
  },
  mounted() {
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


