<template>
  <div usemap="#planetmap" id="TotalZXK" class="app-container calendar-list-container ">
      <img
src="../../../img/ZXKdetail.png"
border="0" usemap="#planetmap"
alt="Planets" />
    <map name="planetmap" id="planetmap">
     <area
     shape="rect"
     coords="236,110,304,357"
     @click="dddd"
     />
    </map>
  </div>
</template>

<script>
export default {
  name: "TotalZXK",
  data() {
    return {};
  },
  methods: {
     dddd(){
         alert("sdf")
     }
  }
};
</script>



<style lang="scss" scoped>
.bg{
    width:1669px;
    height: 780px;
    background-image: url('../../../img/ZXKdetail.png') ;
    background-size: 1669px 780px;
    
}
</style>


