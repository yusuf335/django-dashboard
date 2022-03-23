/*
Template Name: naoc - Admin & Dashboard Template
Author: Themesbrand
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Echarts Init Js File
*/


// mix line & bar

var dom = document.getElementById("mix-line-bar");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = 'Data view';

option = {
    // Setup grid
    grid: {
        zlevel: 0,
        x: 80,
        y: 30,
        borderWidth: 0,
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgba(0,0,0,0)',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        orient: 'center',
        left: 0,
        top: 20,
        feature: {
          dataView: { readOnly: false, title: "Data View" },
          magicType: { type: ['line', 'bar'], title: {line: "For line chart", bar: "For bar chart"}},
          restore: { title: "restore" },
          saveAsImage: { title: "Download Image" }
        }
      },
    
    xAxis: [
        {
            type: 'category',
            data: ['Gelang Patah','Iskandar Puteri','Kangkar Pulai','Lima Kedai','Uly Choh','Skudai'],
            axisPointer: {
                type: 'shadow'
            },
            axisLine: {
                lineStyle: {
                  color: '#8791af'
                },
            },
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 100,
            interval: 10,
            axisLine: {
                lineStyle: {
                  color: '#8791af'
                },
            },
            splitLine: {
                lineStyle: {
                    color:"rgba(166, 176, 207, 0.1)"
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    visualMap: {
        top: 50,
        right: 10,
        pieces: [
          {
            gt: 89,
            lte: 100,
            color: '#93CE07'
          },
          {
            gt: 81,
            lte: 89,
            color: '#FC7D02'
          },
          {
            gt: 0,
            lte: 81,
            color: '#FD0100'
          },
        ],
        outOfRange: {
          color: '#999'
        }
      },
    series: [
        {
            name:'SATISFIED WITH LOCAL COUNCIL',
            type: 'bar',
            label: {
                show: true,
                position: 'top',
                
              },
            data:[90, 90, 87, 85, 82, 80]
        },
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}


// pie chart

var dom = document.getElementById("pie-chart");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Gelang Patah','Iskandar Puteri','Kangkar Pulai','Lima Kedai','Uly Choh','Skudai'],
        textStyle: {color: '#8791af'}
    },
    color: ['#f46a6a', '#34c38f', '#50a5f1', '#f1b44c', '#556ee6', '#93CE07'],
    series : [
        {
            name: 'Total sales',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:90, name:'Gelang Patah'},
                {value:90, name:'Iskandar Puteri'},
                {value:87, name:'Kangkar Pulai'},
                {value:85, name:'Lima Kedai'},
                {value:82, name:'Uly Choh'},
                {value:80, name:'Skudai'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}