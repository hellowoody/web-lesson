<template>
    <layout>
        <template v-slot:header>
            <top-bar>
                <head-bar></head-bar>
            </top-bar>
        </template>
        <template v-slot:sider>
            <side-bar>
                <nav-bar></nav-bar>
            </side-bar>
        </template>
        <template v-slot:container>
            <content>
                <router-view></router-view>
            </content>
        </template>
    </layout>
</template>