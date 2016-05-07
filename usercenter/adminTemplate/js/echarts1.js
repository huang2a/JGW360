// 基于准备好的dom，初始化echarts图表
    var myChart01 = echarts.init(document.getElementById('chart01'));
    var option = {
             title: {
        text: "本月流量统计"
    },
    tooltip: {
        trigger: "axis"
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: true
            },
            magicType: {
                type: ["line", "bar", "stack", "tiled"],
                show: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            },
            dataZoom: {
                show: true
            }
        }
    },
    calculable: true,
    xAxis: [
        {
            type: "category",
            boundaryGap: false,
            data: ["04-07", "04-08", "04-09", "04-10", "04-11", "04-12", "04-13", "04-14", "04-15", "04-16", "04-17", "04-18", "04-19", "04-20", "04-21", "04-22", "04-23", "04-24", "04-25", "04-26", "04-27", "04-28", "04-29", "04-30", "05-01", "05-02", "05-03", "05-04", "05-06", "05-07"]
        }
    ],
    yAxis: [
        {
            type: "value"
        }
    ],
    series: [
        {
            name: "浏览量",
            type: "line",
            smooth: true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        type: "solid"
                    },
                    borderWidth: 1,
                    areaStyle: {
                        type: "default"
                    }
                }
            },
            data: [10, 12, 21, 54, 260, 830, 710, 643, 345, 634, 1213, 976, 675, 856, 658, 789, 987, 778, 768, 956, 953, 854, 900, 956, 895, 789, 888, 987, 767, 936],
            symbol: "emptyCircle"
        }
    ],
    animationEasing: "QuadraticOut"
      };
    // 为echarts对象加载数据
    myChart01.setOption(option);






