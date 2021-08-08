<template>
  <div id="loadingToast" v-show="visible">
    <div class="loading-mask_transparent" @touchmove.stop.prevent></div>
    <div class="loading-toast" @touchmove.stop.prevent>
      <i class="loading-icon"></i>
      <p class="loading-toast__content" v-show="text">{{text}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: false
      }
    },
    props: {
      text: {
        type: String,
        default: '请稍后...'
      }
    }
  }
</script>

<style lang="less" scoped>
  .loading-mask_transparent {
    position: fixed;
    z-index: 999;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  .loading-toast {
    position: fixed;
    z-index: 4999;
    width: 110px;
    height: 110px;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    border-radius: 5px;
    background-color: rgba(50, 50, 51, 0.88);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #4c4c4c;
  }
  .loading-icon {
    display: inline-block;
    width: 38px;
    height: 38px;
    margin: 8px 0;
    vertical-align: baseline;
    animation: loading 1s steps(12, end) infinite;
    background: transparent url("data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cpath fill='none' d='M0 0h100v100H0z'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23E9E9E9' rx='5' ry='5' transform='translate(0 -30)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23989697' rx='5' ry='5' transform='rotate(30 105.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%239B999A' rx='5' ry='5' transform='rotate(60 75.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23A3A1A2' rx='5' ry='5' transform='rotate(90 65 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23ABA9AA' rx='5' ry='5' transform='rotate(120 58.66 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23B2B2B2' rx='5' ry='5' transform='rotate(150 54.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23BAB8B9' rx='5' ry='5' transform='rotate(180 50 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23C2C0C1' rx='5' ry='5' transform='rotate(-150 45.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23CBCBCB' rx='5' ry='5' transform='rotate(-120 41.34 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23D2D2D2' rx='5' ry='5' transform='rotate(-90 35 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23DADADA' rx='5' ry='5' transform='rotate(-60 24.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23E2E2E2' rx='5' ry='5' transform='rotate(-30 -5.98 65)'/%3E%3C/svg%3E") no-repeat;
    background-size: 100%;
  }
  .loading-toast__content {
    font-size: 14px;
    color: #fff;
  }
  @keyframes loading {
    0% {
      transform: rotate3d(0, 0, 1, 0deg);
    }
    100% {
      transform: rotate3d(0, 0, 1, 360deg);
    }
  }
</style>
