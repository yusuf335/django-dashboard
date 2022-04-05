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


// gauge chart

var dom = document.getElementById("gauge-chart");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
  },
    toolbox: {
        feature: {
            restore: {title: "Refresh"},
            saveAsImage: {title: "Download Image"}
        }
    },
    series: [
        {
            name: '',
            type: 'gauge',
            detail: {formatter:'{value}%', fontSize: 25, offsetCenter: ["0", "70%"],},
            axisLine: { 
                lineStyle: {       
                    color: [[0.2, '#f46a6a'],[0.4, '#f1734f'],[0.6, '#f1b44c'],[0.8, '#556ee6'],[1, '#34c38f']], 
                    width: 20
                }
            },
            data: [{value: 80,}]
        }
    ]
};

// setInterval(function () {
//     option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
//     myChart.setOption(option, true);
// },2000);
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}




// Side Bar Graph

var dom = document.getElementById("side-bar-graph");
var myChart = echarts.init(dom);
var app = {};

var option;

var ROOT_PATH = 'http://ar-mechatronics.herokuapp.com/static/images/'

const weatherIcons = {
  Sunny: ROOT_PATH + 'under-construction.png',
  Cloudy: ROOT_PATH + 'seeding.png',
  Showers: ROOT_PATH + 'recycle.png'
};
const seriesLabel = {
  show: true
};
option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['Tahap Kepentingan', 'Tahap Kepuasan',]
  },
  grid: {
    left: 100
  },
  toolbox: {
    show: true,
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'value',
    // name: 'Days',
    axisLabel: {
      formatter: '{value}'
    }
  },
  yAxis: {
    type: 'category',
    inverse: true,
    data: ['Jalan', 'Alam_sekitar', 'Recycling_center'],
    axisLabel: {
      formatter: function (value) {
        return '{' + value + '| }\n{value|' + value + '}';
      },
      margin: 5,
      rich: {
        value: {
          lineHeight: 30,
          align: 'center'
        },
        Jalan: {
          height: 40,
          align: 'center',
          backgroundColor: {
            image: weatherIcons.Sunny
          }
        },
        Alam_sekitar: {
          height: 40,
          align: 'center',
          backgroundColor: {
            image: weatherIcons.Cloudy
          }
        },
        Recycling_center: {
          height: 40,
          align: 'center',
          backgroundColor: {
            image: weatherIcons.Showers
          }
        }
      }
    }
  },
  series: [
    {
      name: 'Tahap Kepentingan',
      type: 'bar',
      data: [165, 170, 30],
      label: seriesLabel,
      markPoint: {
        symbolSize: 1,
        symbolOffset: [0, '50%'],
      }
    },
    {
      name: 'Tahap Kepuasan',
      type: 'bar',
      label: seriesLabel,
      data: [150, 105, 110]
    },
  ]
};


if (option && typeof option === 'object') {
    myChart.setOption(option);
}





var dom = document.getElementById("bar-graph");
var myChart = echarts.init(dom);
var app = {};

var option;

const data = [90, 88, 85, 84, 84, 80, 80, 76, 76];
// for (let i = 0; i < 9; ++i) {
//   data.push(Math.round(Math.random() * 2));
// }
option = {
  xAxis: {
    max: 'dataMax'
  },
  yAxis: {
    type: 'category',
    data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
    inverse: true,
    animationDuration: 300,
    animationDurationUpdate: 300,
    max: 8 // only the largest 3 bars will be displayed
  },
  series: [
    {
      realtimeSort: true,
      name: 'X',
      type: 'bar',
      data: data,
      label: {
        show: true,
        position: 'right',
        valueAnimation: true
      }
    }
  ],
  legend: {
    show: true
  },
  animationDuration: 0,
  animationDurationUpdate: 3000,
  animationEasing: 'linear',
  animationEasingUpdate: 'linear'
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}





var dom = document.getElementById("bar-graph-a");
var myChart = echarts.init(dom);
var app = {};

var option;

const dataa = [90, 87, 85, 81, 75, 75];
// for (let i = 0; i < 9; ++i) {
//   data.push(Math.round(Math.random() * 2));
// }
option = {
  xAxis: {
    max: 'dataMax'
  },
  yAxis: {
    type: 'category',
    data: ['A', 'B', 'C', 'D', 'E', 'F'],
    inverse: true,
    animationDuration: 300,
    animationDurationUpdate: 300,
    max: 5 // only the largest 3 bars will be displayed
  },
  series: [
    {
      realtimeSort: true,
      name: 'X',
      type: 'bar',
      data: data,
      label: {
        show: true,
        position: 'right',
        valueAnimation: true
      }
    }
  ],
  legend: {
    show: true
  },
  animationDuration: 0,
  animationDurationUpdate: 3000,
  animationEasing: 'linear',
  animationEasingUpdate: 'linear'
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}



var dom = document.getElementById("bar-graph-b");
var myChart = echarts.init(dom);
var app = {};

var option;

const datab = [98, 87, 86, 80, 75, 70];
// for (let i = 0; i < 9; ++i) {
//   data.push(Math.round(Math.random() * 2));
// }
option = {
  xAxis: {
    max: 'dataMax'
  },
  yAxis: {
    type: 'category',
    data: ['A', 'B', 'C', 'D', 'E', 'F'],
    inverse: true,
    animationDuration: 300,
    animationDurationUpdate: 300,
    max: 5 // only the largest 3 bars will be displayed
  },
  series: [
    {
      realtimeSort: true,
      name: 'X',
      type: 'bar',
      data: data,
      label: {
        show: true,
        position: 'right',
        valueAnimation: true
      }
    }
  ],
  legend: {
    show: true
  },
  animationDuration: 0,
  animationDurationUpdate: 3000,
  animationEasing: 'linear',
  animationEasingUpdate: 'linear'
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}





var dom = document.getElementById("radar");
var myChart = echarts.init(dom);
var app = {};

var option;



option = {
  legend: {
    data: ['Skor', 'Purata']
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: 'A', max: 6500 },
      { name: 'B', max: 16000 },
      { name: 'C', max: 30000 },
    ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: 'Skor'
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: 'Purata'
        }
      ]
    }
  ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}