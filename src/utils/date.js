import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import { isString } from './type'
dayjs.locale('zh-cn')

const normalizeDateStr = str => {
  let d = str
  if (isString(str)) {
    if (str.indexOf('-') >= 0) { // 将 - 替换为 /（ios不识别 -）
      d = str.replace(/-/g, '/')
    }
    if (str === Number(str).toString()) { // 字符串形式的时间戳
      d = Number(str)
    }
  }
  return d
}

export const formatDate = (value = new Date(), str = 'YYYY-MM-DD') => {
  if (!value) {
    return ''
  }
  return dayjs(normalizeDateStr(value)).format(str)
}
export const formatDateTime = (value = new Date()) => {
  if (!value) {
    return ''
  }
  return dayjs(normalizeDateStr(value)).format('YYYY-MM-DD HH:mm:ss')
}

export const getMonthStartDay = (value = new Date(), str = 'YYYY-MM-DD') => {
  return dayjs(value).startOf('month').format(str)
}

export const getMonthEndDay = (value = new Date(), str = 'YYYY-MM-DD') => {
  return dayjs(value).endOf('month').format(str)
}

/**
 * 获取某月的天数
 * @param {Date} 时间参数
 * @return {Number} 天数
 */
export const getMonthDays = (date = new Date()) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  // 当天数为0 js自动处理为上一月的最后一天
  return new Date(year, month, 0).getDate()
}
