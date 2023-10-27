// webpack脚手架中的包管理模式
// webpack 自己"重写"了一套包管理语法，所以你会觉得它同时“cjs”和“esm”的语法
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js"
import front from "./assets/scene_front.jpeg"
import back from "./assets/scene_back.jpeg"
import right from "./assets/scene_right.jpeg"
import left from "./assets/scene_left.jpeg"
import top from "./assets/scene_top.jpeg"
import bottom from "./assets/scene_bottom.jpeg"

const renderer = new THREE.WebGLRenderer();             // 渲染器
const canvas = renderer.domElement;                     // <canvas></canvas>
renderer.setSize(window.innerWidth, window.innerHeight) // 设置渲染器的尺寸
document.body.appendChild(canvas)                       // 和html页面关联

const scene = new THREE.Scene();                        // 创建要给场景
// const camera = new THREE.PerspectiveCamera(视觉角度,镜头宽高比,近焦,远焦)
const camera = new THREE.PerspectiveCamera(90,window.innerWidth/ window.innerHeight,0.1,100)

camera.position.set(0,0,2)  // 设置镜头位置，模拟我们看屏幕的位置，让它在z轴离我们眼睛近，但是朝向是朝屏幕"里面"

new OrbitControls(camera,canvas)

const boxGeo = new THREE.BoxGeometry()  // 创建要给立方体,"房间"
const materails = []                    // 房间6个面的“材料”  left right top bottom front back

// materails.push(new THREE.MeshBasicMaterial({color:0xff0000,side:THREE.BackSide}))
// materails.push(new THREE.MeshBasicMaterial({color:0x00ff00,side:THREE.BackSide}))
// materails.push(new THREE.MeshBasicMaterial({color:0x0000ff,side:THREE.BackSide}))
// materails.push(new THREE.MeshBasicMaterial({color:0xffff00,side:THREE.BackSide}))
// materails.push(new THREE.MeshBasicMaterial({color:0xff00ff,side:THREE.BackSide}))
// materails.push(new THREE.MeshBasicMaterial({color:0x00ffff,side:THREE.BackSide}))

materails.push(new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(right),side:THREE.BackSide}))
materails.push(new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(left),side:THREE.BackSide}))
materails.push(new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(top),side:THREE.BackSide}))
materails.push(new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(bottom),side:THREE.BackSide}))
materails.push(new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(back),side:THREE.BackSide}))
materails.push(new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(front),side:THREE.BackSide}))

const box = new THREE.Mesh(boxGeo,materails)
box.position.set(0,0,0)
scene.add(box)
camera.position.set(0,0,0.1)  // 设置镜头位置，模拟我们看屏幕的位置，让我们进入房间内部

// // 仅绘画一次
// renderer.render(scene,camera)

const myRender = () => {
    renderer.render(scene,camera)
    requestAnimationFrame(myRender)
    // setInterval(myRender,1000/60)
}

myRender()



