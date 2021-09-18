import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./assets/imgs_room/scene_left.jpg"
import "./assets/imgs_room/scene_right.jpg"
import "./assets/imgs_room/scene_top.jpg"
import "./assets/imgs_room/scene_bottom.jpg"
import "./assets/imgs_room/scene_front.jpg"
import "./assets/imgs_room/scene_back.jpg"

/*
    three.js 封装了webgl
*/ 
const renderer = new THREE.WebGLRenderer();             // 创建渲染器
renderer.setSize(window.innerWidth,window.innerHeight); // 设置尺寸和像素
document.body.appendChild(renderer.domElement)          // 关联html页面中的body标签

const scene = new THREE.Scene();                        // 创建场景
const camera = new THREE.PerspectiveCamera(90,window.innerWidth/window.innerHeight, 0.1,100);  //创建摄像头
camera.position.set(0,0,2);                             // 设置摄像机的位置

new OrbitControls(camera,renderer.domElement)           // 通过鼠标控制场景中的角度和位置


const boxGeo = new THREE.BoxGeometry(1,1,1);            // 创建一个立方体
const materials = []                                    // 立方体的材质数组
const texture_left = new THREE.TextureLoader().load("./assets/imgs/scene_left.jpg")  // 加载图片
materials.push(new THREE.MeshBasicMaterial({map:texture_left}))
materials.push(new THREE.MeshBasicMaterial({color:0x00ff00}))
materials.push(new THREE.MeshBasicMaterial({color:0x0000ff}))
materials.push(new THREE.MeshBasicMaterial({color:0xffff00}))
materials.push(new THREE.MeshBasicMaterial({color:0xff00ff}))
materials.push(new THREE.MeshBasicMaterial({color:0x00ffff}))
// materials.push(new THREE.MeshBasicMaterial({color:0xff0000}))
// materials.push(new THREE.MeshBasicMaterial({color:0x00ff00}))
// materials.push(new THREE.MeshBasicMaterial({color:0x0000ff}))
// materials.push(new THREE.MeshBasicMaterial({color:0xffff00}))
// materials.push(new THREE.MeshBasicMaterial({color:0xff00ff}))
// materials.push(new THREE.MeshBasicMaterial({color:0x00ffff}))
const box = new THREE.Mesh(boxGeo,materials);           // 创建网格
box.position.set(0,0,0);                                // 设置网格坐标
scene.add(box)  // 把立方体加入到场景中                    //  将网格添加到场景中

const render = () => {
    renderer.render(scene,camera) // 渲染器渲染场景
    requestAnimationFrame(render)
}

render()                                                 // 用递归的方式渲染页面




