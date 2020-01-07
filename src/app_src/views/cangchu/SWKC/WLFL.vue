<template>
  <div id="WLFL" class="app-container calendar-list-container">
    <el-row style="margin-bottom:10px;">
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-input
          placeholder="请输入物料编码"
          style="width:95%;"
          size="mini"
          clearable
          v-model="listQuery.MATKL"
        ></el-input>
      </el-col>
      <el-col :xs="5" :sm="5" :md="5" :lg="4" :xl="3">
        <el-button type="primary" icon="el-icon-search" size="mini" @click="getList">查询</el-button>
        <el-button type="primary" icon="el-icon-document" size="mini">导出</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="20" :md="20" :lg="20" :xl="18">
        <el-table
          :data="goods"
          style="width: 100%"
          row-key="ID"
          border
          lazy
          :load="load"
          size="mini"
          :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
          :header-cell-class-name="tableRowClassName"
          v-loading="listloading"
          element-loading-text="给我一点时间"
          fit
          highlight-current-row
        >
          <el-table-column label="物料编码" prop="Code"></el-table-column>
          <el-table-column label="物料名称" prop="Name"></el-table-column>
          <el-table-column label="计量单位" prop="Unit"></el-table-column>
          <el-table-column label="实存数量" prop="Number"></el-table-column>
          <el-table-column label="库存地点" prop="Location"></el-table-column>
        </el-table>

        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="1"
          :page-sizes="[10,20,30, 50]"
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
  GetParentList,
  GetChildrenList
} from "@/app_src/api/cangchu/SWKC/WLFL";
export default {
  name: "WLFL",
  data() {
    return {
      listloading: false,
      goods: [],
      listQuery: {
        limit: 10,
        page: 1,
        MATKL: "",
        level: 0
      }
    };
  },

  methods: {
    getList() {
      GetParentList(this.listQuery).then(response => {
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
      let temp = {
        CODE: tree.Code,
        level: treeNode.level
      };
      let arr = [];
      GetChildrenList(temp).then(response => {
        arr = response.data;
        resolve(arr);
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


