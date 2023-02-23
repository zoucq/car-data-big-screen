<template>
  <div id="app">
    <ScaleBox>
      <CarComponent></CarComponent>
    </ScaleBox>
  </div>
</template>

<script>
import ScaleBox from '@/components/ScaleBox.vue'
import CarComponent from '@/components/CarDataContent.vue'

export default {
  name: 'App',
  components: {
    ScaleBox,
    CarComponent
  }
}
</script>

<style lang="css">
  @import "~assets/css/common.css";
  #app{
    width: 100%;
    height: 100%;
    overflow: hidden;
    /*background: url("https://mpi.yunjiahealth.com:9443/testdapingweb/img/i-bg.60eca4b0.png") no-repeat left top;*/
    background: url('~assets/img/map_bg.png') repeat-y center;
    /*background-size: 100% 100%;*/
  }
</style>
