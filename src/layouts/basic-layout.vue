<template>
  <div class="container">
    <van-nav-bar
      class="navbar"
      :title="$route.meta.title"
      left-text="返回"
      fixed
      @click-left="$router.go(-1)"
      @touchmove.native.stop.prevent
    />
    <router-view/>
  </div>
</template>

<script>
  export default {
    computed: {
      title() {
        if (this.$route.meta && this.$route.meta.title) {
          return this.$route.meta.title
        }
        return '首页'
      }
    }
  }
</script>

<style lang="less" scoped>
  .container {
    padding-top: 46px;
  }
  .navbar {
    &:after {
      border-color: #ccc;
    }
  }
</style>
