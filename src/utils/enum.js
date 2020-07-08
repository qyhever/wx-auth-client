/**
 * 格式化枚举值
 * @param {Array} list 枚举值数组
 * @returns {Object} EnumAndArray {obj: {}, arr: []}
 */
function setEnumAndArray(list) {
  const obj = {}
  const arr = []
  list.forEach(item => {
    if (typeof item === 'object') {
      const label = item.v
      const value = item.k
      arr.push({ label, value })
      obj[value] = label
    }
  })
  return {
    obj,
    arr
  }
}

export const enumUserStatus = setEnumAndArray([
  {k: '', v: '全部'},
  {k: 1, v: '启用'},
  {k: 0, v: '禁用'}
])

export const enumCategoryType = setEnumAndArray([
  {k: 1, v: '支出'},
  {k: 2, v: '收入'}
])
