<script setup>
import TopBar from '@/components/topbar/TopBar.vue'
import {useRouter} from "vue-router"
import {useStore} from "vuex"
import {inject} from "vue"

const message = inject("$message")
const router = useRouter()
const store = useStore()

const back = () => {
    store.commit("pageDirection/setDirection","backward")
    router.go(-1)
};

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import "@/assets/imgs_room/scene_left.jpg"
// import "@/assets/imgs_room/scene_right.jpg"
// import "@/assets/imgs_room/scene_top.jpg"
// import "@/assets/imgs_room/scene_bottom.jpg"
// import "@/assets/imgs_room/scene_front.jpg"
// import "@/assets/imgs_room/scene_back.jpg"
import shop_scene from "@/assets/imgs/shop_scene.jpeg";
import hot from "@/assets/imgs/hot.png";
import {ref,onMounted} from "vue";
const vr = ref(null)

onMounted(() => {
    const content = vr.value
    /*
        three.js 封装了webgl
    */ 
    const renderer = new THREE.WebGLRenderer();             // 创建渲染器
    renderer.setSize(window.innerWidth,window.innerHeight); // 设置尺寸和像素
    content.appendChild(renderer.domElement)          // 关联html页面中的body标签

    const scene = new THREE.Scene();                        // 创建场景
    const camera = new THREE.PerspectiveCamera(90,window.innerWidth/window.innerHeight, 0.1,100);  //创建摄像头
    camera.position.set(0,0,2);                             // 设置摄像机的位置

    new OrbitControls(camera,renderer.domElement)           // 通过鼠标控制场景中的角度和位置


//    {     
//         const boxGeo = new THREE.BoxGeometry(1,1,1);            // 创建一个立方体
//         const materials = []                                    // 立方体的材质数组
//         const texture_left = new THREE.TextureLoader().load("src/assets/imgs_room/scene_left.jpg")  // 加载图片
//         materials.push(new THREE.MeshBasicMaterial({map:texture_left,side:THREE.BackSide}))
//         const texture_right = new THREE.TextureLoader().load("src/assets/imgs_room/scene_right.jpg")  // 加载图片
//         materials.push(new THREE.MeshBasicMaterial({map:texture_right,side:THREE.BackSide}))
//         const texture_top = new THREE.TextureLoader().load("src/assets/imgs_room/scene_top.jpg")  // 加载图片
//         materials.push(new THREE.MeshBasicMaterial({map:texture_top,side:THREE.BackSide}))
//         const texture_bottom = new THREE.TextureLoader().load("src/assets/imgs_room/scene_bottom.jpg")  // 加载图片
//         materials.push(new THREE.MeshBasicMaterial({map:texture_bottom,side:THREE.BackSide}))
//         const texture_front = new THREE.TextureLoader().load("src/assets/imgs_room/scene_front.jpg")  // 加载图片
//         materials.push(new THREE.MeshBasicMaterial({map:texture_front,side:THREE.BackSide}))
//         const texture_back = new THREE.TextureLoader().load("src/assets/imgs_room/scene_back.jpg")  // 加载图片
//         materials.push(new THREE.MeshBasicMaterial({map:texture_back,side:THREE.BackSide}))
//         // materials.push(new THREE.MeshBasicMaterial({color:0xff0000}))
//         // materials.push(new THREE.MeshBasicMaterial({color:0x00ff00}))
//         // materials.push(new THREE.MeshBasicMaterial({color:0x0000ff}))
//         // materials.push(new THREE.MeshBasicMaterial({color:0xffff00}))
//         // materials.push(new THREE.MeshBasicMaterial({color:0xff00ff}))
//         // materials.push(new THREE.MeshBasicMaterial({color:0x00ffff}))
//         const box = new THREE.Mesh(boxGeo,materials);           // 创建网格
//         box.position.set(0,0,0);                                // 设置网格坐标
//         // scene.add(box)  // 把立方体加入到场景中                    //  将网格添加到场景中
//     }

    {
        var sphereGeometry = new THREE.SphereGeometry(1, 50, 50);
        var texture = new THREE.TextureLoader().load(shop_scene);
        var sphereMaterial = new THREE.MeshBasicMaterial({map: texture,side:THREE.BackSide});
        var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
        sphere.position.set(0,0,0);    
        scene.add(sphere);
    }

    camera.position.set(0,0,0.2)
    var hotPoints=[
        {
            position:{
                x:0,
                y:0,
                z:-0.15
            },
            detail:{
                "title":"信息点1"
            }
        },
        {
            position:{
                x:-0.2,
                y:-0.05,
                z:0.2
            },
            detail:{
                "title":"信息点2"
            }
        }
    ];
    const initPoints = () => {
        const pointTexture = new THREE.TextureLoader().load(hot)
        const material = new THREE.SpriteMaterial({map:pointTexture})
        const poiObjects = [];
        for(let i =0 ; i< hotPoints.length;i++){
            const sprite = new THREE.Sprite(material);
            sprite.scale.set(0.1,0.1,0.1)
            sprite.position.set(hotPoints[i].position.x,hotPoints[i].position.y,hotPoints[i].position.z)
            scene.add(sprite);
            sprite.detail = hotPoints[i].detail;
            poiObjects.push(sprite)
        }
        renderer.domElement.addEventListener("click",function(event){
            event.preventDefault();
            console.log(100000)
            const raycaster = new THREE.Raycaster();
            const mouse = new THREE.Vector2();

            mouse.x = (event.clientX / document.body.clientWidth) * 2 - 1;
            mouse.y = - (event.clientY / document.body.clientHeight) * 2 + 1;

            raycaster.setFromCamera(mouse,camera)

            var intersects = raycaster.intersectObjects( poiObjects );
            if(intersects.length>0){
                console.log(intersects)
                message.info("点击了热点"+intersects[0].object.detail.title);
            }
        })
    }
    initPoints()
    const render = () => {
        renderer.render(scene,camera) // 渲染器渲染场景
        requestAnimationFrame(render)
    }

    render()                                                 // 用递归的方式渲染页面
})

</script>

<template>
    <div>
        <top-bar>
            <template v-slot:left>
                <div class="iconfont icon-fanhui1" @click="back" style="font-size:23px;"></div>
            </template>
            <template v-slot:middle>
                <div >店铺实景</div>
            </template>
        </top-bar>
        <div ref="vr"></div>
    </div>

</template>