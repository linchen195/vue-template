// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  // 此项是用来指定javaScript语言类型和风格
  // parserOptions: {
  //   parser: 'babel-eslint' 此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
  // },
  // 此项指定环境的全局变量，下面的配置指定为node环境
  env: {
    // browser: true, // 浏览器环境
    node: true
  },
  extends: [
    // 严格规则
    "plugin:vue/strongly-recommended",
    // eslint推荐的一些规则
    "eslint:recommended"
  ],
  // required to lint *.vue files
  // 此项是用来提供插件的，插件名称省略了eslint-plugin-，下面这个配置是用来规范html的
  // plugins: [
  //   'vue'
  // ],
  // add your custom rules here
  rules: {
    /**
     * Possible Errors
     * 这些规则与JavaScript 代码中可能的错误或逻辑有关
    */
   'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
   'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    /**
     * Best Practices
     * 这些规则是关于最佳实践的，帮助你避免一些问题
    */
    'no-multi-spaces': 2, // 禁止多个空格
    'no-multi-str': 2, // 禁止多行字符串
    'no-eval': 2, // 禁止eval()
    'no-empty-function': 2, // 禁止空函数
    'radix': [2, 'as-needed'], // 强制在parseInt()使用基数参数
    'require-await': 2, // 禁止使用不带await的async函数
    /**
     * Variables 这些规则与变量声明有关：
    */
    'no-shadow': 2,
    'no-undefined': 2, // 禁止将undefined作为标识符
    /**
     * Stylistic Issues
     * 这些规则是关于风格指南的，而且是非常主观的
    */
    'array-bracket-spacing': [2, 'never'], // 强制在括号内使用空格
    'block-spacing': 2, // 强制在代码块中括号前和闭括号后有空格
    'comma-dangle': [2, 'only-multiline'], // 闭括号同一行禁止拖尾逗号
    'comma-spacing': [2, { before: false, after: true }], // 强制在逗号周围使用空格
    'eol-last': [2, 'always'], // 要求文件末尾存在空格
    'func-call-spacing': 2, // 要求在函数标识符和其调用之间有空格
    'indent': [2, 2, { SwitchCase: 1 }], // 强制使用一致的缩进 switch除外
    'key-spacing': 2, // 强制在对象字面量的键和值之间使用一致的空格
    'keyword-spacing': 2, // 强制关键字周围空格的一致性
    'prefer-const': 2, // 要求使用const声明后的变量不再被修改
    'object-curly-spacing': [2, 'always'], // 强制在花括号使用一致的空格
    'max-len': [2, { code: 200 }], // 单行超过200报错
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }], // 禁止使用一元操作符 ++ 和 --  for循环最后一个可用
    'no-multiple-empty-lines': [2, { max: 1, maxEOF: 1 }], // 禁止出现多行空行
    'no-trailing-spaces': 2, // 禁止行位空白
    'semi-spacing': [2, { before: false, after: true }], // 强制分好前后有空格
    'space-before-function-paren': [2, 'always'], // 函数圆括号之前有一个空格
    'space-unary-ops': 2, // 要求或禁止在一元操作符之前或之后存在空格
    'spaced-comment': [2, 'always'], // 要求在注释前有空格
    'space-in-parens': [2, 'never'], // 强制圆括号内一致的空格
    'space-infix-ops': 2, // 要求中缀操作符周围有空格
    'vue/html-self-closing': 0,
    'vue/max-attributes-per-line': 0,
    'vue/name-property-casing': 0
  }
}
