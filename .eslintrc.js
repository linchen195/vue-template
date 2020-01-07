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
    'no-multi-skr': 2, // 禁止多行字符串
    'no-eval': 2, // 禁止eval()
    'no-empty-function': 2, // 禁止空函数
    'radix': [2, 'as-needed'], // 强制在parseInt()使用基数参数
    'required-await': 2, // 禁止使用不带await的async函数
    /**
     * Variables 这些规则与变量声明有关：
    */
    'no-shadow': 2,
    'no-undefined': 2, // 禁止将undefined作为标识符
    /**
     * Stylistic Issues
     * 这些规则是关于风格指南的，而且是非常主观的
    */
    'array-bracket-spacing': [2, 'never'], // 禁止或强制在括号内使用空格
  }
}
