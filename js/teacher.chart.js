var myLeftChart = echarts.init(document.getElementById('left-chart'));
var myRightChart = echarts.init(document.getElementById('right-chart'));
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
        data: [2, 3, 1, 4, 9, 3, 2],
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
    color:['#99CCFF'],
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


myLeftChart.setOption(leftoption);
myRightChart.setOption(rightoption);