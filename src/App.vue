<template>
  <!-- <div class="flex page">
    <div class="flex-1 border rounded-circle" >1</div>
    <div class="flex-1 main-bg-color">1</div>
    <i class="iconfont icon-shouye"></i>
  </div>
   <i class="iconfont icon-my_fill_light"></i> -->
   <div class="page">
     <Header />
     <router-view />
     <Footer />
   </div>
</template>

<script>
import Footer from '@/components/footer'
import Header from '@/components/header'
export default {
  name: 'App',
  components: {
    Footer,
    Header
  }
}
</script>

<style>
</style>
