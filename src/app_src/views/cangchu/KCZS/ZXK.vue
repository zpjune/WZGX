<template>
  <div style="text-align:center" usemap="#planetmap" id="TotalZXK" class="app-container calendar-list-container ">
      <img
src="../../../img/ZXKdetail.png"
border="0" usemap="#planetmap"
alt="Planets" />
    <map name="planetmap" id="planetmap">
     <area
     shape="rect"
     coords="274,120,331,384"
     @click="OpenDialog"
     />
      <area
     shape="rect"
     coords="1334,170,1393,236"
     @click="OpenDialog"
     />
    </map>
    <kucunzhanshidetail :kcmxdialogVisible="kcmxDialog" @listenToChildEvent="closeDialog"></kucunzhanshidetail>
  </div>
</template>

<script>
import kucunzhanshidetail from '@/app_src/components/cangchu/kucunzhanshidetail'
export default {
  name: "TotalZXK",
  data() {
    return {
        kcmxDialog:false
    };
  },
  components:{
    kucunzhanshidetail
  },
  methods: {
     OpenDialog(){
         this.kcmxDialog=true;
     },
     closeDialog(val){
         this.kcmxDialog=val;
     }
  }
};
</script>



<style lang="scss" scoped>
.app-container{
    padding-top: 2px;
}
 .app-container /deep/ .el-dialog__body{
     background: #C0C0C0 !important;
   }
   .app-container /deep/ .el-dialog__header{
     background: #C0C0C0 !important;
   }
</style>


