var myLeftChart = echarts.init(document.getElementById('left-chart'), 'macarons');
var myRightChart = echarts.init(document.getElementById('right-chart'), 'macarons');
var myLeftBottomChart = echarts.init(document.getElementById('leftbottom-chart'), 'macarons');
var myRightBottomChart = echarts.init(document.getElementById('rightbottom-chart'), 'macarons');


leftoption = {
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
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['请假人数']
    },
    xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value',
        name: '本周请假人数',
        axisLabel: {
            formatter: '{value} 位'
        }
    },
    series: [{
        name: '请假人数',
        type: 'line',
        data: [2, 3, 1, 4, 9, ],
    }]
};

rightoption = {
    tooltip: {
        trigger: 'axis',

    },
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['请假人数']
    },
    xAxis: {
        type: 'category',
        data: ['一月', '二月', '三月', '四月', '五月']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} 位'
        }
    },
    series: [{
        name: '请假人数',
        data: [4, 10, 1, 2, 3],
        type: 'bar'
    }]
};

leftBottomoption = {
    title: {
        text: '各学院请假情况',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['数据学院', '信工学院', '法政学院', '商学院', '机能学院', '外国语学院', '生化学院', '土木学院', '传媒学院']
    },
    series: [{
        name: '人数统计',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [{
                value: 5,
                name: '数据学院'
            },
            {
                value: 10,
                name: '信工学院'
            },
            {
                value: 23,
                name: '法政学院'
            },
            {
                value: 15,
                name: '商学院'
            },
            {
                value: 28,
                name: '机能学院'
            },
            {
                value: 10,
                name: '外国语学院'
            },
            {
                value: 24,
                name: '生化学院'
            },
            {
                value: 15,
                name: '传媒学院'
            },
            {
                value: 14,
                name: '土木学院'
            }
        ],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};

rightBottomoption = {
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
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['病假人数', '事假人数']
    },
    xAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [{
        type: 'value',
        name: '水量',
        min: 0,
        max: 8,
        interval: 2,
        axisLabel: {
            formatter: '{value} 位'
        }
    }],
    series: [{
            name: '病假人数',
            type: 'bar',
            data: [2, 4, 0, 2, 0, 0, 1, 2, 0, 0, 4, 0]
        },
        {
            name: '事假人数',
            type: 'bar',
            data: [1, 1, 0, 2, 1, 2, 2, 1, 0, 1, 0, 3]
        }
    ]
};

myLeftChart.setOption(leftoption);
myRightChart.setOption(rightoption);
myLeftBottomChart.setOption(leftBottomoption);
myRightBottomChart.setOption(rightBottomoption);