<template>
  <div>
    <van-skeleton
      avatar
      :row="4"
      :row-width="['50%', '50%', '50%', '100%']"
      :loading="loading"
      avatar-size="50px"
      avatar-shape="square"
    >
      <van-row type="flex" class="user">
        <van-image :src="userInfo.headimgurl" class="user-image"></van-image>
        <div class="user-bd">
          <van-row type="flex" align="center">
            <span>昵称：</span>
            <span>{{userInfo.nickname}}</span>
          </van-row>
          <van-row type="flex" align="center">
            <span>性别：</span>
            <span v-if="userInfo.openid">{{userInfo.sex === 1 ? '男' : '女'}}</span>
          </van-row>
          <van-row type="flex" align="center">
            <span>地区：</span>
            <span>{{userInfo.province}} - {{userInfo.city}}</span>
          </van-row>
          <van-row type="flex">
            <span>openid：</span>
            <span>{{userInfo.openid}}</span>
          </van-row>
        </div>
      </van-row>
    </van-skeleton>
    <van-button type="primary" @click="onScan" block class="button">扫一扫</van-button>
    <van-button type="primary" @click="onGetNetwork" block class="button">获取网络状态</van-button>
    <van-button type="primary" @click="onGetCurrentLocation" block class="button">获取当前定位</van-button>
    <van-button type="primary" @click="onOpenMap" block class="button">打开地图</van-button>
    <van-button type="primary" @click="onSelectImage" block class="button">选择图片</van-button>
  </div>
</template>

<script>
import qs from 'qs'
import { getWechatRedirectUrl, getUserInfoByCode, getWxJsSdkAuth } from '@/api'
import { Dialog } from 'vant'
export default {
  name: 'App',
  data() {
    return {
      userInfo: {},
      loading: true
    }
  },
  created() {
    const { code } = qs.parse(location.search.slice(1))
    if (!code) {
      this.initWx()
    } else {
      this.getUserInfo(code)
      this.initSdk()
    }
  },
  methods: {
    async initWx() {
      const pageUrl = location.href.replace(/\/#.*$/, '')
      try {
        const { url } = await getWechatRedirectUrl(encodeURI(pageUrl))
        location.href = url
      } catch (err) {
        console.log(err)
      }
    },
    async initSdk() {
      const url = location.href.split('#')[0]
      const response = await getWxJsSdkAuth(url)
      const { appId, timestamp, noncestr: nonceStr, signature } = response
      wx.config({
        debug: false,
        appId,
        timestamp,
        nonceStr,
        signature,
        jsApiList: [
          'scanQRCode',
          'chooseImage',
          'getNetworkType',
          'openLocation',
          'getLocation'
        ]
      })
      wx.ready(() => {
        console.log('js-sdk init success')
      })
      wx.error(err => {
        console.log('js-sdk init error', err)
      })
    },
    async getUserInfo(code) {
      const openId = localStorage.getItem('openid')
      const params = { code }
      if (openId) {
        params.openId = openId
      }
      this.loading = true
      const response = await getUserInfoByCode(params)
      console.log('response', response)
      this.loading = false
      this.userInfo = response
      if (response.openid) {
        localStorage.setItem('openid', response.openid)
      }
    },
    onScan() {
      wx.scanQRCode({
        needResult: 0, // 默认为 0，扫描结果由微信处理，1 则直接返回扫描结果，
        scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
        success(res) {
          console.log(res) // 当 needResult 为 1 时，扫码返回的结果
        }
      })
    },
    onGetCurrentLocation() {
      wx.getLocation({
        type: 'wgs84', // 默认为 wgs84 的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        success(res) {
          const latitude = res.latitude // 纬度，浮点数，范围为90 ~ -90
          const longitude = res.longitude // 经度，浮点数，范围为180 ~ -180。
          // const speed = res.speed // 速度，以米/每秒计
          // const accuracy = res.accuracy // 位置精度
          Dialog.alert({
            title: '当前位置',
            message: `经度：${longitude} 纬度：${latitude}`
          })
        }
      })
    },
    onGetNetwork() {
      wx.getNetworkType({
        success(res) {
          const networkType = res.networkType // 返回网络类型 2g，3g，4g，wifi
          Dialog.alert({
            title: '网络状态',
            message: networkType
          })
        }
      })
    },
    onOpenMap() {
      wx.getLocation({
        type: 'gcj02',
        success(res) {
          const latitude = res.latitude
          const longitude = res.longitude
          wx.openLocation({
            latitude, // 纬度，浮点数，范围为90 ~ -90
            longitude, // 经度，浮点数，范围为180 ~ -180。
            name: '', // 位置名
            address: '', // 地址详情说明
            scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
            infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
          })
        }
      })
    },
    onSelectImage() {
      wx.chooseImage({
        count: 9, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success(res) {
          const localIds = res.localIds // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
          console.log('localIds', localIds)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.user {
  padding: 20px;
}
.user-image {
  flex: 0 0 50px;
  width: 50px;
  height: 50px;
  border-radius: 6px;
  overflow: hidden;
}
.user-bd {
  flex: 1;
  margin-left: 20px;
  color: #666;
  ::v-deep .van-row {
    margin-bottom: 8px;
    line-height: 14px;
  }
}
.button {
  margin: 20px 0;
}
</style>
