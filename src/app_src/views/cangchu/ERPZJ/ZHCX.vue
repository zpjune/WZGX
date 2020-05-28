<template>
  <div id="ZHCX" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input
          placeholder="请输入工厂编码"
          style="width:95%;"
          size="mini"
          clearable
          v-model="listQuery.BWKEY"
        ></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <!-- <el-input placeholder="请选择物资分类" style="width:95%;" size="mini" clearable></el-input> -->
        <el-select
          size="mini"
          filterable
          clearable
          placeholder="请选择物资分类"
          v-model="listQuery.type"
          style="width:95%;"
        >
          <el-option
            v-for="item in categoryList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <!-- <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入中类编码" style="width:95%;" size="mini" clearable></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入小类编码" style="width:95%;" size="mini" clearable></el-input>
      </el-col>-->
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input
          placeholder="请输入类型编码"
          style="width:95%;"
          size="mini"
          clearable
          v-model="listQuery.CODE"
        ></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-button type="primary" icon="el-icon-search" size="mini" @click="getList">查询</el-button>
        <el-button
          type="primary"
          icon="el-icon-document"
          size="mini"
          @click="exportList"
          v-loading.fullscreen.lock="fullscreenLoading"
        >导出</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-table
          size="mini"
          :data="goods"
          :header-cell-class-name="tableRowClassName"
          v-loading="listloading"
          element-loading-text="给我一点时间"
          border
          fit
          highlight-current-row
          style="width: 100%"
        >
          <el-table-column label="工厂编码" prop="BWKEY"></el-table-column>
          <el-table-column label="工厂名称" prop="BWKEY_NAME"></el-table-column>
          <el-table-column label="大类" prop="DLNAME"></el-table-column>
          <el-table-column label="中类" prop="ZLNAME"></el-table-column>
          <el-table-column label="小类" prop="XLNAME"></el-table-column>
          <el-table-column label="品名" prop="PMNAME"></el-table-column>
          <el-table-column label="金额(万)" prop="SALK3">
             <template slot-scope="scope">
            <span >{{scope.row.SALK3|zifilter}}</span>
          </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="1"
          :page-sizes="[10,20,30, 50]"
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
  GetCompositeInfo,
  GetExportCompositeInfo
} from "@/app_src/api/cangchu/ERPZJ/ZHCX";
export default {
  name: "ZHCX",
  data() {
    return {
      listloading: false,
      fullscreenLoading: false,
      categoryList: [
        {
          value: 0,
          label: "大类"
        },
        {
          value: 1,
          label: "中类"
        },
        {
          value: 2,
          label: "小类"
        },
        {
          value: 3,
          label: "品名"
        }
      ],
      goods: [],
      listQuery: {
        BWKEY: "",
        type: 0,
        CODE: "",
        page: 1,
        limit: 10
      },
      total: 0
    };
  },
filters:{
    zifilter(val){
      return  (val/10000).toFixed(6);
    }
  },
  methods: {
    exportList() {
      this.fullscreenLoading = true;
      let list;
      GetExportCompositeInfo().then(response => {
        if (response.data.code === 2000) {
          list = response.data.items;
          import("@/frame_src/vendor/Export2Excel").then(excel => {
            const tHeader = [
              "工厂编码",
              "工厂名称",
              "大类",
              "中类",
              "小类",
              "品名",
              "金额"
            ];
            const filterVal = [
              "BWKEY",
              "BWKEY_NAME",
              "DLNAME",
              "ZLNAME",
              "XLNAME",
              "PMNAME",
              "SALK3"
            ];
            const data = this.formatJson(filterVal, list);
            console.log(data);
            excel.export_json_to_excel({
              header: tHeader,
              data,
              filename: "综合查询信息"
            });
          });
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
        this.fullscreenLoading = false;
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v =>
        filterVal.map(j => {
          return v[j];
        })
      );
    },
    getList() {
      GetCompositeInfo(this.listQuery).then(response => {
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
  mounted() {
    this.getList();
  }
};
</script>



<style lang="scss" scoped>
</style>


