<template>
  <div id="TotalZDWZCRK" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="2">
        <el-date-picker
          v-model="value2"
          style="width:95%;"
          size="mini"
          type="month"
          placeholder="选择月"
        ></el-date-picker>
      </el-col>
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
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-button type="primary" icon="el-icon-search" size="mini">查询</el-button>
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
          style="width: 100%"
        >
          <el-table-column label="序号" width="70" align="center" prop="non"></el-table-column>
          <el-table-column label="物料组" prop="WLZ"></el-table-column>
          <el-table-column label="物料编码" prop="WLBM"></el-table-column>
          <el-table-column label="物料名称" prop="WLMC"></el-table-column>
          <el-table-column label="规格型号" prop="GGXH"></el-table-column>
          <el-table-column label="计量单位" prop="JLDW"></el-table-column>
          <el-table-column label="最低储备" prop="ZDCB"></el-table-column>
          <el-table-column label="最高储备" prop="ZGCB"></el-table-column>
          <el-table-column label="现有库存" prop="XYKC"></el-table-column>
          <el-table-column label="月度入库" prop="BYRK"></el-table-column>
          <el-table-column label="累计入库" prop="BYRK"></el-table-column>
          <el-table-column label="月度消耗" prop="BYXH"></el-table-column>
          <el-table-column label="累计消耗" prop="BYRK"></el-table-column>
          <el-table-column label="备注" prop="REMARK"></el-table-column>
          <el-table-column
            align="center"
            label="操作"
            width="100px"
            class-name="small-padding fixed-width"
          >
            <template slot-scope="scope">
              <el-button
                type="primary"
                style="width:80px"
                size="mini"
                @click="DetailClick(scope.row)"
              >查看去向</el-button>
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
          :total="5"
          style="text-align: center;"
        ></el-pagination>
      </el-col>
    </el-row>
    <el-dialog
      title="去向明细表"
      :visible.sync="quxiangDialogVisible"
      @close="CloseDialog"
      :modal="false"
      :modal-append-to-body="false"
      style="margin-top:10vh;margin-left:100px;"
      width="50%"
    >
      <el-button type="primary" style="float:right" size="mini">导出</el-button>
      <el-table
        :data="listDetail"
        :header-cell-class-name="tableRowClassName"
        v-loading="listloading"
        element-loading-text="给我一点时间"
        border
        fit
        height="350"
        highlight-current-row
        style="width: 100%"
        size="mini"
        id="table"
      >
        <el-table-column min-width="100px" align="center" label="(领料)单位" fixed="left">
          <template slot-scope="scope">
            <span>{{scope.row.lldw}}</span>
          </template>
        </el-table-column>
        <el-table-column min-width="100px" align="center" label="消耗" fixed="left">
          <template slot-scope="scope">
            <span>{{scope.row.xh}}</span>
          </template>
        </el-table-column>
      </el-table>
      <!-- <div class="pagination-container" style="text-align:center;">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="listQuery.page"
          :page-sizes="[10,20,30,40]"
          :page-size="listQuery.limit"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>-->
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "TotalZDWZCRK",
  data() {
    return {
      listloading: false,
      value2: "2019-06-01",
      quxiangDialogVisible: false,
      fac: [
        {
          non: 1,
          WLZ: "07030302",
          WLBM: "10000513978",
          WLMC: "柴油",
          GGXH: "0#（国六）",
          JLDW: "吨",
          ZDCB: 200,
          ZGCB: 1600,
          XYKC: 2000,
          BYRK: "",
          BYXH: "",
          LJRK: "",
          LJXH: "",
          SYDW: "",
          REMARK: ""
        },
        {
          non: 1,
          WLZ: "07030302",
          WLBM: "11000922113",
          WLMC: "柴油",
          GGXH: "-20#（国六）",
          JLDW: "吨",
          ZDCB: 300,
          ZGCB: 1600,
          XYKC: 4000,
          BYRK: "",
          BYXH: "",
          LJRK: "",
          LJXH: "",
          SYDW: "",
          REMARK: ""
        },
        {
          non: 2,
          WLZ: "07030302",
          WLBM: "11000922112",
          WLMC: "柴油",
          GGXH: "0#（国六）",
          JLDW: "吨",
          ZDCB: 200,
          ZGCB: 1600,
          XYKC: 2000,
          BYRK: "",
          BYXH: "",
          LJRK: "",
          LJXH: "",
          SYDW: "",
          REMARK: ""
        },
        {
          non: 3,
          WLZ: "02040101",
          WLBM: "20002020707",
          WLMC: "油管",
          GGXH: "73*5.51N80E",
          JLDW: "吨",
          ZDCB: 500,
          ZGCB: 1000,
          XYKC: 2000,
          BYRK: "",
          BYXH: "",
          LJRK: "",
          LJXH: "",
          SYDW: "",
          REMARK: ""
        },
        {
          non: 4,
          WLZ: "07030302",
          WLBM: "11004684489",
          WLMC: "柴油",
          GGXH: "0#（国六）",
          JLDW: "吨",
          ZDCB: 200,
          ZGCB: 1600,
          XYKC: 2000,
          BYRK: "",
          BYXH: "",
          LJRK: "",
          LJXH: "",
          SYDW: "",
          REMARK: ""
        },
        {
          non: 5,
          WLZ: "10010203",
          WLBM: "11003171287",
          WLMC: "油井水泥",
          GGXH: "G级高抗",
          JLDW: "吨",
          ZDCB: 6500,
          ZGCB: 8000,
          XYKC: 2000,
          BYRK: "",
          BYXH: "",
          LJRK: "",
          LJXH: "",
          SYDW: "",
          REMARK: ""
        }
      ],
      listDetail: [
        {
          lldw: "井下作业",
          xh: 20
        },
        {
          lldw: "电力公司",
          xh: 300
        },
        {
          lldw: "信息中心 （通信公司）",
          xh: 20
        },
        {
          lldw: "技术学院",
          xh: 300
        },
        {
          lldw: "油田宾馆",
          xh: 20
        },
        {
          lldw: "车务管理中心",
          xh: 300
        },
        {
          lldw: "物业公司",
          xh: 20
        },
        {
          lldw: "市政公司",
          xh: 300
        }
      ]
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
    handleSizeChange() {},
    handleCurrentChange() {},
    DetailClick(row) {
      this.quxiangDialogVisible = true;
    },
    CloseDialog() {}
  }
};
</script>



<style lang="scss" scoped>
.fixed-width .el-button--mini {
  width: 80px;
}
.app-container /deep/.el-dialog__header {
  padding: 20px 20px 0px;
  text-align: center;
}
</style>


