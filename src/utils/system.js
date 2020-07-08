const ua = navigator.userAgent.toLowerCase()
export function isAndroid() {
  return /android/.test(ua)
}
export function isIOS() {
  return /ios|iphone|ipad|ipod/.test(ua)
}
