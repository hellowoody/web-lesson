const path = require('path');

module.exports = {
  // js执行入口文件
  context:path.resolve(__dirname,"src"),
  entry: './index.js',
  output: {
    // 将所有依赖的模块合并输出到 main.js 文件
    filename: 'main.js',
    // 将输出文件都放到 dist 目录下
    path: path.resolve(__dirname, 'dist'),
  },
};