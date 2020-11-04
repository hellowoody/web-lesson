<template>
    <!-- <template v-for="item in 20" :key="item">
        <div class="menu-item">菜单{{item}}</div>
    </template> -->
    <a-menu
        style="margin-top:24px;"
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
    >
      <a-sub-menu key="sub1" @titleClick="titleClick">
        <template v-slot:title>
          <span><MailOutlined /><span>Navigation One</span></span>
        </template>
        <a-menu-item-group key="g1">
          <template v-slot:title><QqOutlined /><span>Item 1</span></template>
          <a-menu-item key="1" @click="handleClick('goodmanagment')">Option 1</a-menu-item>
          <a-menu-item key="2" @click="handleClick('testmenu01')">Option 2</a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group key="g2" title="Item 2">
          <a-menu-item key="3">
            Option 3 {{a1}}
          </a-menu-item>
          <a-menu-item key="4">
            Option 4 {{a2}}
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-sub-menu key="sub2" @titleClick="titleClick">
        <template v-slot:title>
          <span><AppstoreOutlined /><span>Navigation Two</span></span>
        </template>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="7">
            Option 7
          </a-menu-item>
          <a-menu-item key="8">
            Option 8
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="sub4">
        <template v-slot:title>
          <span><SettingOutlined /><span>Navigation Three</span></span>
        </template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-menu-item key="11">Option 11</a-menu-item>
        <a-menu-item key="12">Option 12</a-menu-item>
      </a-sub-menu>
    </a-menu>
</template>

<script>
import { ref ,reactive,toRefs} from 'vue'
import { MailOutlined, QqOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { useGoto } from '/@/components/hooks/RouterHook.ts'

export default {
    name:"NavBar",
    components:{
        MailOutlined, 
        QqOutlined, 
        AppstoreOutlined, 
        SettingOutlined 
    },
    // data() {
    //     return {
    //         selectedKeys: ['1'],
    //         openKeys: ['sub1'],
    //     };
    // },
    setup(){
        const state = reactive({
            selectedKeys:['1'],
            openKeys:['sub1'],
        })
        const { goName } = useGoto()
        const handleClick = name => goName(name)
        const titleClick = e => console.log("titleclick",e)

        return {
            ...toRefs(state),
            handleClick, 
            titleClick
        }
    },
}

</script>

<style scoped>
.menu-item {
    width:100%;
    height:50px;
    display:flex;
    align-items: center;
    background-color: #fff;
    box-shadow: 1px 2px 8px rgb(0 0 0 /0.1);
    margin-bottom: 6px;
    padding-left:16px;
}
</style>