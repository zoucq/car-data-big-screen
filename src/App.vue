<template>
  <div id="app" :class="{loading: !show}">
    <ScaleBox :class="{scale_box: true, on: show}">
      <CarComponent @ready="ready"></CarComponent>
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
  },
  data(){
    return {
      show: false
    }
  },
  methods: {
    ready () {
      this.show = true
    }
  }
}
</script>

<style lang="css">
  @import "~assets/css/common.css";

  #app{
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #000;
  }

  .loading{
    background: rgba(0,0,0,1) url('~assets/img/loading.svg') no-repeat center;
    background-size: 48px;
  }

  .scale_box{
    /*background: url("https://mpi.yunjiahealth.com:9443/testdapingweb/img/i-bg.60eca4b0.png") repeat-y center;*/
    /*background: url("https://sugar.aipage.com/static/img-templet/background-2.png") repeat-y center;*/

    background: url('~assets/img/map_bg.png') repeat-y center;
    /*background-size: 100% 100%;*/
    opacity: 0;
  }
  .on{
    opacity: 1;
  }
</style>
