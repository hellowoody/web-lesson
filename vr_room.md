# VR全景看房

  - 创建项目，用nodejs和npm，创建一个空项目

      ```
      npm init -y
      ```
  
  - 安装脚手架-webpack

      ```
      npm i -D webpack webpack-cli webpack-dev-server
      ``` 
  - 安装typescript

      ```
      npm i -D typescript // 安装库
      npx tsc --init      // 创建ts配置文件
      ```
       
  - 配置webpack文件

    - 如果loader只有一个且还配置了option时，需要写成 loader:"xxx-loader"

    - webpack-dev-server 更新了现在是v4.x.x版本

      ```
      devServer: {
          static: {
              directory: join(__dirname, 'public'),
          },
          compress: true,
          port: 3000
      }
      ```
    - resolve配置后缀名

      重点！后缀名需要加“点”,如 .xxx

      ```
      resolve:{
          extensions:[".tsx",".ts",".js"]  // 打包数组中的后缀名文件
      }
      ```
    - 安装插件

      ```
      npm i -D html-webpack-plugin
      ```
    
    - 安装模块loader

      ```
      npm i -D file-loader url-loader ts-loader
      ```
  
  - 配置tsconfig文件

    > rootDir设置为"./"

    > outDir设置为"./build" ，同webpack配置文件的output中path属性一致就行

    > allowJs设置为true
  
  - 安装threejs库

    ```
    npm i --save three
    npm i -D @types/three
    ```

  - 创建渲染器

    ```
    const renderer = new THREE.WebGLRenderer();             // 创建渲染器
    renderer.setSize(window.innerWidth,window.innerHeight); // 设置尺寸和像素
    ```

  - 将渲染器加到html页面中

    ```
    const canvas = renderer.domElement
    document.body.appendChild(canvas)                       // 关联html页面中的body标签
    ```

  - 创建场景

    ```
    const scene = new THREE.Scene();                        // 创建场景
    ```

  - 创建摄像头

    ```
    const camera = new THREE.PerspectiveCamera(90,window.innerWidth/window.innerHeight, 0.1,100);  //创建摄像头
    camera.position.set(0,0,2);                             // 设置摄像机的位置
    ```

  - 增加控制

    ```
    new OrbitControls(camera,canvas)           // 通过鼠标控制场景中的角度和位置
    ```

  - 创建立方体和材质

    ```
    const boxGeo = new THREE.BoxGeometry(1,1,1);            // 创建一个立方体
    const materials = []                                    // 立方体的材质数组
    const texture_left = new THREE.TextureLoader().load("./assets/imgs/scene_left.jpg")  // 加载图片
    materials.push(new THREE.MeshBasicMaterial({map:texture_left,side:THREE.BackSide}))
    ```

  - 重点注意材质的渲染是有方向的，默认只渲染前面，而我们这个案例中需要设置成渲染后面

    ```
    new THREE.MeshBasicMaterial({
        map:texture_left,
        side:THREE.BackSide
    })
    ```

  - 创建网格，注意在three中你能看到的都是网格

    ```
    const box = new THREE.Mesh(boxGeo,materials);           // 创建网格
    box.position.set(0,0,0);                                // 设置网格坐标
    ```
  
  - 将网格加入到场景中

    ```
    scene.add(box)  // 把立方体加入到场景中                    //  将网格添加到场景中
    ```

  - 最终的渲染

    ```
    renderer.render(scene,camera) // 渲染器渲染场景
    ```

  - 如何结合到vue项目中

    - 安装three.js

      ```
      npm install --save three
      ```
    
    - 创建页面 src/components/pages/VrRoom.vue

    - 配置路由

      ```
      routes:[
        {
            path:"/vrroom",
            component:VrRoom
        }
      ]
      ```

    - 使用虚拟dom和生命周期钩子函数的知识，把你的js代码和template模版关联起来

      ```
      <script setup>
      import {ref,onMounted} from "vue"
      const vr = ref(null)  //注意！ 此处的vr必须和template中的ref="vr"一致
      onMounted(() => {
        const div = vr.value
        console.log(div)   //<div></div>
      })
      <script>
      <template>
        <div ref="vr"></div>
      </template>
      ```
    - 将vrroom的代码直接复制到onMounted中

    - 将vrroom的图片素材复制到项目中，并修改相应的路径