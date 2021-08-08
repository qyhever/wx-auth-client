// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  globals: {
    AMap: false,
    wx: false
  },
  // add your custom rules here
  rules: {
    /**
     * 代码错误
     */
    'no-console': 0,

    /**
     * 最佳实践
     */
    'eqeqeq': 2, // 强制使用 === 和 !==
    'default-case': 1, // 要求 switch 语句中有 default 分支
    'no-else-return': 1, // 禁止 if 语句中 return 语句之后有 else 块
    'no-empty-function': 1, // 禁止出现空函数
    'no-multi-spaces': 1, // 禁止使用多个空格
    'radix': 1, // 强制在parseInt()使用基数参数

    /**
     * 变量声明
     */
    'init-declarations': ['error', 'always'], // 声明变量必须赋值

    /**
     * 风格指南
     */
    // 'array-bracket-spacing': ['error', 'always'], // 数组方括号内必须空格
    'array-bracket-spacing': 0, // 数组方括号内必须空格
    'comma-dangle': 2, // 禁止末尾逗号
    'eol-last': 2, // 要求文件末尾存在空行
    // 对象冒号前禁止空格，冒号后必须空格
    'key-spacing': [
      'error', { 'beforeColon': false, 'afterColon': true }
    ],
    // 关键字（if、else等）前后必须有空格
    'keyword-spacing': [
      'error',
      { 'before': true, 'after': true }
    ],
    // 禁止出现多行空行
    'no-multiple-empty-lines': [
      'error',
      { 'max': 1 }
    ],
    'semi': ['error', 'never'], // 禁止末尾分号
    'space-infix-ops': 2, // 操作符周围必须有空格
    'spaced-comment': ['error', 'always'], // 注释后面必须跟随至少一个空白

    /**
     * ECMAScript6
     */
    'arrow-spacing': ['error', { 'before': true, 'after': true }], // 强制箭头函数的箭头前后使用空格
    'no-var': 2, // 禁止使用 var 声明变量
    'object-shorthand': 2, // 要求使用对象方法名和属性名简写
    'prefer-arrow-callback': 2, // 要求回调函数使用箭头函数
    'prefer-const': 2, // 使用 const 声明那些声明后不再被修改的变量
    'prefer-rest-params': 2 // 要求使用剩余参数而不是 arguments
  }
}
