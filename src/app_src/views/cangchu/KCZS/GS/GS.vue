<template>
  <div
    style="text-align:center"
    usemap="#planetmap"
    id="TotalGS"
    class="app-container calendar-list-container">
    <div class="box" id="box">
      <img
        id="GSPIC"
        src="../../../../img/GSPIC.jpg"
        border="0"
        usemap="#planetmap"
        alt="Planets"
        class="ZYCPIC"
        style="width:1000px;height:600px;vertical-align:text-top"
      />
      <map name="planetmap" id="planetmap">
         <area shape="rect" coords="189,140,348,160" title="9号料台"  @click="enter('09')">
        <area shape="rect" coords="195,163,351,183" title="8号料台"  @click="enter('08')">
        <area shape="rect" coords="374, 354, 701, 388" title="1号库" @click="enter('01')" />
        <area shape="rect" coords="374, 395, 702, 430" title="2号库" @click="enter('02')" />
         <area shape="rect" coords="372, 437, 702, 473" title="7号料棚" @click="enter('07')" />
         <area shape="rect" coords="567, 69, 746, 284" title="5号料场" @click="enter('05')" />
          <area shape="rect" coords="160, 410, 203, 513" title="4号库" @click="enter('04')" />
          <area shape="rect" coords="371, 480, 567, 513" title="3号库" @click="enter('03')" />
          <area shape="rect" coords="752, 68, 798, 217" title="6号料棚" @click="enter('06')" />
      </map>
      <img 
        src="../../../../img/zhinanzhen.png"
        id="ZXKPIC"
        border="0"
        alt="Planets"
        style="height:100px;width:100px;vertical-align:text-top"
      />
      <!-- <map name="planetmap" id="planetmap">
        <area shape="rect" coords="270, 326, 521, 365" title="1号库" @click="OpenDialog('ZXK','01')" />
        <area shape="rect" coords="270, 365, 521, 405" title="2号库" @click="OpenDialog('ZXK','02')" />
        <area
          shape="rect"
          coords="270, 408, 521, 446"
          title="7号活动料棚"
          @click="OpenDialog('ZYK','07')"
        />
        <area shape="rect" coords="270, 450, 416, 487" title="4号库" @click="OpenDialog('ZYK','04')" />
        <area shape="rect" coords="426, 35, 557, 261" title="5料场" @click="OpenDialog('ZYK','05')" />
        <area
          shape="rect"
          coords="557, 34, 593, 189"
          title="6号活动料棚"
          @click="OpenDialog('ZYK','06')"
        />
        <area shape="rect" coords="138, 107, 255, 137" title="9料台" @click="OpenDialog('ZYK','09')" />
        <area shape="rect" coords="137, 139, 257, 167" title="8料台" @click="OpenDialog('ZYK','08')" />
        <area shape="rect" coords="114, 377, 148, 490" title="3号库" @click="OpenDialog('ZYK','03')" />
      </map>
      <div name="1号区域">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag0"
          title="积压"
          style=" position: absolute;left: 269px;z-index: 2;top: 54.2%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(1-1)]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag1"
          title="正常"
          style=" position: absolute;left: 508px;z-index: 2;top:54.2%;;width: 12px;height: 12px;"
          v-show="StatusStr[3*(1-1)+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag2"
          title="空缺"
          style=" position: absolute;left: 269px;z-index: 2;top: 58.8%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(1-1)+2]==='1'"
        />
      </div>
      <div name="2号区域">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag3"
          title="积压"
          style=" position: absolute;left: 269px;z-index: 2;top: 61%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(2-1)]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag4"
          title="正常"
          style=" position: absolute;left: 508px;z-index: 2;top:61%;;width: 12px;height: 12px;"
          v-show="StatusStr[3*(2-1)+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag5"
          title="空缺"
          style=" position: absolute;left: 269px;z-index: 2;top: 65.8%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(2-1)+2]==='1'"
        />
      </div>
      <div name="7号料棚">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag6"
          title="积压"
          style=" position: absolute;left: 269px;z-index: 2;top: 68%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(7-1)]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag7"
          title="正常"
          style=" position: absolute;left: 508px;z-index: 2;top:68%;;width: 12px;height: 12px;"
          v-show="StatusStr[3*(7-1)+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag8"
          title="空缺"
          style=" position: absolute;left: 269px;z-index: 2;top: 72.8%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(7-1)+2]==='1'"
        />
      </div>
      <div name="4号区域">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag9"
          title="积压"
          style=" position: absolute;left: 269px;z-index: 2;top: 75%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(4-1)]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag10"
          title="正常"
          style=" position: absolute;left: 405px;z-index: 2;top:75%;;width: 12px;height: 12px;"
          v-show="StatusStr[3*(4-1)+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag11"
          title="空缺"
          style=" position: absolute;left: 269px;z-index: 2;top: 79.4%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(4-1)+2]==='1'"
        />
      </div>
      <div name="5号料场">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag12"
          title="积压"
          style=" position: absolute;left: 425px;z-index: 2;top: 5.7%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(5-1)]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag13"
          title="正常"
          style=" position: absolute;left: 544px;z-index: 2;top:5.7%;;width: 12px;height: 12px;"
          v-show="StatusStr[3*(5-1)+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag14"
          title="空缺"
          style=" position: absolute;left: 425px;z-index: 2;top: 41.5%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(5-1)+2]==='1'"
        />
      </div>
      <div name="9料台">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag15"
          title="积压"
          style=" position: absolute;left: 137px;z-index: 2;top: 17.7%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(9-1)]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag16"
          title="正常"
          style=" position: absolute;left: 244px;z-index: 2;top:17.7%;;width: 12px;height: 12px;"
          v-show="StatusStr[3*(9-1)+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag17"
          title="空缺"
          style=" position: absolute;left: 137px;z-index: 2;top: 20.8%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(9-1)+2]==='1'"
        />
      </div>
      <div name="8料台">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag18"
          title="积压"
          style=" position: absolute;left: 137px;z-index: 2;top: 23%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(8-1)]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag19"
          title="正常"
          style=" position: absolute;left: 244px;z-index: 2;top:23%;;width: 12px;height: 12px;"
          v-show="StatusStr[3*(8-1)+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag20"
          title="空缺"
          style=" position: absolute;left: 137px;z-index: 2;top: 26%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(8-1)+2]==='1'"
        />
      </div>
      <div name="3号区域">
        <img
          src="../../../../img/red.jpg"
          alt
          id="flag21"
          title="积压"
          style=" position: absolute;left: 113px;z-index: 2;top: 62.8%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(3-1)]==='1'"
        />
        <img
          src="../../../../img/blue.jpg"
          alt
          id="flag22"
          title="正常"
          style=" position: absolute;left: 136px;z-index: 2;top:62.8%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(3-1)+1]==='1'"
        />
        <img
          src="../../../../img/yellow.jpg"
          alt
          id="flag23"
          title="空缺"
          style=" position: absolute;left: 113px;z-index: 2;top: 79.6%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(3-1)+2]==='1'"
        />
      </div> -->
    </div>
    <!-- <div name="标识图片">
      <img id="ZYCPIC" src="../../../../img/库房2.png" border="0" class="kufang" />库房
      <img id="ZYCPIC" src="../../../../img/料棚.png" border="0" class="liaopeng" />料棚
    </div> -->
    <kucunzhanshidetail
      :kcmxdialogVisible="kcmxDialog"
      @listenToChildEvent="closeDialog"
      ref="kucunzhanshidetail"
    ></kucunzhanshidetail>
    <div>
      <FloatingWindow ref="FloatingWindow"></FloatingWindow>
    </div>
  </div>
</template>

<script>
import kucunzhanshidetail from "@/app_src/components/cangchu/kucunzhanshidetail";
import FloatingWindow from "@/app_src/components/cangchu/FloatingWindow";
import { GetFacStatus } from "@/app_src/api/cangchu/KCZS/ZXK";
export default {
  name: "GS",
  props: ["FacCode"],
  data() {
    return {
      kcmxDialog: false,
      width: 0,
      oldwidth: 0,
      listQuery: {
        FacCode: this.FacCode
      },
      statusCode: "",
      StatusStr: ""
    };
  },
  watch: {
    width(val) {
      //this.setStyle(val);
      this.debounce(this.setStyle(val), 5000);
    }
  },
  components: {
    kucunzhanshidetail,
    FloatingWindow
  },
  methods: {
    getList() {
      GetFacStatus(this.listQuery).then(response => {
        if (response.data.code === 2000) {
          this.StatusStr = response.data.items;
        }
        this.setStyle(this.width);
      });
    },
    OpenDialog(type, val) {
      this.statusCode = this.FacCode + val;
      this.kcmxDialog = true;
      this.$refs.kucunzhanshidetail.getValue(this.statusCode);
      this.$refs.kucunzhanshidetail.getList();
      //console.log(type + val);
    },
    closeDialog(val) {
      this.kcmxDialog = val;
    },
    getPoint() {
      //let t=document.getElementById("TotalZYK").offsetLeft;
      let w = document.getElementById("GSPIC").offsetLeft;
      this.width = w;
    },
    setStyle(val) {
      let maxName = 24;
      for (let i = 0; i < maxName; i++) {
        let name = "flag" + i.toString();
        let currentWidth = document.getElementById(name).style.left;
        let targetWidth =
          parseInt(currentWidth.trim("px")) + val - this.oldwidth + "px";
        document.getElementById(name).style.left = targetWidth;
      }
      this.oldwidth = this.width;
    },
    debounce(fn, delay) {
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
          fn.apply(th, args);
        }, delay);
      };
    },
    observer() {
      var elementResizeDetectorMaker = require("element-resize-detector");
      var erd = elementResizeDetectorMaker();
      let w = 0;
      erd.listenTo(document.getElementById("box"), element => {
        this.width = document.getElementById("GSPIC").offsetLeft;
      });
    },
    enter(data) {
      this.$refs.FloatingWindow.enter(this.FacCode + data);
    },
  },
  mounted() {
    //this.getPoint();//获取当前平面图width方法
    ////this.setStyle(this.width);//初始化放置点位方法
    //this.observer();//监听当前PIC DOM的方法
    //this.setStyle(this.width);//初始化设置点位方法
  },
  created() {
    //this.getList();//获取平面图点位状态方法
  }
};
</script>



<style lang="scss" >
#TotalGS {
  .app-container {
    padding-top: 2px;
  }
  .app-container /deep/ .el-dialog__body {
    background: #c0c0c0 !important;
  }
  .app-container /deep/ .el-dialog__header {
    background: #c0c0c0 !important;
  }
  .box {
    position: relative;
    height: 600px;
    .GSPIC {
      position: absolute;
      z-index: 1;
      right: 25%;
    }
    // .flag1 {
    //   position: absolute;
    //   z-index: 2;
    //   left: 41.1%;
    //   top: 10.5%;
    //   width: 12px;
    //   height: 12px;
    // }
    // .flag2 {
    //   position: absolute;
    //   z-index: 2;
    //   left: 42.538%;
    //   top: 7%;
    //   width: 12px;
    //   height: 12px;
    // }
  }
  .kufang {
    width: 55px;
    height: 60px;
  }
  .liaopeng {
    width: 70px;
    height: 60px;
    margin-left: 50px;
  }
}
</style>


