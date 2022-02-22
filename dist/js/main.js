"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
import * as echarts from 'echarts';
var chartDom = document.querySelector('#chart');
var myChart = echarts.init(chartDom);
var colorList = ['#45aaf2', '#45aaf2', '#45aaf2', '#f7b731', '#45aaf2', '#45aaf2', '#45aaf2'];
var option = {
    grid: {
        top: 24,
        left: 16,
        bottom: 48,
        right: 16
    },
    xAxis: {
        type: 'category',
        data: ['TU', 'WE', 'TH', 'FR', 'SA', 'SU', 'MO'],
        axisTick: false,
        axisLine: false
    },
    yAxis: {
        show: false
    },
    series: [
        {
            data: [80, 50, 40, 90, 70, 90, 50],
            type: 'bar',
            showBackground: true,
            barWidth: 5,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)',
                borderRadius: [50, 50, 0, 0]
            },
            showSymbol: false,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colorList[params.dataIndex];
                    },
                    barBorderRadius: [50, 50, 0, 0],
                    label: {
                        show: true,
                        fontSize: 8,
                        position: 'bottom',
                        color: 'inherit',
                        formatter: '{b}',
                        offset: [0, 10]
                    }
                }
            }
        }
    ]
};
option && myChart.setOption(option);
