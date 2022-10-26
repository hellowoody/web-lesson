<script setup>
import { onMounted,getCurrentInstance,inject } from "vue"
import TopBar from "@/components/topbar/TopBar.vue";
import { useRouter } from "vue-router"
import { useState } from "@/store/pageDirection"
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import shop_scene from "@/assets/imgs/shop_scene.jpeg"
import hot from "@/assets/imgs/hot.png"
// import scene_back from "@/assets/imgs/scene_back.jpeg"
// import scene_bottom from "@/assets/imgs/scene_bottom.jpeg"
// import scene_top from "@/assets/imgs/scene_top.jpeg"
// import scene_left from "@/assets/imgs/scene_left.jpeg"
// import scene_right from "@/assets/imgs/scene_right.jpeg"
// import scene_front from "@/assets/imgs/scene_front.jpeg"
import Modal from 'ant-design-vue/lib/modal';

const instance = getCurrentInstance()    
const state = useState()
const router = useRouter()
const message = inject("$message")

const back = () => {
    state.setDirection("backward")
    router.go(-1)
}

onMounted(() => {
    // console.log("onMounted 生命周期事件发生，可以在这个函数中拿到渲染之后的dom元素")
    // console.log(instance.refs.myContent)
    const renderer = new THREE.WebGLRenderer() // 创建了一个渲染器
    const canvas = renderer.domElement // 渲染器中的 canvas 标签
    renderer.setSize(window.innerWidth,window.innerHeight);
    instance.refs.myContent.appendChild(canvas)  // 将渲染器中的canvas追加到页面中
    
    const scene = new THREE.Scene() // 创建一个场景
    // 创建一个相机，以及配置相机镜头的参数
    const camera = new THREE.PerspectiveCamera(90,window.innerWidth/window.innerHeight,0.1,100);

    camera.position.set(0,0,2) // 相机放的位置

    new OrbitControls(camera,canvas) // 让你的场景有交互感
    // 正方体效果
    // {
    //     const boxGeo = new THREE.BoxGeometry();
    //     const materails = []
    //     materails.push(new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(scene_left),side:THREE.BackSide}))
    //     materails.push(new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(scene_right),side:THREE.BackSide}))
    //     materails.push(new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(scene_top),side:THREE.BackSide}))
    //     materails.push(new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(scene_bottom),side:THREE.BackSide}))
    //     materails.push(new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(scene_front),side:THREE.BackSide}))
    //     materails.push(new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(scene_back),side:THREE.BackSide}))
    //     // materails.push(new THREE.MeshBasicMaterial({color:"#ff0000",side:THREE.BackSide}))
    //     // materails.push(new THREE.MeshBasicMaterial({color:"#00ff00",side:THREE.BackSide}))
    //     // materails.push(new THREE.MeshBasicMaterial({color:"#0000ff",side:THREE.BackSide}))
    //     // materails.push(new THREE.MeshBasicMaterial({color:"#00ffff",side:THREE.BackSide}))
    //     // materails.push(new THREE.MeshBasicMaterial({color:"#ff00ff",side:THREE.BackSide}))
    //     // materails.push(new THREE.MeshBasicMaterial({color:"#ffff00",side:THREE.BackSide}))

    //     const box = new THREE.Mesh(boxGeo,materails)  // 创建带纹理的正方体
    //     box.position.set(0,0,0) // 设置正方体的位置
    //     camera.position.set(0,0,0.1) // 相机放的位置
    //     scene.add(box)
    // }

    // 球体效果
    const sphereGeo = new THREE.SphereGeometry(1,50,50);
    const texture = new THREE.TextureLoader().load(shop_scene);
    const sphereMaterail = new THREE.MeshBasicMaterial({map:texture,side:THREE.BackSide})
    const sphere = new THREE.Mesh(sphereGeo,sphereMaterail)
    sphere.position.set(0,0,0)
    camera.position.set(0,0,0.1) // 相机放的位置
    scene.add(sphere)

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
        // 纹理 -》 texture
        // 材料 -》 material
        // 几何体 -》 gemotry
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
                // Modal.confirm({
                //     title:"确定要跳转到这个商品的详情页面么?",
                //     okText:"确定",
                //     cancelText:"取消",
                //     centered:true,
                //     onOk(){
                //         state.setDirection("forward")
                //         router.push({
                //             name:"gooddetail",
                //             params:{
                //                 id:intersects[0].object.detail.id,
                //                 type:intersects[0].object.detail.type
                //             }
                //         })
                //     },
                //     onCancel(){}
                // })
                createConfirm({
                    container:instance.refs.myContent,
                    x:e.clientX,
                    y:e.clientY,
                    title:"确定要跳转到这个商品的详情页面么?",
                    ok:() => console.log("ok")
                })

            }
        })
    }

    initPoints(hotPoints)


    // 如何将以上的内容 渲染在canvas
    const myRender = () => {
        renderer.render(scene,camera) // 渲染器中渲染方法 需要渲染的场景和摄像机
        requestAnimationFrame(myRender)
    }

    myRender()
})


const createConfirm = (options) => {
    const {container,x,y,title,ok} = options
    if(container.querySelector("div")){
        container.removeChild(container.querySelector("div"))
    }
   
    const div = document.createElement("div")
    div.style.position = "fixed"
    div.style.width = "180px"
    div.style.height = "100px"
    div.style.backgroundColor = "#fafafa"
    div.style.borderRadius = "8px"
    div.style.left = (x-10) + "px" 
    div.style.top = (y-100) + "px" 
    div.style.boxShadow = "0px 1px 8px rgb(0 0 0 / 0.1)"
    div.style.padding = "8px"
    div.style.boxSizing = "border-box"
    div.style.fontSize = "12px"

    const cancelDefault = e => e.target.parentElement.parentNode.remove()

    div.innerHTML = `
        <div style="font-weight:bold">${title}</div>
        <div style="display:flex;justify-content:flex-end;margin-top:12px">
            <div style="margin-right:12px;border-radius:6px;padding:6px;box-shadow:0px 1px 8px rgb(0 0 0 / 0.1)" onclick="(${cancelDefault})(event)">取消</div>
            <div style="color:#B620E0;border-radius:6px;padding:6px;box-shadow:0px;1px;8px;rgb(0 0 0 / 0.1)" onclick='( ${ok})()'>确定</div>
        </div>
    `
    container.appendChild(div)
}

</script>

<template>
    <div>
        <top-bar style="box-shadow:unset;">
            <template v-slot:left>
                <span class="iconfont icon-xiangzuojiantou" @click="back"></span>
            </template>
            <template v-slot:middle>
                <div>店铺情况</div>
            </template>
        </top-bar>
        <div class="vr-room-content" ref="myContent">
        </div>
    </div>
</template>
<style scoped>
.vr-room-content {
    height:calc(100vh - 65px);
}
</style>
    
  