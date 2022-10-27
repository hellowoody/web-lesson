<script setup>
import { getCurrentInstance,onMounted } from "vue"
import * as echarts from 'echarts';

const instance = getCurrentInstance();

// gql 

const data = {}

onMounted(() => {
    var chartDom = instance.refs.ec01;
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
            {
                name: 'Pressure',
                type: 'gauge',
                progress: {
                    show: true
                },
                detail: {
                    valueAnimation: true,
                    formatter: '{value}'
                },
                data: [
                    {
                    value: 50,
                    name: 'SCORE'
                    }
                ]
            }
        ]
    };

    option && myChart.setOption(option);


    var chartDom02 = instance.refs.ec02;
    var myChart02 = echarts.init(chartDom02);
    var option02;

    option02 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
            }
        },
        legend: {},
        grid: {
            left: data.a,
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['鞋', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        series: [
            {
            name: 'Direct',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
            name: 'Mail Ad',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
            name: 'Affiliate Ad',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
            name: 'Video Ad',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [150, 212, 201, 154, 190, 330, 410]
            },
            {
            name: 'Search Engine',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320]
            }
        ]
    };

    option02 && myChart02.setOption(option02);
})

</script>

<template>
    <h1>Home</h1>
    <div style="height:500px;" ref="ec01"></div>
    <div style="height:500px;" ref="ec02"></div>
</template>