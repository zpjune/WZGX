<template>
  <div id="CK" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="库存地点" style="width:95%;" size="mini" clearable></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-date-picker
          size="mini"
          style="width:200px;"
          type="month"
          value-format="yyyy-MM-dd"
          placeholder="选择年月"
          v-model="listQuery.ZCJRQ"
          :clearable="true"
        ></el-date-picker>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-button type="primary" icon="el-icon-search" size="mini">查询</el-button>
        <el-button type="primary" icon="el-icon-document" size="mini">导出</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="22" :sm="20" :md="20" :lg="18" :xl="16">
        <el-table
          size="mini"
          :data="list"
          :header-cell-class-name="tableRowClassName"
          v-loading="listloading"
          element-loading-text="给我一点时间"
          border
          fit
          highlight-current-row
          style="width: 100%"
        >
          <el-table-column label="库存地点" prop="LGORT"></el-table-column>
          <el-table-column label="月份" prop="ZCJRQ"></el-table-column>
          <el-table-column label="出库数量" prop="ZFHSL"></el-table-column>
        </el-table>
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
export default {
  name: "CK",
  data() {
    return {
      listloading: false,
        
      listQuery: {
        page: 1,
        limit: 10,
        //Is_Page: "true",
        ZCJRQ: "",
        // S_OrgCode: this.$store.state.user.orgCode,
        // // S_BeginWorkDate: '',
        // // S_EndWorkDate: this.$store.state.user.sysTime,
        // S_OrgName: this.$store.state.user.departName,
        // S_WorkDate: this.$store.state.user.sysTime,
        // TaxNumber: "",
        // TaxRate: ""
      },
      list: [
        {
          LGORT: "仓库二",
          ZCJRQ: "2019-06",
          ZFHSL: 150
        },
        {
          LGORT: "仓库一",
          ZCJRQ: "2019-05",
          ZFHSL: 90
        },
        {
          LGORT: "仓库二",
          ZCJRQ: "2019-04",
          ZFHSL: 90
        },
        {
          LGORT: "仓库一",
          ZCJRQ: "2019-03",
          ZFHSL: 60
        },
        {
          LGORT: "仓库一",
          ZCJRQ: "2019-02",
          ZFHSL: 60
        },
        {
          LGORT: "仓库一",
          ZCJRQ: "2019-01",
          ZFHSL: 350
        }
        ,
        {
          LGORT: "仓库三",
          ZCJRQ: "2019-01",
          ZFHSL: 350
        }
        ,
        {
          LGORT: "仓库三",
          ZCJRQ: "2019-02",
          ZFHSL: 350
        }
        ,
        {
          LGORT: "仓库三",
          ZCJRQ: "2019-03",
          ZFHSL: 350
        }
        ,
        {
          LGORT: "仓库三",
          ZCJRQ: "2019-04",
          ZFHSL: 350
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
    handleCurrentChange() {}
  }
};
</script>



<style lang="scss" scoped>
</style>








