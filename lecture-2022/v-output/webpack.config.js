import path from "path";
import {fileURLToPath} from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default {
  // js执行入口文件
  entry: "./src/index.js",
  output: {
    filename:"[name].js",
    library:{
      name:"demo",
      type:"var"
    }
  },
  mode:"none"
};