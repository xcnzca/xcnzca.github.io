
    var charts = echarts.init(document.getElementById('map1'));
const option = {
    title: {
        text: '全国历年处理污水率',
        x: "center"
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            var relVal = params[0].name
            for (var i = 0, l = params.length; i < l; i++) {
                relVal += '<br/>' + params[i].marker + params[i].seriesName + params[i].value + '%'
            }
            return relVal
        }
    },
    legend: {
        data: dataArr[0],
        top: 30,
        type: "scroll"
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: dataArr[1]
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}%'
        },
        max: "100",
    },
    series: []
};
var color = ["#CCD9C5","#BBD598","#829E6E","#6F9252","#2E4B46","#CFD4B4"]
var data = []
var newArr = JSON.parse(JSON.stringify(dataArr))
newArr.splice(0, 2)
data = newArr.map(item => {
    let colorIndex = Math.floor(Math.random() * 6);
    let datas = item.slice(1).reverse()
    return {
        name: item[0],
        type: 'line',
        data: datas,
        itemStyle: {
            normal: {
                color: color[colorIndex],
                lineStyle: {
                    color: color[colorIndex]
                }
            }
        },

    }
})
option.series = data
charts.setOption(option);