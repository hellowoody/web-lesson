<template>
    <div>
        <top-bar>
            <template v-slot:left>
                <span class="iconfont icon-fanhuijiantou" style="font-size:20px;" @click="back"></span>
            </template>
            <template v-slot:middle>
                <span>虚拟探店</span>
            </template>
        </top-bar>
        <div class="content" ref="room_div"></div>
    </div>
</template>

<script setup>
import { onMounted,getCurrentInstance } from "vue"
import { useRouter } from "vue-router"
import { useState } from "@/store/pageDirection.js"
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js"
import shop_scene from "@/assets/imgs/shop_scene.jpeg"
import hot from "@/assets/imgs/hot.png"
// import front_screen from "@/assets/imgs/scene_front.jpeg"
// import back_screen from "@/assets/imgs/scene_back.jpeg"
// import right_screen from "@/assets/imgs/scene_right.jpeg"
// import left_screen from "@/assets/imgs/scene_left.jpeg"
// import top_screen from "@/assets/imgs/scene_top.jpeg"
// import bottom_screen from "@/assets/imgs/scene_bottom.jpeg"
import Modal from 'ant-design-vue/lib/modal';

const router = useRouter()
const state = useState()
const instance = getCurrentInstance()
console.log(instance)

const back = () => {
    state.setDirection("backward")
    router.go(-1)
}

onMounted(() => {
    // 在mounted生命周期函数中 你肯定能拿到dom标签
    const renderer = new THREE.WebGLRenderer();             // 渲染器
    const canvas = renderer.domElement;                     // <canvas></canvas>
    renderer.setSize(window.innerWidth, window.innerHeight) // 设置渲染器的尺寸
    const room_div = instance.refs.room_div
    room_div.appendChild(canvas)                       // 和html页面关联

    const scene = new THREE.Scene();                        // 创建要给场景
    // const camera = new THREE.PerspectiveCamera(视觉角度,镜头宽高比,近焦,远焦)
    const camera = new THREE.PerspectiveCamera(90,window.innerWidth/ window.innerHeight,0.1,100)

    camera.position.set(0,0,2)  // 设置镜头位置，模拟我们看屏幕的位置，让它在z轴离我们眼睛近，但是朝向是朝屏幕"里面"

    new OrbitControls(camera,canvas)
    // 正方体的解决方案 必需要有6张图
    // const boxGeo = new THREE.BoxGeometry()  // 创建要给立方体,"房间"
    // const materails = []                    // 房间6个面的“材料”  left right top bottom front back

    // materails.push(new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(right_screen),side:THREE.BackSide}))
    // materails.push(new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(left_screen),side:THREE.BackSide}))
    // materails.push(new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(top_screen),side:THREE.BackSide}))
    // materails.push(new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(bottom_screen),side:THREE.BackSide}))
    // materails.push(new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(back_screen),side:THREE.BackSide}))
    // materails.push(new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(front_screen),side:THREE.BackSide}))

    // const box = new THREE.Mesh(boxGeo,materails)
    // box.position.set(0,0,0)
    // scene.add(box)

    // 球体解决方案 一张图片（360度的全景图片）
    const sphereGeo = new THREE.SphereGeometry(1,50,50)
    const texture = new THREE.TextureLoader().load(shop_scene) 
    const sphereMaterial = new THREE.MeshBasicMaterial({map:texture,side:THREE.BackSide})
    const sphere = new THREE.Mesh(sphereGeo,sphereMaterial)
    sphere.position.set(0,0,0)
    scene.add(sphere)

    camera.position.set(0,0,0.1)  // 设置镜头位置，模拟我们看屏幕的位置，让我们进入房间内部
// 可交互的
const hotPoints = [
        {
            pos:{
                x:0,
                y:0,
                z:-0.15
            },
            detail:{
                id:"21",
                type:"04"

            }
        },
        {
            pos:{
                x:-0.2,
                y:-0.05,
                z:0.2
            },
            detail:{
                id:"1",
                type:"03"
            }
        }
    ]

    const initPoints = (hp) => {
        const pointTexture = new THREE.TextureLoader().load(hot)
        const material = new THREE.SpriteMaterial({map:pointTexture})
        const objs = []
        for(const hot of hp){
            const sprite = new THREE.Sprite(material)
            sprite.position.set(hot.pos.x,hot.pos.y,hot.pos.z)
            sprite.scale.set(0.1,0.1,0.1);
            sprite.detail = hot.detail
            scene.add(sprite)
            objs.push(sprite)
        }

        renderer.domElement.addEventListener("click",function(e){
            // console.log(e)
            const raycaster = new THREE.Raycaster()
            const mouse = new THREE.Vector2()

            mouse.x = (e.clientX / document.body.clientWidth) * 2 - 1;
            mouse.y = - (e.clientY / document.body.clientHeight) * 2 + 1;

            raycaster.setFromCamera(mouse,camera)

            const intersects = raycaster.intersectObjects(objs)

            if(intersects.length > 0){
                // console.log(intersects)
                // console.log("匹配上了")
                // message.success("你要选择这个商品么?")
                Modal.confirm({
                    title:"确定要跳转到这个商品的详情页面么?",
                    okText:"确定",
                    cancelText:"取消",
                    centered:true,
                    okButtonProps:{
                        style:{
                            color:"#B620E0",
                            borderColor:"#B620E0"
                        }
                    },
                    okType:"default",
                    onOk(){
                        state.setDirection("forward")
                        router.push({
                            path:"/gooddetail",
                            query:{
                                id:intersects[0].object.detail.id,
                                name:intersects[0].object.detail.name,
                                type:intersects[0].object.detail.type
                            }
                        })
                    },
                    onCancel(){}
                })
            }
        })
    }

    initPoints(hotPoints)
    const myRender = () => {
        renderer.render(scene,camera)
        requestAnimationFrame(myRender)
        // setInterval(myRender,1000/60)
    }

    myRender()
})

</script>
<style scoped>
.content {
    height:calc(100vh - 65px);
}
</style>