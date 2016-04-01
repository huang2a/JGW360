// 基于准备好的dom，初始化echarts图表
    var myChart01 = echarts.init(document.getElementById('chart01'));
    var option = {
             title: {

                 subtext: "",
                 textStyle: {
                     fontSize: 14,
                     fontStyle: "normal"
                 }
             },
             tooltip: {
                 trigger: "axis"
             },
             legend: {
                 data: ["最高价格", "最低价格"],
                 selectedMode: false,
                 x: "right",
                 y: "top"
             },
             toolbox: {
                 feature: {
                     dataView: {
                         readOnly: true
                     },
                     magicType: {
                         type: ["line", "bar"],
                         show: false
                     }
                 }
             },
             xAxis: [
                 {
                     type: "category",
                     boundaryGap: false,
                     data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
                     nameLocation: "end"
                 }
             ],
             yAxis: [
                 {
                     type: "value",
                     name: "（元/吨）",
                     position: "top",
                     nameLocation: "end",
                     nameTextStyle: {
                         color: "rgb(102, 103, 104)",
                         align: "right"
                     }
                 }
             ],
             series: [
                 {
                     name: "最高价格",
                     type: "line",
                     data: [7838, 6000, 8050, 7228, 7683, 7683, 7228]
                 },
                 {
                     name: "最低价格",
                     type: "line",
                     data: [5929, 4089, 7228, 5928, 6030, 7683, 5928]
                 }
             ]
          };
    // 为echarts对象加载数据
    myChart01.setOption(option);



