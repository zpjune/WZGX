<template>
  <div id="WLZJ" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input placeholder="请输入物料编码" style="width:95%;" size="mini" clearable v-model="listQuery.MATKL"></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-button type="primary" icon="el-icon-search" size="mini" @click="getList">查询</el-button>
        <el-button type="primary" icon="el-icon-document" size="mini">导出</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="18">
        <!-- <el-table
          size="mini"
          :data="goods"
          :header-cell-class-name="tableRowClassName"
          v-loading="listloading"
          element-loading-text="给我一点时间"
          border
          fit
          highlight-current-row
          style="width: 100%"
          row-key="MATKL"
          lazy
          :load="load"
        >
          <el-table-column label="工厂代码" prop="BWKEY"></el-table-column>
          <el-table-column label="大类" prop="MATKL"></el-table-column>
          <el-table-column label="中类" prop="MATKL1"></el-table-column>
          <el-table-column label="小类" prop="MATKL2"></el-table-column>
          <el-table-column label="品名" prop="MATKL3"></el-table-column>
          <el-table-column label="金额" prop="SALK3"></el-table-column>
        </el-table>-->
        <el-table
          :data="goods"
          style="width: 100%"
          row-key="CODE"
          border
          lazy
          size="mini"
          :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
          :load="load"
          :header-cell-class-name="tableRowClassName"
          v-loading="listloading"
          element-loading-text="给我一点时间"
          fit
          highlight-current-row
        >
          <!-- <el-table-column label="大类" prop="MATKL"></el-table-column> -->
          <el-table-column label="物料编码" prop="CODE"></el-table-column>
          <el-table-column label="物料名称" prop="NAME"></el-table-column>
          <el-table-column label="金额" prop="SALK3"></el-table-column>
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
  GetParentWLZList,
  GetChildrenList
} from "@/app_src/api/cangchu/ERPZJ/WLZJ";
export default {
  name: "WLZJ",
  data() {
    return {
      listloading: true,
      total:0,
      goods: [],
      listQuery: {
        MATKL: "",
        CODE: "",
        level: 0,
        page: 1,
        limit: 10
      }
    };
  },

  methods: {
    getList() {
      GetParentWLZList(this.listQuery).then(response => {
        if (response.data.code === 2000) {
          this.goods = response.data.items;
          this.total=response.data.total;
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
      let temp={
        CODE:tree.CODE,
        level:treeNode.level
      };
      let arr=[];
      GetChildrenList(temp).then(response=>{
        arr=response.data;
        resolve(arr);
      })

    },
    tableRowClassName({ row, rowIndex }) {
      // 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。
      if (rowIndex === 0) {
        return "el-button--primary is-active"; // 'warning-row'
      } // 'el-button--primary is-plain'// 'warning-row'
      return "";
    },
    handleSizeChange(val) {
      this.listQuery.limit=val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.listQuery.page=val;
      this.getList();
    },
    createRandomData() {},
    
  },
  mounted() {
    this.getList();
  }
};
</script>



<style lang="scss" scoped>
</style>


