<template>
  <div
    style="text-align:center"
    usemap="#planetmap"
    id="TotalZYK"
    class="app-container calendar-list-container"
  >
    <!-- <img src="../../../img/ZXKdetail.png" border="0" usemap="#planetmap" alt="Planets" />
    <map name="planetmap" id="planetmap">
      <area shape="rect" coords="274, 120, 331, 384" @click="OpenDialog" />
      <area shape="rect" coords="1334, 170, 1393, 236" @click="OpenDialog" />
    </map>-->

    <!-- <img src="../../../img/ZYKPIC.png" border="0" usemap="#planetmap" alt="Planets" />
    <map name="planetmap" id="planetmap">
      <area shape="rect" coords="280, 43, 316, 76" title="1号库" @click="OpenDialog('ZYK',1)" />
      <area shape="rect" coords="474, 200, 617, 230" title="1号活动料棚" @click="OpenDialog('ZYK',1.1)" />
      <area shape="rect" coords="473, 148, 617, 179" title="2号活动料棚" @click="OpenDialog('ZYK',2)" />
      <area shape="rect" coords="473, 44, 509, 75" title="5号库" @click="OpenDialog('ZYK',5)" />
      <area shape="rect" coords="511, 44, 547, 75" title="6号库" @click="OpenDialog('ZYK',6)" />
      <area shape="rect" coords="549, 44, 580, 75" title="7号库" @click="OpenDialog('ZYK',7)" />
      <area shape="rect" coords="582, 44, 616, 75" title="8号库" @click="OpenDialog('ZYK',8)" />
      <area shape="rect" coords="352, 304, 387, 334" title="9号库" @click="OpenDialog('ZYK',9)" />
      <area shape="rect" coords="389, 304, 424, 334" title="10号库" @click="OpenDialog('ZYK',10)" />
      <area shape="rect" coords="473, 304, 507, 334" title="11号库" @click="OpenDialog('ZYK',11)" />
      <area shape="rect" coords="509, 304, 543, 334" title="12号库" @click="OpenDialog('ZYK',12)" />
      <area shape="rect" coords="545, 304, 581, 334" title="13号库" @click="OpenDialog('ZYK',13)" />
      <area shape="rect" coords="583, 304, 619, 334" title="14号库" @click="OpenDialog('ZYK',14)" />
    </map>-->

    <div class="box" id="box">
      <img
        id="ZYCPIC"
        src="../../../img/ZYKPIC.png"
        border="0"
        usemap="#planetmap"
        alt="Planets"
        class="ZYCPIC"
      />
      <!-- <map name="planetmap" id="planetmap">
        <area shape="rect" coords="280, 43, 316, 76" title="1号库" @click="OpenDialog('ZYK','01')" />
        <area
          shape="rect"
          coords="474, 200, 617, 230"
          title="1号活动料棚"
          @click="OpenDialog('ZYK','01')"
        />
        <area
          shape="rect"
          coords="473, 148, 617, 179"
          title="2号活动料棚"
          @click="OpenDialog('ZYK','02')"
        />
        <area shape="rect" coords="473, 44, 509, 75" title="5号库" @click="OpenDialog('ZYK','05')" />
        <area shape="rect" coords="511, 44, 547, 75" title="6号库" @click="OpenDialog('ZYK','06')" />
        <area shape="rect" coords="549, 44, 580, 75" title="7号库" @click="OpenDialog('ZYK','07')" />
        <area shape="rect" coords="582, 44, 616, 75" title="8号库" @click="OpenDialog('ZYK','08')" />
        <area shape="rect" coords="352, 304, 387, 334" title="9号库" @click="OpenDialog('ZYK','09')" />
        <area shape="rect" coords="389, 304, 424, 334" title="10号库" @click="OpenDialog('ZYK','10')" />
        <area shape="rect" coords="473, 304, 507, 334" title="11号库" @click="OpenDialog('ZYK','11')" />
        <area shape="rect" coords="509, 304, 543, 334" title="12号库" @click="OpenDialog('ZYK','12')" />
        <area shape="rect" coords="545, 304, 581, 334" title="13号库" @click="OpenDialog('ZYK','13')" />
        <area shape="rect" coords="583, 304, 619, 334" title="14号库" @click="OpenDialog('ZYK','14')" />
      </map>
      <div name="1号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag0"
          title="积压"
          style=" position: absolute;left: 279px;z-index: 2;top: 7%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(1-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag1"
          title="正常"
          style=" position: absolute;left: 304px;z-index: 2;top: 7%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(1-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag2"
          title="空缺"
          style=" position: absolute;left: 279px;z-index: 2;top: 10.5%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(1-1)+2]==='1'"
        />
      </div>
      <div name="5号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag3"
          title="积压"
          style=" position: absolute;left: 471px;z-index: 2;top: 7.2%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(5-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag4"
          title="正常"
          style=" position: absolute;left: 495px;z-index: 2;top: 7.2%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(5-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag5"
          title="空缺"
          style=" position: absolute;left: 471px;z-index: 2;top: 10.3%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(5-1)+2]==='1'"
        />
      </div>
      <div name="6号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag6"
          title="积压"
          style=" position: absolute;left: 508px;z-index: 2;top: 7.2%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(6-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag7"
          title="正常"
          style=" position: absolute;left: 531px;z-index: 2;top: 7.2%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(5-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag8"
          title="空缺"
          style=" position: absolute;left: 508px;z-index: 2;top: 10.3%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(5-1)+2]==='1'"
        />
      </div>
      <div name="7号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag9"
          title="积压"
          style=" position: absolute;left: 544px;z-index: 2;top: 7.2%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(7-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag10"
          title="正常"
          style=" position: absolute;left: 567px;z-index: 2;top: 7.2%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(5-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag11"
          title="空缺"
          style=" position: absolute;left: 544px;z-index: 2;top: 10.3%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(5-1)+2]==='1'"
        />
      </div>
      <div name="8号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag12"
          title="积压"
          style=" position: absolute;left: 580px;z-index: 2;top: 7.2%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(8-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag13"
          title="正常"
          style=" position: absolute;left: 603px;z-index: 2;top: 7.2%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(8-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag14"
          title="空缺"
          style=" position: absolute;left: 580px;z-index: 2;top: 10.3%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(8-1)+2]==='1'"
        />
      </div>
      <div name="14号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag15"
          title="积压"
          style=" position: absolute;left: 580px;z-index: 2;top: 50.5%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(14-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag16"
          title="正常"
          style=" position: absolute;left: 603px;z-index: 2;top: 50.5%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(14-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag17"
          title="空缺"
          style=" position: absolute;left: 580px;z-index: 2;top: 53.7%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(14-1)+2]==='1'"
        />
      </div>
      <div name="13号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag18"
          title="积压"
          style=" position: absolute;left: 544px;z-index: 2;top: 50.5%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(13-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag19"
          title="正常"
          style="  position: absolute;left: 567px;z-index: 2;top: 50.5%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(13-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag20"
          title="空缺"
          style="position: absolute;left: 544px;z-index: 2;top: 53.7%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(13-1)+2]==='1'"
        />
      </div>
      <div name="12号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag21"
          title="积压"
          style=" position: absolute;left: 508px;z-index: 2;top: 50.5%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(12-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag22"
          title="正常"
          style="  position: absolute;left: 531px;z-index: 2;top: 50.5%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(12-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag23"
          title="空缺"
          style="position: absolute;left: 508px;z-index: 2;top: 53.7%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(12-1)+2]==='1'"
        />
      </div>
      <div name="11号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag24"
          title="积压"
          style=" position: absolute;left: 472px;z-index: 2;top: 50.5%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(11-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag25"
          title="正常"
          style="  position: absolute;left: 495px;z-index: 2;top: 50.5%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(11-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag26"
          title="空缺"
          style=" position: absolute;left: 472px;z-index: 2;top: 53.7%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(11-1)+2]==='1'"
        />
      </div>
      <div name="9号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag27"
          title="积压"
          style=" position: absolute;left: 352px;z-index: 2;top: 50.5%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(9-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag28"
          title="正常"
          style="  position: absolute;left: 375px;z-index: 2;top: 50.5%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(9-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag29"
          title="空缺"
          style=" position: absolute;left: 352px;z-index: 2;top: 53.7%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(12-1)+2]==='1'"
        />
      </div>
      <div name="10号区域">
        <img
          src="../../../img/red.jpg"
          alt
          id="flag30"
          title="积压"
          style=" position: absolute;left: 388px;z-index: 2;top: 50.5%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(10-1)]==='1'"
        />
        <img
          src="../../../img/blue.jpg"
          alt
          id="flag31"
          title="正常"
          style="  position: absolute;left: 411px;z-index: 2;top: 50.5%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(10-1)+1]==='1'"
        />
        <img
          src="../../../img/yellow.jpg"
          alt
          id="flag32"
          title="空缺"
          style=" position: absolute;left: 388px;z-index: 2;top: 53.7%;width: 12px;height: 12px;"
          v-show="StatusStr[3*(10-1)+2]==='1'"
        />
      </div> -->
    </div>
    <!-- <div name="标识图片">
      <img id="ZYCPIC" src="../../../img/库房2.png" border="0" class="kufang" />库房
      <img id="ZYCPIC" src="../../../img/料棚.png" border="0" class="liaopeng" />料棚
    </div> -->
    <kucunzhanshidetail
      :kcmxdialogVisible="kcmxDialog"
      @listenToChildEvent="closeDialog"
      ref="kucunzhanshidetail"
    ></kucunzhanshidetail>
  </div>
</template>

<script>
import kucunzhanshidetail from "@/app_src/components/cangchu/kucunzhanshidetail";
import { GetFacStatus } from "@/app_src/api/cangchu/KCZS/ZXK";
export default {
  name: "TotalZYK",
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
    kucunzhanshidetail
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
      let w = document.getElementById("ZYCPIC").offsetLeft;
      this.width = w;
    },
    setStyle(val) {
      let maxName = 200;
      for (let i = 0; i < maxName; i++) {
        let name = "flag" + i.toString();
        let ele = document.getElementById(name);
        let currentWidth;
        if (ele !== null) {
          currentWidth = ele.style.left;
        } else {
          break;
        }
        //let currentWidth = document.getElementById(name).style.left;
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
        this.width = document.getElementById("ZYCPIC").offsetLeft;
      });
    }
  },
  mounted() {
    this.getPoint();
    //this.setStyle(this.width);
    this.observer();
    this.setStyle(this.width);
  },
  created() {
    //this.getList();
  }
};
</script>



<style lang="scss" >
#TotalZYK {
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
    .ZYCPIC {
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


