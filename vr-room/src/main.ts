import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import scene_back from "./assets/imgs/scene_back.jpeg"
import scene_bottom from "./assets/imgs/scene_bottom.jpeg"
import scene_top from "./assets/imgs/scene_top.jpeg"
import scene_left from "./assets/imgs/scene_left.jpeg"
import scene_right from "./assets/imgs/scene_right.jpeg"
import scene_front from "./assets/imgs/scene_front.jpeg"

// three.js 基于 webgl 做了封装
const renderer = new THREE.WebGLRenderer() // 创建了一个渲染器
const canvas = renderer.domElement // 渲染器中的 canvas 标签
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(canvas)  // 将渲染器中的canvas追加到页面中

const scene = new THREE.Scene() // 创建一个场景
// 创建一个相机，以及配置相机镜头的参数
const camera = new THREE.PerspectiveCamera(90,window.innerWidth/window.innerHeight,0.1,100);

camera.position.set(0,0,2) // 相机放的位置

new OrbitControls(camera,canvas) // 让你的场景有交互感

const boxGeo = new THREE.BoxGeometry();
const materails:Array<any> = []
materails.push(new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(scene_left),side:THREE.BackSide}))
materails.push(new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(scene_right),side:THREE.BackSide}))
materails.push(new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(scene_top),side:THREE.BackSide}))
materails.push(new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(scene_bottom),side:THREE.BackSide}))
materails.push(new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(scene_front),side:THREE.BackSide}))
materails.push(new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(scene_back),side:THREE.BackSide}))
// materails.push(new THREE.MeshBasicMaterial({color:"#ff0000",side:THREE.BackSide}))
// materails.push(new THREE.MeshBasicMaterial({color:"#00ff00",side:THREE.BackSide}))
// materails.push(new THREE.MeshBasicMaterial({color:"#0000ff",side:THREE.BackSide}))
// materails.push(new THREE.MeshBasicMaterial({color:"#00ffff",side:THREE.BackSide}))
// materails.push(new THREE.MeshBasicMaterial({color:"#ff00ff",side:THREE.BackSide}))
// materails.push(new THREE.MeshBasicMaterial({color:"#ffff00",side:THREE.BackSide}))

const box = new THREE.Mesh(boxGeo,materails)  // 创建带纹理的正方体
box.position.set(0,0,0) // 设置正方体的位置
camera.position.set(0,0,0.1) // 相机放的位置
scene.add(box)

// 如何将以上的内容 渲染在canvas
const myRender = () => {
    renderer.render(scene,camera) // 渲染器中渲染方法 需要渲染的场景和摄像机
    requestAnimationFrame(myRender)
}

myRender()
