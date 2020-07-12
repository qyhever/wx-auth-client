import request from '@/utils/request'

export function getWechatRedirectUrl(pageUrl) {
  return request({
    url: '/webAuth',
    params: {
      pageUrl
    }
  })
}

export function getUserInfoByCode(data) {
  return request({
    method: 'post',
    url: '/userInfo',
    data
  })
}

export function getWxJsSdkAuth(url) {
  return request({
    url: '/apiAuth',
    params: {
      url
    }
  })
}
