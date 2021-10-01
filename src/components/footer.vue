<template>
    <div class="tabbar bg-light">
      <router-link tag="div" to="/first" class="item">
        <i class="iconfont icon-message"></i>
        <span>微信</span>
      </router-link>
      <router-link tag="div" to="/mail" class="item">
        <i class="iconfont icon-maillist"></i>
        <span>通讯录</span>
      </router-link>
      <router-link tag="div" to="/find" class="item">
        <i class="iconfont icon-find"></i>
        <span>发现</span>
      </router-link>
      <router-link tag="div" to="/my" class="item">
        <i class="iconfont icon-my_light"></i>
        <span>我</span>
      </router-link>
    </div>
</template>

<script setup>

</script>

<style scoped lang="less">
.tabbar{
    width: 100%;
    height: 45px;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    padding-top: 5px;
    .item {
        flex: 1;
        display: flex;
        text-align: center;
        flex-direction: column;
        align-items: center;
        font-size: 12px;
        color : #363535;
        .iconfont {
            font-size: 22px;
        }
    }
}
a {
  text-decoration: none;
}
.router-link-active {
 color: #08C060!important;
}
</style>