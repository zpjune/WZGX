<template>
  <div id="FlaotingWindow"  class="FlaotingWindow" @mouseleave="leave">
    <el-dialog :visible.sync="seen" title="库存概况">
      <el-card>
        <div>
          <el-table
            size="mini"
            :data="list"
            :header-cell-class-name="tableRowClassName"
            v-loading="listloading"
            element-loading-text="给我一点时间"
            border
            fit
            highlight-current-row
            style="width: 100%;min-height:400px;"
            :modal="false"
            :modal-append-to-body="false"
          >
            <el-table-column label="大类" prop="DL" fixed="left" width="150"></el-table-column>
            <el-table-column label="项数" prop="SL" width="250" ></el-table-column>
            <el-table-column label="数量" fixed="left" width="150" prop="GESME"></el-table-column>
            <el-table-column label="计量单位" fixed="left" width="150" prop="MEINS"></el-table-column>
          </el-table>
        </div>
        <div class="pagination-container" style="text-align:center;">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="1"
          :page-sizes="[10,20,30,40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
        </div>
      </el-card>
    </el-dialog>
  </div>
</template>

<script>
import { GetFloatWindowInfo } from "@/app_src/api/cangchu/KCZS/ZXK";
export default {
  name: "FlaotingWindow",
  data() {
    return {
      seen: false,
      x: 0,
      y: 0,
      positionStyle: { top: "20px", left: "20px" },
      list: [],
      total: 0,
      listloading: false,
      QueryPamara: "",
      listQuery: {
        LGPLA: "",
        limit: 10,
        page: 1
      }
    };
  },
  methods: {
    getList() {
      GetFloatWindowInfo(this.listQuery).then(res => {
        if (res.data.code === 2000) {
          this.list = res.data.items;
          this.total = res.data.total;
        }
      });
    },
    enter(data) {
      this.QueryPamara = data;
      
      this.seen = true;
      console.log(this.seen);
    },
    leave() {
      this.seen = false;
    },
    updateXY: function(event) {
      var delay = delay || 200;
      var timer;
      return function() {
        var th = this;
        var args = arguments;
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(function() {
          timer = null;
          var e = event || window.event;
        }, delay);
      };

      // this.x = event.offsetX;
      // this.y = event.offsetY;
      // this.positionStyle = {
      //   top: this.y - 164 + "px",
      //   left: this.x - 374 + "px"
      // };
    },
    debounce(fn, delay) {
      var delay = delay || 200;
      let timer = null;
      return function() {
        let arg = arguments;

        clearTimeout(timer);

        timer = setTimeout(() => {
          fn.apply(this, arg);
        }, delay);
      };
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
      console.log(val);
      this.getList();
    },
    handleCurrentChange(val) {
      this.listQuery.page = val;
      this.getList();
    }
  },
  watch: {
    QueryPamara(val) {
      this.listQuery.LGPLA = val;
      this.getList();
    }
  }
};
</script>

<style lang="scss" scoped>
// .FlaotingWindow {
//   opacity: 0.9;
//   filter: alpha(opacity=90);
// }
</style>>