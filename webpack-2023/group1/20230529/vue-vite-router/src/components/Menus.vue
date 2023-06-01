<template>

  <ul>
    <li><router-link to="/">main page</router-link></li>
    <li><router-link to="/home">home page</router-link></li>
    <li><router-link to="/login">login page</router-link></li>
  </ul>
  <br>
  <ul>
    <li><button @click="goto('/')">MAIN</button></li>
    <li><button @click="goto('/home')">HOME</button></li>
    <li><button @click="goto('/login')">LOGIN</button></li>
  </ul>
  <br>
  <ul>
    <li><a href="#" @click.prevent="goto('/',$event)">MAIN</a></li>
    <li><a href="#" @click.prevent="goto('/home',$event)">HOME</a></li>
    <li><a href="#" @click.prevent="goto('/login',$event)">LOGIN</a></li>
  </ul>
</template>

<script setup>
import {useRoute,useRouter} from "vue-router"


const route = useRoute()
const router = useRouter()

const goto = (path,e) => {
    // console.log(e.preventDefault())
    // console.log(e.target.preventDefault())
    router.push({
        path
    })
    
}

</script>