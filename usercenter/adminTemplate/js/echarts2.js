 // 基于准备好的dom，初始化echarts图表
var myChart02 = echarts.init(document.getElementById('chart02'));
option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    title : {
                text: '商品数据统计',
                subtext: '最新统计时间：2015-12-27 10:29:33'
            },
    legend: {
      orient: "horizontal",
       x: "right",
       y:"top",
        data:['总销量','收藏量','总浏览量','热卖款(建华管桩)','店铺排名']
    },
    toolbox: {
        show : true,
        orient: 'vertical',
        x: 'right',
        y: 'center',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data: ["04-07", "04-08", "04-09", "04-10", "04-11", "04-12", "04-13", "04-14", "04-15", "04-16", "04-17", "04-18", "04-19", "04-20", "04-21", "04-22", "04-23", "04-24", "04-25", "04-26", "04-27", "04-28", "04-29", "04-30", "05-01", "05-02", "05-03", "05-04", "05-06", "05-07"]
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'总销量',
            type:'bar',
            data:[320, 332, 301, 334, 390, 330, 334, 390, 330, 334, 390, 330, 320,320, 332, 301, 334, 390, 330, 320,320, 332, 301, 334, 390, 330, 320, 301, 334, 390, 330]
        },
        {
            name:'收藏量',
            type:'bar',
            data:[120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 120, 132, 101, 134, 90, 230, 210, 132, 101, 134, 120, 132, 101, 134, 90, 230, 210, 132, 101, 134]
        },
        {
            name:'总浏览量',
            type:'bar',
            data:[220, 182, 191, 234, 290, 330, 310, 182, 191, 234,220, 182, 191, 234, 290, 330, 310, 182, 191, 234,220, 182, 191, 234, 290, 330, 310, 182, 191, 234]
        },
        {
            name:'热卖款(建华管桩)',
            type:'bar',
            data:[150, 232, 201, 154, 190, 330, 410, 232, 201, 154,150, 232, 201, 154, 190, 330, 410, 232, 201, 154,150, 232, 201, 154, 190, 330, 410, 232, 201, 154],
             markLine : {
                itemStyle:{
                    normal:{
                        lineStyle:{
                            type: 'dashed'
                        }
                    }
                },
                data : [
                    [{type : 'min'}, {type : 'max'}]
                ]
            }
        },
        {
            name:'店铺排名',
            type:'bar',
            data:[862, 1018, 964, 1026, 1679, 1600, 1570, 1018, 964, 1026,862, 1018, 964, 1026, 1679, 1600, 1570, 1018, 964, 1026,862, 1018, 964, 1026, 1679, 1600, 1570, 1018, 964, 1026],
        },
    ]
};
    // 为echarts对象加载数据
myChart02.setOption(option);