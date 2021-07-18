//各个图表配置
// 1.农副产品产量 -- 柱形图
(function(){
    var myChart = echarts.init(document.querySelector('.chart1'));
    option = {
        color:['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
        },
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            containLabel: true
        },
        xAxis: [
            {  
                type: 'category',
                data: ['白菜', '大豆', '水稻','小麦','油菜','甘蔗','茶叶','其它'],
                // 修改刻度样式
                axisLabel:{
                    color: "rgba(255,255,255,.6) ",
                    fontSize: "12"
                },
                axisLine:{
                    show:false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine:{
                    show:true
                },
                axisTick:{
                    show:false
                },
                // 修改刻度样式
                axisLabel:{
                    color: "rgba(255,255,255,.6) ",
                    fontSize: "12"
                },
                // 更改y轴分割线样式
                splitLine:{
                    lineStyle:{
                        color:"rgba(255,255,255,.1)"
                    }
                }
            },
           
        ],
        series: [
            {
                name: '产量',
                type: 'bar',
                barWidth: '35%',
                data: [299, 200, 250, 334, 390, 330, 220,100],
                itemStyle:{
                    barBorderRadius:5
                }
            }
        ]
    };
    myChart.setOption(option);
    // 监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

//2.农商品年收益
(function () {
    var myChart = echarts.init(document.querySelector('.chart2'));
    option = {
        color:['#00f2f1','#ed3f35'],
        tooltip: {
            trigger: 'axis'
        },
        legend: { //图例组件
            data: ['2020年收益', '2021年收益'],
            textStyle:{
                color:'#4c9bfd' //图例文字颜色
            },
            right:'10%' //图例距右侧距离
        },
        grid: {
            top:'20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true, //包含刻度文字
            show:true, //显示边框
            borderColor:'#012f4a' //边框颜色
        },
        // toolbox: { //将图表保存为图片
        //     feature: {
        //         saveAsImage: {}
        //     }
        // },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '3月', '5月', '7月', '9月', '11月'],
            axisTick:{ //刻度去除
                show:false
            },
            axisLabel:{ //文本颜色
                color:'#4c9bfd'
            },
            axisLine:{ //去除轴线
                show:false
            },
            boundaryGap:false  //去除轴内间距
        },
        yAxis: {
            type: 'value',
            axisLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            axisLabel:{
                textStyle:{
                    color:'#4c9bfd'
                }
            },
            splitLine:{ //分割线
                lineStyle:{
                    color:'#012f4a'
                }
            }
        },
        series: [
            {
                name: '2020年收益',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230],
                smooth:true //折线修饰为圆滑
            },
            {
                name: '2021年收益',
                type: 'line',
                stack: '总量',
                data: [220, 182, 191, 234, 290, 330],
                smooth:true //折线修饰为圆滑
            },
           
        ]
    };
    myChart.setOption(option);
    // 监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

//3.各农副产品收益占比
(function () {
    var myChart = echarts.init(document.querySelector('.chart3'));
    option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            bottom:0,
            itemWidth:10,
            itemHeight:10,
            textStyle:{
                color:'rgba(255,255,255,.5)',
                fontSize:'12'
            }
        },
        series: [
            {
                name: '收益金额',
                type: 'pie',
                center:['50%','40%'], //饼形图在容器中的位置
                radius: ['40%', '60%'],
                avoidLabelOverlap: false,
                // itemStyle: { //单个样式
                //     borderRadius: 10,
                //     borderColor: '#fff',
                //     borderWidth: 2
                // },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {  //圆环内样式
                    label: {
                        show: true,
                        fontSize: '16',
                        color:'rgba(255,255,255,.5)'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: 299, name: '白菜'},
                    {value: 200, name: '大豆'},
                    {value: 250, name: '水稻'},
                    {value: 334, name: '小麦'},
                    {value: 399, name: '油菜'},
                    {value: 330, name: '甘蔗'},
                    {value: 220, name: '茶叶'},
                    {value: 100, name: '其它'},
                ]
            }
        ]
    };
    myChart.setOption(option);
    // 监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 4.各季度收益比
(function () {
    var myChart = echarts.init(document.querySelector('.chart4'));
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    option = {
        // title: {
        //     text: '世界人口总量',
        //     subtext: '数据来自网络'
        // },
        // tooltip: {
        //     trigger: 'axis',
        //     axisPointer: {
        //         type: 'shadow'
        //     }
        // // },
        // legend: {
        //     data: ['2011年', '2012年'],
        //     textStyle:{
        //         fontSize:'12px'
        //     }
        // },
        grid: {
            top:'10%',
            left: '22%',
            bottom: '3%',
            // containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            show:false
        },
        yAxis: [
            {
            type: 'category',
            inverse:true,  //是否翻转数组，默认为false
            data: ['第一季度', '第二季度', '第三季度', '第四季度'],
            axisTick:{
                show:false
            },
            axisLine:{
                show:false
            },
            splitLine:{
                show:false
            },
            axisLabel:{
                color:'#fff'
            }
        },
        { //添加第二组数据
            data:[350,610,793,884],
            inverse:true,
            axisTick:{
                show:false
            },
            axisLine:{
                show:false
            },
            axisLabel:{
                color:'#fff'
            }
        }
    ],
        series: [
            {
                name: '条',
                type: 'bar',
                yAxisIndex: 0,
                data: [34, 60, 78, 84],
                barCategoryGap:50,  //柱子之间的间距
                barWidth:10, //柱子的宽度
                itemStyle:{ // 设置柱子样式
                    normal:{
                        barBorderRadius:20   //设置为圆角
                    }
                },
                label:{  //柱子上的文本标签
                  normal:{
                      show:true,
                      position:'inside',  //图形内显示
                      formatter:'{c}%'   //文字显示形式
                  }
                },
                itemStyle:{
                    normal:{
                        barBorderRadius:20,
                       color:function(params){
                        return myColor[params.dataIndex];
                       }
                    }
                }
            },
            {
                name: '框',
                type: 'bar',
                yAxisIndex: 1,
                data: [100, 100, 100, 100],
                barCategoryGap:50,
                barWidth:15,
                itemStyle:{
                    color:'none',
                    borderColor:'#00c1de',
                    borderWidth:3,
                    barBorderRadius:15,
                }
            }
        ]
    };
    myChart.setOption(option);
    // 监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

//5.各平台销量
(function () {
    var myChart = echarts.init(document.querySelector('.chart5'));
    option = {
        color:['#0184d5','#00d887'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            right:10,
            data: ['线上平台销量', '线下平台销量'],
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
              }
        },
        grid: {
            top:'30',
            left: '10',
            right: '10',
            bottom: '10',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['1月', '3月', '5月', '7月', '9月', '11月'],
                axisLabel:{
                    textStyle:{
                        color:"rgba(255,255,255,.6)",
                        fontSize:12
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:"rgba(255,255,255,.2)"
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick:{
                    show:false
                },
                axisLine: {
                    lineStyle: {
                      color: "rgba(255,255,255,.1)"
                    }
                  },
                  axisLabel: {
                    textStyle: {
                      color: "rgba(255,255,255,.6)",
                      fontSize: 12
                    }
                  },
                  splitLine:{
                      lineStyle:{
                          color: "rgba(255,255,255,.1)"
                      }
                  }
            }
        ],
        series: [
            {
                name: '线上平台销量',
                type: 'line',
                stack: '总量',
                smooth:true,
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230],
                areaStyle: {
                    // 渐变色，只需要复制即可
                  color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
                      },
                      {
                        offset: 0.8,
                        color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
                      }
                    ],
                    false
                  ),
                  shadowColor: "rgba(0, 0, 0, 0.1)"
              },
                  symbol:'circle',  //设置拐点 小圆点
                  symbolSize:5,
                  itemStyle: { //设置拐点颜色和边框
                    color: "#0184d5",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                showSymbol:false   //拐点之前不显示，鼠标经过显示
            },
            {
                name: '线下平台销量',
                type: 'line',
                smooth:true,
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330],
                   areaStyle: {
                    normal: {
                      color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                          {
                            offset: 0,
                            color: "rgba(0, 216, 135, 0.4)"
                          },
                          {
                            offset: 0.8,
                            color: "rgba(0, 216, 135, 0.1)"
                          }
                        ],
                        false
                      ),
                      shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                  },
                  // 设置拐点 小圆点
                  symbol: "circle",
                  // 拐点大小
                  symbolSize: 5,
                  // 设置拐点颜色以及边框
                   itemStyle: {
                      color: "#00d887",
                      borderColor: "rgba(221, 220, 107, .1)",
                      borderWidth: 12
                  },
                  // 开始不显示拐点， 鼠标经过显示
                  showSymbol: false,
            },
           
        ]
    };
    myChart.setOption(option);
    // 监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

//6.销售地区分布
(function () {
    var myChart = echarts.init(document.querySelector('.chart6'));
    option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
            legend:{
                bottom:0,
                itemWidth:10,
                itemHeight:10,
                textStyle:{
                    color:'rgba(255,255,255,.5)',
                    fontSize:'12'
                }
        },
        toolbox: {
            show: true,
            roseType:'radius',
            // feature: {
                
            //     mark: {show: true},
            //     dataView: {show: true, readOnly: false},
            //     restore: {show: true},
            //     saveAsImage: {show: true}
            // }
        },
        series: [
            {
                name: '地区分布',
                type: 'pie',
                radius: ['10%', '60%'],
                center: ['50%', '40%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8
                },
                label:{
                    fontSize:12
                },
                labelLine:{ //引线调整
                    length:6, //连接扇形图线长
                    length2:8 //连接文字线长
                },
                data: [
                    {value: 40, name: '安徽省'},
                    {value: 38, name: '江苏省'},
                    {value: 32, name: '山东省'},
                    {value: 30, name: '河北省'},
                    {value: 28, name: '辽林省'},
                    {value: 26, name: '河北省'},
                    {value: 22, name: '河南省'},
                    {value: 18, name: '海南省'}
                ]
            }
        ]
    };
    myChart.setOption(option);
    // 监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

//7.销售轨迹地图
(function () {
    var myChart = echarts.init(document.querySelector('.chart7'));
    var allData = 
    {"citys":[{"name":"延寿","value":[128.331644,45.451897,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"临江","value":[126.918087,41.811979,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"嘉兴","value":[120.755486,30.746129,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"四平","value":[124.350398,43.16642,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"营口","value":[122.235418,40.667012,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"密云","value":[116.801346,40.35874,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"威海","value":[122.12042,37.513068,32],"symbolSize":3,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"杭州","value":[120.15507,30.274085,10],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"集安","value":[126.194031,41.125307,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"贵阳","value":[106.630154,26.647661,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"抚顺","value":[123.957208,41.880872,3],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"海门","value":[121.181615,31.871173,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"珠海","value":[113.576726,22.270715,9],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"河北","value":[114.475704,38.584854,-19],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"深圳","value":[114.057868,22.543099,14],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"黄浦","value":[121.484443,31.231763,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"蓬莱","value":[120.758848,37.810661,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"吉林","value":[126.549572,43.837883,-364],"symbolSize":14,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"甘肃","value":[103.826308,36.059421,-2],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"龙井","value":[129.427066,42.766311,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"茂名","value":[110.925456,21.662999,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"丹东","value":[124.354707,40.0005,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"晋中","value":[112.752695,37.687024,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"浙江","value":[120.152792,30.267447,-2],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"海城","value":[122.685217,40.882377,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"溆浦","value":[110.594921,27.908281,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"北京","value":[116.407526,39.90403,-14],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"铁岭","value":[123.726166,42.223769,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"大同","value":[113.61244,40.040295,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"金坛","value":[119.597897,31.723247,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"齐齐哈尔","value":[126.661669,45.742347,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"咸阳","value":[108.708991,34.329605,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"四川","value":[104.075931,30.651652,-5],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"福田","value":[114.055036,22.52153,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"盘锦","value":[122.070714,41.119997,3],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"中山","value":[113.392782,22.517646,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"福建","value":[119.295144,26.10078,-1],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"泰顺","value":[119.717649,27.556884,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"宝山","value":[131.401589,46.577167,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"庆安","value":[127.507825,46.880102,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"海淀","value":[116.298056,39.959912,32],"symbolSize":3,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"大兴","value":[116.341395,39.726929,3],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"桦川","value":[130.719081,47.023001,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"惠州","value":[114.416196,23.111847,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"青岛","value":[120.38264,36.067082,52],"symbolSize":3,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"朝阳","value":[116.443108,39.92147,17],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"沈阳","value":[123.431475,41.805698,41],"symbolSize":3,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"菏泽","value":[115.480656,35.23375,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"南通","value":[120.894291,31.980172,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"南充","value":[106.110698,30.837793,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"双城","value":[126.312745,45.383263,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"南京","value":[118.796877,32.060255,17],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"新疆","value":[87.627704,43.793026,-2],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"成都","value":[104.066541,30.572269,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"陕西","value":[108.954239,34.265472,-2],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"黄岛","value":[120.04619,35.872664,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"温州","value":[120.699367,27.994267,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"石家庄","value":[114.51486,38.042307,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"邢台","value":[114.504844,37.070589,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"赣州","value":[114.93503,25.831829,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"义乌","value":[120.075058,29.306841,3],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"南昌","value":[115.858198,28.682892,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"闵行","value":[121.381709,31.112813,18],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"长宁","value":[121.424624,31.220367,7],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"道里","value":[126.616957,45.755777,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"乳山","value":[121.539765,36.919816,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"双流","value":[103.923648,30.574473,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"广州","value":[113.264435,23.129163,13],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"西城","value":[116.365868,39.912289,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"佳木斯","value":[130.318917,46.799923,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"皇姑","value":[123.44197,41.824796,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"榆树","value":[126.533146,44.840288,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"临汾","value":[111.518976,36.088005,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"上海","value":[121.473701,31.230416,44],"symbolSize":3,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"内蒙古","value":[111.765618,40.817498,-23],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"尚志","value":[128.009895,45.209586,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"湖里","value":[118.146769,24.512905,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"台州","value":[121.420757,28.656386,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"潍坊","value":[119.161756,36.706774,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"苏州","value":[120.585316,31.298886,14],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"房山","value":[116.143267,39.749144,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"即墨","value":[120.447128,36.389639,15],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"舒兰","value":[126.965607,44.406106,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"延吉","value":[129.508946,42.891255,3],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"三河","value":[117.078295,39.982718,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"大连","value":[121.614682,38.914003,40],"symbolSize":3,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"辉南","value":[126.046912,42.684993,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"无锡","value":[120.31191,31.49117,14],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"常州","value":[119.973987,31.810689,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"广西","value":[108.327546,22.815478,-1],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"泉州","value":[118.675676,24.874132,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"昌平","value":[116.231204,40.22066,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"海阳","value":[121.158434,36.776378,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"郑州","value":[113.625368,34.7466,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"东城","value":[116.416357,39.928353,10],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"黄骅","value":[117.330048,38.371383,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"武侯","value":[104.04339,30.641982,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"鸡东","value":[131.12408,45.260412,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"龙口","value":[120.477813,37.646108,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"汤原","value":[129.905072,46.730706,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"湖北","value":[114.341862,30.546498,-4],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"克拉玛依","value":[84.889207,45.579889,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"厦门","value":[118.089425,24.479834,3],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"哈尔滨","value":[126.534967,45.803775,8],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"秦皇岛","value":[119.600493,39.935385,7],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"江苏","value":[118.763232,32.061707,-1],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"常熟","value":[120.752481,31.654376,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"烟台","value":[121.447935,37.463822,24],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"和平","value":[117.21451,39.116949,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"环翠","value":[122.123444,37.501991,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"宣武门外东大街","value":[116.378888,39.899332,3],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"张家港","value":[120.553284,31.870367,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"临安","value":[119.724733,30.233873,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"延安","value":[109.489727,36.585455,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"天津","value":[117.200983,39.084158,28],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"城阳","value":[120.39631,36.307064,15],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"石景山","value":[116.222982,39.906611,3],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"长沙","value":[112.938814,28.228209,5],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"安徽","value":[117.284923,31.861184,-1],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"昆山","value":[120.980737,31.385598,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"徐汇","value":[121.436525,31.188523,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"东港","value":[124.152705,39.863008,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"廊坊","value":[116.683752,39.538047,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"鞍山","value":[122.994329,41.108647,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"海陵","value":[119.919425,32.491016,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"黑龙江","value":[126.661669,45.742347,-198],"symbolSize":8,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"西藏","value":[91.117212,29.646923,-1],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"河南","value":[113.274379,34.445122,0],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"湖南","value":[112.98381,28.112444,-1],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"佛山","value":[113.121416,23.021548,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"珲春","value":[130.366036,42.862821,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"扬州","value":[119.412966,32.39421,5],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"日照","value":[119.526888,35.416377,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"唐山","value":[118.180194,39.630867,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"同江","value":[132.510919,47.642707,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"荣成","value":[122.486658,37.16516,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"虎林","value":[132.93721,45.762686,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"武汉","value":[114.305393,30.593099,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"合肥","value":[117.227239,31.820587,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"荆州","value":[112.239741,30.335165,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"丰台","value":[116.287149,39.858427,3],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"山东","value":[117.020359,36.66853,-6],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"舟山","value":[122.207216,29.985295,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"连云港","value":[119.221611,34.596653,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"西安","value":[108.940175,34.341568,3],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"济南","value":[117.12,36.651216,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"绵阳","value":[104.679114,31.46745,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"辽宁","value":[123.42944,41.835441,-58],"symbolSize":3,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"山西","value":[112.562398,37.873532,-3],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"呼和浩特","value":[111.749181,40.842585,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"河西","value":[117.223372,39.109563,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"兴和","value":[113.834173,40.872301,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"重庆","value":[106.551557,29.56301,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"胶州","value":[120.033382,36.26468,5],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"宁波","value":[121.550357,29.874557,10],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"滨海","value":[119.820831,33.990334,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"太原","value":[112.548879,37.87059,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"鸡西","value":[130.969333,45.295075,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"兰山","value":[118.347707,35.051729,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"阳泉","value":[113.580519,37.856972,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"勃利","value":[130.592171,45.755063,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"长春","value":[125.323544,43.817072,8],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}}],"moveLines":[{"fromName":"黑龙江","toName":"珠海","coords":[[126.661669,45.742347],[113.576726,22.270715]]},{"fromName":"黑龙江","toName":"舒兰","coords":[[126.661669,45.742347],[126.965607,44.406106]]},{"fromName":"黑龙江","toName":"大连","coords":[[126.661669,45.742347],[121.614682,38.914003]]},{"fromName":"辽宁","toName":"集安","coords":[[123.42944,41.835441],[126.194031,41.125307]]},{"fromName":"吉林","toName":"抚顺","coords":[[126.549572,43.837883],[123.957208,41.880872]]},{"fromName":"山东","toName":"南京","coords":[[117.020359,36.66853],[118.796877,32.060255]]},{"fromName":"北京","toName":"沈阳","coords":[[116.407526,39.90403],[123.431475,41.805698]]},{"fromName":"黑龙江","toName":"环翠","coords":[[126.661669,45.742347],[122.123444,37.501991]]},{"fromName":"天津","toName":"大连","coords":[[117.200983,39.084158],[121.614682,38.914003]]},{"fromName":"吉林","toName":"兴和","coords":[[126.549572,43.837883],[113.834173,40.872301]]},{"fromName":"河北","toName":"勃利","coords":[[114.475704,38.584854],[130.592171,45.755063]]},{"fromName":"吉林","toName":"大连","coords":[[126.549572,43.837883],[121.614682,38.914003]]},{"fromName":"吉林","toName":"沈阳","coords":[[126.549572,43.837883],[123.431475,41.805698]]},{"fromName":"黑龙江","toName":"闵行","coords":[[126.661669,45.742347],[121.381709,31.112813]]},{"fromName":"天津","toName":"朝阳","coords":[[117.200983,39.084158],[116.443108,39.92147]]},{"fromName":"吉林","toName":"黄岛","coords":[[126.549572,43.837883],[120.04619,35.872664]]},{"fromName":"内蒙古","toName":"上海","coords":[[111.765618,40.817498],[121.473701,31.230416]]},{"fromName":"内蒙古","toName":"南京","coords":[[111.765618,40.817498],[118.796877,32.060255]]},{"fromName":"辽宁","toName":"杭州","coords":[[123.42944,41.835441],[120.15507,30.274085]]},{"fromName":"黑龙江","toName":"海城","coords":[[126.661669,45.742347],[122.685217,40.882377]]},{"fromName":"吉林","toName":"西城","coords":[[126.549572,43.837883],[116.365868,39.912289]]},{"fromName":"四川","toName":"上海","coords":[[104.075931,30.651652],[121.473701,31.230416]]},{"fromName":"黑龙江","toName":"西城","coords":[[126.661669,45.742347],[116.365868,39.912289]]},{"fromName":"吉林","toName":"丹东","coords":[[126.549572,43.837883],[124.354707,40.0005]]},{"fromName":"吉林","toName":"宁波","coords":[[126.549572,43.837883],[121.550357,29.874557]]},{"fromName":"辽宁","toName":"海淀","coords":[[123.42944,41.835441],[116.298056,39.959912]]},{"fromName":"辽宁","toName":"青岛","coords":[[123.42944,41.835441],[120.38264,36.067082]]},{"fromName":"吉林","toName":"苏州","coords":[[126.549572,43.837883],[120.585316,31.298886]]},{"fromName":"黑龙江","toName":"抚顺","coords":[[126.661669,45.742347],[123.957208,41.880872]]},{"fromName":"吉林","toName":"临安","coords":[[126.549572,43.837883],[119.724733,30.233873]]},{"fromName":"辽宁","toName":"烟台","coords":[[123.42944,41.835441],[121.447935,37.463822]]},{"fromName":"黑龙江","toName":"海淀","coords":[[126.661669,45.742347],[116.298056,39.959912]]},{"fromName":"黑龙江","toName":"南昌","coords":[[126.661669,45.742347],[115.858198,28.682892]]},{"fromName":"内蒙古","toName":"沈阳","coords":[[111.765618,40.817498],[123.431475,41.805698]]},{"fromName":"山西","toName":"城阳","coords":[[112.562398,37.873532],[120.39631,36.307064]]},{"fromName":"吉林","toName":"广州","coords":[[126.549572,43.837883],[113.264435,23.129163]]},{"fromName":"上海","toName":"沈阳","coords":[[121.473701,31.230416],[123.431475,41.805698]]},{"fromName":"四川","toName":"阳泉","coords":[[104.075931,30.651652],[113.580519,37.856972]]},{"fromName":"河北","toName":"桦川","coords":[[114.475704,38.584854],[130.719081,47.023001]]},{"fromName":"内蒙古","toName":"海淀","coords":[[111.765618,40.817498],[116.298056,39.959912]]},{"fromName":"安徽","toName":"河北","coords":[[117.284923,31.861184],[114.475704,38.584854]]},{"fromName":"辽宁","toName":"呼和浩特","coords":[[123.42944,41.835441],[111.749181,40.842585]]},{"fromName":"广西","toName":"茂名","coords":[[108.327546,22.815478],[110.925456,21.662999]]},{"fromName":"吉林","toName":"东城","coords":[[126.549572,43.837883],[116.416357,39.928353]]},{"fromName":"内蒙古","toName":"盘锦","coords":[[111.765618,40.817498],[122.070714,41.119997]]},{"fromName":"山东","toName":"哈尔滨","coords":[[117.020359,36.66853],[126.534967,45.803775]]},{"fromName":"黑龙江","toName":"沈阳","coords":[[126.661669,45.742347],[123.431475,41.805698]]},{"fromName":"黑龙江","toName":"丰台","coords":[[126.661669,45.742347],[116.287149,39.858427]]},{"fromName":"四川","toName":"盘锦","coords":[[104.075931,30.651652],[122.070714,41.119997]]},{"fromName":"黑龙江","toName":"皇姑","coords":[[126.661669,45.742347],[123.44197,41.824796]]},{"fromName":"河北","toName":"虎林","coords":[[114.475704,38.584854],[132.93721,45.762686]]},{"fromName":"辽宁","toName":"宝山","coords":[[123.42944,41.835441],[131.401589,46.577167]]},{"fromName":"黑龙江","toName":"吉林","coords":[[126.661669,45.742347],[126.549572,43.837883]]},{"fromName":"黑龙江","toName":"青岛","coords":[[126.661669,45.742347],[120.38264,36.067082]]},{"fromName":"吉林","toName":"烟台","coords":[[126.549572,43.837883],[121.447935,37.463822]]},{"fromName":"山东","toName":"临江","coords":[[117.020359,36.66853],[126.918087,41.811979]]},{"fromName":"黑龙江","toName":"黄岛","coords":[[126.661669,45.742347],[120.04619,35.872664]]},{"fromName":"吉林","toName":"石家庄","coords":[[126.549572,43.837883],[114.51486,38.042307]]},{"fromName":"吉林","toName":"汤原","coords":[[126.549572,43.837883],[129.905072,46.730706]]},{"fromName":"黑龙江","toName":"临江","coords":[[126.661669,45.742347],[126.918087,41.811979]]},{"fromName":"吉林","toName":"济南","coords":[[126.549572,43.837883],[117.12,36.651216]]},{"fromName":"吉林","toName":"太原","coords":[[126.549572,43.837883],[112.548879,37.87059]]},{"fromName":"吉林","toName":"威海","coords":[[126.549572,43.837883],[122.12042,37.513068]]},{"fromName":"湖北","toName":"深圳","coords":[[114.341862,30.546498],[114.057868,22.543099]]},{"fromName":"内蒙古","toName":"荣成","coords":[[111.765618,40.817498],[122.486658,37.16516]]},{"fromName":"辽宁","toName":"郑州","coords":[[123.42944,41.835441],[113.625368,34.7466]]},{"fromName":"黑龙江","toName":"朝阳","coords":[[126.661669,45.742347],[116.443108,39.92147]]},{"fromName":"吉林","toName":"昆山","coords":[[126.549572,43.837883],[120.980737,31.385598]]},{"fromName":"吉林","toName":"双城","coords":[[126.549572,43.837883],[126.312745,45.383263]]},{"fromName":"黑龙江","toName":"克拉玛依","coords":[[126.661669,45.742347],[84.889207,45.579889]]},{"fromName":"辽宁","toName":"上海","coords":[[123.42944,41.835441],[121.473701,31.230416]]},{"fromName":"吉林","toName":"海阳","coords":[[126.549572,43.837883],[121.158434,36.776378]]},{"fromName":"吉林","toName":"宣武门外东大街","coords":[[126.549572,43.837883],[116.378888,39.899332]]},{"fromName":"山东","toName":"海淀","coords":[[117.020359,36.66853],[116.298056,39.959912]]},{"fromName":"内蒙古","toName":"威海","coords":[[111.765618,40.817498],[122.12042,37.513068]]},{"fromName":"黑龙江","toName":"晋中","coords":[[126.661669,45.742347],[112.752695,37.687024]]},{"fromName":"西藏","toName":"广州","coords":[[91.117212,29.646923],[113.264435,23.129163]]},{"fromName":"辽宁","toName":"无锡","coords":[[123.42944,41.835441],[120.31191,31.49117]]},{"fromName":"黑龙江","toName":"城阳","coords":[[126.661669,45.742347],[120.39631,36.307064]]},{"fromName":"河北","toName":"丰台","coords":[[114.475704,38.584854],[116.287149,39.858427]]},{"fromName":"黑龙江","toName":"扬州","coords":[[126.661669,45.742347],[119.412966,32.39421]]},{"fromName":"辽宁","toName":"天津","coords":[[123.42944,41.835441],[117.200983,39.084158]]},{"fromName":"吉林","toName":"扬州","coords":[[126.549572,43.837883],[119.412966,32.39421]]},{"fromName":"吉林","toName":"嘉兴","coords":[[126.549572,43.837883],[120.755486,30.746129]]},{"fromName":"河北","toName":"延寿","coords":[[114.475704,38.584854],[128.331644,45.451897]]},{"fromName":"吉林","toName":"义乌","coords":[[126.549572,43.837883],[120.075058,29.306841]]},{"fromName":"吉林","toName":"张家港","coords":[[126.549572,43.837883],[120.553284,31.870367]]},{"fromName":"辽宁","toName":"贵阳","coords":[[123.42944,41.835441],[106.630154,26.647661]]},{"fromName":"吉林","toName":"辽宁","coords":[[126.549572,43.837883],[123.42944,41.835441]]},{"fromName":"河南","toName":"营口","coords":[[113.274379,34.445122],[122.235418,40.667012]]},{"fromName":"吉林","toName":"合肥","coords":[[126.549572,43.837883],[117.227239,31.820587]]},{"fromName":"黑龙江","toName":"苏州","coords":[[126.661669,45.742347],[120.585316,31.298886]]},{"fromName":"黑龙江","toName":"榆树","coords":[[126.661669,45.742347],[126.533146,44.840288]]},{"fromName":"吉林","toName":"常熟","coords":[[126.549572,43.837883],[120.752481,31.654376]]},{"fromName":"吉林","toName":"乳山","coords":[[126.549572,43.837883],[121.539765,36.919816]]},{"fromName":"四川","toName":"青岛","coords":[[104.075931,30.651652],[120.38264,36.067082]]},{"fromName":"黑龙江","toName":"深圳","coords":[[126.661669,45.742347],[114.057868,22.543099]]},{"fromName":"天津","toName":"东城","coords":[[117.200983,39.084158],[116.416357,39.928353]]},{"fromName":"黑龙江","toName":"上海","coords":[[126.661669,45.742347],[121.473701,31.230416]]},{"fromName":"天津","toName":"宁波","coords":[[117.200983,39.084158],[121.550357,29.874557]]},{"fromName":"吉林","toName":"海门","coords":[[126.549572,43.837883],[121.181615,31.871173]]},{"fromName":"山西","toName":"沈阳","coords":[[112.562398,37.873532],[123.431475,41.805698]]},{"fromName":"吉林","toName":"成都","coords":[[126.549572,43.837883],[104.066541,30.572269]]},{"fromName":"吉林","toName":"南昌","coords":[[126.549572,43.837883],[115.858198,28.682892]]},{"fromName":"黑龙江","toName":"常州","coords":[[126.661669,45.742347],[119.973987,31.810689]]},{"fromName":"内蒙古","toName":"兰山","coords":[[111.765618,40.817498],[118.347707,35.051729]]},{"fromName":"吉林","toName":"河南","coords":[[126.549572,43.837883],[113.274379,34.445122]]},{"fromName":"黑龙江","toName":"福田","coords":[[126.661669,45.742347],[114.055036,22.52153]]},{"fromName":"吉林","toName":"常州","coords":[[126.549572,43.837883],[119.973987,31.810689]]},{"fromName":"吉林","toName":"双流","coords":[[126.549572,43.837883],[103.923648,30.574473]]},{"fromName":"吉林","toName":"潍坊","coords":[[126.549572,43.837883],[119.161756,36.706774]]},{"fromName":"吉林","toName":"延安","coords":[[126.549572,43.837883],[109.489727,36.585455]]},{"fromName":"辽宁","toName":"长春","coords":[[123.42944,41.835441],[125.323544,43.817072]]},{"fromName":"黑龙江","toName":"南京","coords":[[126.661669,45.742347],[118.796877,32.060255]]},{"fromName":"辽宁","toName":"和平","coords":[[123.42944,41.835441],[117.21451,39.116949]]},{"fromName":"北京","toName":"哈尔滨","coords":[[116.407526,39.90403],[126.534967,45.803775]]},{"fromName":"吉林","toName":"武汉","coords":[[126.549572,43.837883],[114.305393,30.593099]]},{"fromName":"吉林","toName":"海陵","coords":[[126.549572,43.837883],[119.919425,32.491016]]},{"fromName":"吉林","toName":"日照","coords":[[126.549572,43.837883],[119.526888,35.416377]]},{"fromName":"吉林","toName":"台州","coords":[[126.549572,43.837883],[121.420757,28.656386]]},{"fromName":"辽宁","toName":"厦门","coords":[[123.42944,41.835441],[118.089425,24.479834]]},{"fromName":"黑龙江","toName":"贵阳","coords":[[126.661669,45.742347],[106.630154,26.647661]]},{"fromName":"吉林","toName":"鞍山","coords":[[126.549572,43.837883],[122.994329,41.108647]]},{"fromName":"辽宁","toName":"荣成","coords":[[123.42944,41.835441],[122.486658,37.16516]]},{"fromName":"黑龙江","toName":"天津","coords":[[126.661669,45.742347],[117.200983,39.084158]]},{"fromName":"黑龙江","toName":"河西","coords":[[126.661669,45.742347],[117.223372,39.109563]]},{"fromName":"黑龙江","toName":"秦皇岛","coords":[[126.661669,45.742347],[119.600493,39.935385]]},{"fromName":"吉林","toName":"荆州","coords":[[126.549572,43.837883],[112.239741,30.335165]]},{"fromName":"黑龙江","toName":"东城","coords":[[126.661669,45.742347],[116.416357,39.928353]]},{"fromName":"吉林","toName":"即墨","coords":[[126.549572,43.837883],[120.447128,36.389639]]},{"fromName":"辽宁","toName":"西城","coords":[[123.42944,41.835441],[116.365868,39.912289]]},{"fromName":"黑龙江","toName":"大兴","coords":[[126.661669,45.742347],[116.341395,39.726929]]},{"fromName":"河北","toName":"哈尔滨","coords":[[114.475704,38.584854],[126.534967,45.803775]]},{"fromName":"黑龙江","toName":"江苏","coords":[[126.661669,45.742347],[118.763232,32.061707]]},{"fromName":"吉林","toName":"和平","coords":[[126.549572,43.837883],[117.21451,39.116949]]},{"fromName":"江苏","toName":"鸡东","coords":[[118.763232,32.061707],[131.12408,45.260412]]},{"fromName":"辽宁","toName":"辉南","coords":[[123.42944,41.835441],[126.046912,42.684993]]},{"fromName":"吉林","toName":"深圳","coords":[[126.549572,43.837883],[114.057868,22.543099]]},{"fromName":"福建","toName":"泰顺","coords":[[119.295144,26.10078],[119.717649,27.556884]]},{"fromName":"上海","toName":"深圳","coords":[[121.473701,31.230416],[114.057868,22.543099]]},{"fromName":"吉林","toName":"秦皇岛","coords":[[126.549572,43.837883],[119.600493,39.935385]]},{"fromName":"吉林","toName":"徐汇","coords":[[126.549572,43.837883],[121.436525,31.188523]]},{"fromName":"吉林","toName":"石景山","coords":[[126.549572,43.837883],[116.222982,39.906611]]},{"fromName":"辽宁","toName":"城阳","coords":[[123.42944,41.835441],[120.39631,36.307064]]},{"fromName":"黑龙江","toName":"威海","coords":[[126.661669,45.742347],[122.12042,37.513068]]},{"fromName":"黑龙江","toName":"惠州","coords":[[126.661669,45.742347],[114.416196,23.111847]]},{"fromName":"吉林","toName":"龙口","coords":[[126.549572,43.837883],[120.477813,37.646108]]},{"fromName":"黑龙江","toName":"四平","coords":[[126.661669,45.742347],[124.350398,43.16642]]},{"fromName":"吉林","toName":"南充","coords":[[126.549572,43.837883],[106.110698,30.837793]]},{"fromName":"河北","toName":"东港","coords":[[114.475704,38.584854],[124.152705,39.863008]]},{"fromName":"辽宁","toName":"西安","coords":[[123.42944,41.835441],[108.940175,34.341568]]},{"fromName":"内蒙古","toName":"滨海","coords":[[111.765618,40.817498],[119.820831,33.990334]]},{"fromName":"河南","toName":"青岛","coords":[[113.274379,34.445122],[120.38264,36.067082]]},{"fromName":"黑龙江","toName":"昆山","coords":[[126.661669,45.742347],[120.980737,31.385598]]},{"fromName":"辽宁","toName":"长沙","coords":[[123.42944,41.835441],[112.938814,28.228209]]},{"fromName":"吉林","toName":"哈尔滨","coords":[[126.549572,43.837883],[126.534967,45.803775]]},{"fromName":"河北","toName":"尚志","coords":[[114.475704,38.584854],[128.009895,45.209586]]},{"fromName":"辽宁","toName":"东城","coords":[[123.42944,41.835441],[116.416357,39.928353]]},{"fromName":"辽宁","toName":"珠海","coords":[[123.42944,41.835441],[113.576726,22.270715]]},{"fromName":"黑龙江","toName":"铁岭","coords":[[126.661669,45.742347],[123.726166,42.223769]]},{"fromName":"黑龙江","toName":"蓬莱","coords":[[126.661669,45.742347],[120.758848,37.810661]]},{"fromName":"北京","toName":"天津","coords":[[116.407526,39.90403],[117.200983,39.084158]]},{"fromName":"内蒙古","toName":"天津","coords":[[111.765618,40.817498],[117.200983,39.084158]]},{"fromName":"黑龙江","toName":"宁波","coords":[[126.661669,45.742347],[121.550357,29.874557]]},{"fromName":"吉林","toName":"上海","coords":[[126.549572,43.837883],[121.473701,31.230416]]},{"fromName":"辽宁","toName":"佛山","coords":[[123.42944,41.835441],[113.121416,23.021548]]},{"fromName":"吉林","toName":"长宁","coords":[[126.549572,43.837883],[121.424624,31.220367]]},{"fromName":"黑龙江","toName":"珲春","coords":[[126.661669,45.742347],[130.366036,42.862821]]},{"fromName":"山东","toName":"黄浦","coords":[[117.020359,36.66853],[121.484443,31.231763]]},{"fromName":"辽宁","toName":"威海","coords":[[123.42944,41.835441],[122.12042,37.513068]]},{"fromName":"天津","toName":"长春","coords":[[117.200983,39.084158],[125.323544,43.817072]]},{"fromName":"新疆","toName":"上海","coords":[[87.627704,43.793026],[121.473701,31.230416]]},{"fromName":"河北","toName":"鸡西","coords":[[114.475704,38.584854],[130.969333,45.295075]]},{"fromName":"陕西","toName":"呼和浩特","coords":[[108.954239,34.265472],[111.749181,40.842585]]},{"fromName":"吉林","toName":"连云港","coords":[[126.549572,43.837883],[119.221611,34.596653]]},{"fromName":"黑龙江","toName":"杭州","coords":[[126.661669,45.742347],[120.15507,30.274085]]},{"fromName":"黑龙江","toName":"嘉兴","coords":[[126.661669,45.742347],[120.755486,30.746129]]},{"fromName":"陕西","toName":"盘锦","coords":[[108.954239,34.265472],[122.070714,41.119997]]},{"fromName":"河北","toName":"同江","coords":[[114.475704,38.584854],[132.510919,47.642707]]},{"fromName":"吉林","toName":"杭州","coords":[[126.549572,43.837883],[120.15507,30.274085]]},{"fromName":"黑龙江","toName":"舟山","coords":[[126.661669,45.742347],[122.207216,29.985295]]},{"fromName":"河南","toName":"大连","coords":[[113.274379,34.445122],[121.614682,38.914003]]},{"fromName":"辽宁","toName":"绵阳","coords":[[123.42944,41.835441],[104.679114,31.46745]]},{"fromName":"吉林","toName":"溆浦","coords":[[126.549572,43.837883],[110.594921,27.908281]]},{"fromName":"吉林","toName":"朝阳","coords":[[126.549572,43.837883],[116.443108,39.92147]]},{"fromName":"吉林","toName":"无锡","coords":[[126.549572,43.837883],[120.31191,31.49117]]},{"fromName":"浙江","toName":"沈阳","coords":[[120.152792,30.267447],[123.431475,41.805698]]},{"fromName":"吉林","toName":"湖里","coords":[[126.549572,43.837883],[118.146769,24.512905]]},{"fromName":"黑龙江","toName":"无锡","coords":[[126.661669,45.742347],[120.31191,31.49117]]},{"fromName":"黑龙江","toName":"长宁","coords":[[126.661669,45.742347],[121.424624,31.220367]]},{"fromName":"辽宁","toName":"胶州","coords":[[123.42944,41.835441],[120.033382,36.26468]]},{"fromName":"吉林","toName":"青岛","coords":[[126.549572,43.837883],[120.38264,36.067082]]},{"fromName":"河北","toName":"海淀","coords":[[114.475704,38.584854],[116.298056,39.959912]]},{"fromName":"黑龙江","toName":"厦门","coords":[[126.661669,45.742347],[118.089425,24.479834]]},{"fromName":"黑龙江","toName":"中山","coords":[[126.661669,45.742347],[113.392782,22.517646]]},{"fromName":"河北","toName":"太原","coords":[[114.475704,38.584854],[112.548879,37.87059]]},{"fromName":"新疆","toName":"吉林","coords":[[87.627704,43.793026],[126.549572,43.837883]]},{"fromName":"吉林","toName":"武侯","coords":[[126.549572,43.837883],[104.04339,30.641982]]},{"fromName":"北京","toName":"廊坊","coords":[[116.407526,39.90403],[116.683752,39.538047]]},{"fromName":"浙江","toName":"临汾","coords":[[120.152792,30.267447],[111.518976,36.088005]]},{"fromName":"湖北","toName":"天津","coords":[[114.341862,30.546498],[117.200983,39.084158]]},{"fromName":"黑龙江","toName":"泉州","coords":[[126.661669,45.742347],[118.675676,24.874132]]},{"fromName":"黑龙江","toName":"温州","coords":[[126.661669,45.742347],[120.699367,27.994267]]},{"fromName":"黑龙江","toName":"唐山","coords":[[126.661669,45.742347],[118.180194,39.630867]]},{"fromName":"北京","toName":"铁岭","coords":[[116.407526,39.90403],[123.726166,42.223769]]},{"fromName":"辽宁","toName":"即墨","coords":[[123.42944,41.835441],[120.447128,36.389639]]},{"fromName":"北京","toName":"上海","coords":[[116.407526,39.90403],[121.473701,31.230416]]},{"fromName":"黑龙江","toName":"广州","coords":[[126.661669,45.742347],[113.264435,23.129163]]},{"fromName":"吉林","toName":"廊坊","coords":[[126.549572,43.837883],[116.683752,39.538047]]},{"fromName":"黑龙江","toName":"荣成","coords":[[126.661669,45.742347],[122.486658,37.16516]]},{"fromName":"吉林","toName":"海城","coords":[[126.549572,43.837883],[122.685217,40.882377]]},{"fromName":"湖南","toName":"沈阳","coords":[[112.98381,28.112444],[123.431475,41.805698]]},{"fromName":"北京","toName":"青岛","coords":[[116.407526,39.90403],[120.38264,36.067082]]},{"fromName":"河北","toName":"大连","coords":[[114.475704,38.584854],[121.614682,38.914003]]},{"fromName":"内蒙古","toName":"珠海","coords":[[111.765618,40.817498],[113.576726,22.270715]]},{"fromName":"黑龙江","toName":"房山","coords":[[126.661669,45.742347],[116.143267,39.749144]]},{"fromName":"黑龙江","toName":"金坛","coords":[[126.661669,45.742347],[119.597897,31.723247]]},{"fromName":"河北","toName":"齐齐哈尔","coords":[[114.475704,38.584854],[126.661669,45.742347]]},{"fromName":"吉林","toName":"大兴","coords":[[126.549572,43.837883],[116.341395,39.726929]]},{"fromName":"吉林","toName":"密云","coords":[[126.549572,43.837883],[116.801346,40.35874]]},{"fromName":"黑龙江","toName":"和平","coords":[[126.661669,45.742347],[117.21451,39.116949]]},{"fromName":"内蒙古","toName":"龙井","coords":[[111.765618,40.817498],[129.427066,42.766311]]},{"fromName":"吉林","toName":"道里","coords":[[126.549572,43.837883],[126.616957,45.755777]]},{"fromName":"山东","toName":"武汉","coords":[[117.020359,36.66853],[114.305393,30.593099]]},{"fromName":"甘肃","toName":"常熟","coords":[[103.826308,36.059421],[120.752481,31.654376]]},{"fromName":"黑龙江","toName":"烟台","coords":[[126.661669,45.742347],[121.447935,37.463822]]},{"fromName":"吉林","toName":"海淀","coords":[[126.549572,43.837883],[116.298056,39.959912]]},{"fromName":"黑龙江","toName":"长沙","coords":[[126.661669,45.742347],[112.938814,28.228209]]},{"fromName":"天津","toName":"石家庄","coords":[[117.200983,39.084158],[114.51486,38.042307]]},{"fromName":"吉林","toName":"佛山","coords":[[126.549572,43.837883],[113.121416,23.021548]]},{"fromName":"辽宁","toName":"黄骅","coords":[[123.42944,41.835441],[117.330048,38.371383]]},{"fromName":"内蒙古","toName":"中山","coords":[[111.765618,40.817498],[113.392782,22.517646]]},{"fromName":"黑龙江","toName":"北京","coords":[[126.661669,45.742347],[116.407526,39.90403]]},{"fromName":"黑龙江","toName":"三河","coords":[[126.661669,45.742347],[117.078295,39.982718]]},{"fromName":"河北","toName":"庆安","coords":[[114.475704,38.584854],[127.507825,46.880102]]},{"fromName":"吉林","toName":"长沙","coords":[[126.549572,43.837883],[112.938814,28.228209]]},{"fromName":"黑龙江","toName":"西安","coords":[[126.661669,45.742347],[108.940175,34.341568]]},{"fromName":"内蒙古","toName":"朝阳","coords":[[111.765618,40.817498],[116.443108,39.92147]]},{"fromName":"辽宁","toName":"丰台","coords":[[123.42944,41.835441],[116.287149,39.858427]]},{"fromName":"黑龙江","toName":"延吉","coords":[[126.661669,45.742347],[129.508946,42.891255]]},{"fromName":"黑龙江","toName":"长春","coords":[[126.661669,45.742347],[125.323544,43.817072]]},{"fromName":"吉林","toName":"天津","coords":[[126.549572,43.837883],[117.200983,39.084158]]},{"fromName":"吉林","toName":"昌平","coords":[[126.549572,43.837883],[116.231204,40.22066]]},{"fromName":"吉林","toName":"赣州","coords":[[126.549572,43.837883],[114.93503,25.831829]]},{"fromName":"吉林","toName":"厦门","coords":[[126.549572,43.837883],[118.089425,24.479834]]},{"fromName":"内蒙古","toName":"秦皇岛","coords":[[111.765618,40.817498],[119.600493,39.935385]]},{"fromName":"内蒙古","toName":"菏泽","coords":[[111.765618,40.817498],[115.480656,35.23375]]},{"fromName":"吉林","toName":"闵行","coords":[[126.549572,43.837883],[121.381709,31.112813]]},{"fromName":"辽宁","toName":"石景山","coords":[[123.42944,41.835441],[116.222982,39.906611]]},{"fromName":"吉林","toName":"珠海","coords":[[126.549572,43.837883],[113.576726,22.270715]]},{"fromName":"内蒙古","toName":"青岛","coords":[[111.765618,40.817498],[120.38264,36.067082]]},{"fromName":"北京","toName":"海门","coords":[[116.407526,39.90403],[121.181615,31.871173]]},{"fromName":"内蒙古","toName":"长春","coords":[[111.765618,40.817498],[125.323544,43.817072]]},{"fromName":"吉林","toName":"城阳","coords":[[126.549572,43.837883],[120.39631,36.307064]]},{"fromName":"吉林","toName":"大同","coords":[[126.549572,43.837883],[113.61244,40.040295]]},{"fromName":"湖北","toName":"邢台","coords":[[114.341862,30.546498],[114.504844,37.070589]]},{"fromName":"吉林","toName":"胶州","coords":[[126.549572,43.837883],[120.033382,36.26468]]},{"fromName":"吉林","toName":"重庆","coords":[[126.549572,43.837883],[106.551557,29.56301]]},{"fromName":"河北","toName":"佳木斯","coords":[[114.475704,38.584854],[130.318917,46.799923]]},{"fromName":"甘肃","toName":"大连","coords":[[103.826308,36.059421],[121.614682,38.914003]]},{"fromName":"吉林","toName":"南京","coords":[[126.549572,43.837883],[118.796877,32.060255]]},{"fromName":"内蒙古","toName":"日照","coords":[[111.765618,40.817498],[119.526888,35.416377]]},{"fromName":"吉林","toName":"鸡东","coords":[[126.549572,43.837883],[131.12408,45.260412]]},{"fromName":"黑龙江","toName":"即墨","coords":[[126.661669,45.742347],[120.447128,36.389639]]},{"fromName":"江苏","toName":"朝阳","coords":[[118.763232,32.061707],[116.443108,39.92147]]},{"fromName":"吉林","toName":"南通","coords":[[126.549572,43.837883],[120.894291,31.980172]]},{"fromName":"黑龙江","toName":"张家港","coords":[[126.661669,45.742347],[120.553284,31.870367]]},{"fromName":"吉林","toName":"三河","coords":[[126.549572,43.837883],[117.078295,39.982718]]},{"fromName":"吉林","toName":"咸阳","coords":[[126.549572,43.837883],[108.708991,34.329605]]},{"fromName":"吉林","toName":"中山","coords":[[126.549572,43.837883],[113.392782,22.517646]]},{"fromName":"黑龙江","toName":"胶州","coords":[[126.661669,45.742347],[120.033382,36.26468]]}]
};

option = {
    // backgroundColor: '#013954',
    title: {
        text: '农产品物流运行图',
        top:20,
        left: 'center',
        textStyle: {
            color: '#fff',
        },
    },
    toolbox: {
        show: true,
        top:20,
        right:10,
        feature: {
            mark: {show: true},
            dataView: {show: false, readOnly: false},
            restore: {show: true},
            saveAsImage: {show:false}
        }
    },
    legend: {
        show: true,
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data: ['地点', '线路'],
        textStyle: {
            color: '#fff',
        },
        selectedMode: "multiple"
    },
    geo: {
        map: 'china',
        zoom:1.2,
        label: {
            emphasis: {
                show: false,
            },
        },
        roam: true, //是否允许缩放
        itemStyle: {
            normal: {
                color: '#142957', //地图背景色
                borderColor: '#0692a4', //省市边界线00fcff 516a89
                borderWidth: 1,
            },
            emphasis: {
                color: 'rgba(37, 43, 61,.6)', //悬浮背景
            },
        },
    },
    series: [
        {
            name: '地点',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {  //涟漪特效
                brushType: 'stroke',//波纹绘制方式 stroke，fill
                period:4,//动画时间，值越小速度越快
                scale:4,//波纹圆环最大显示，值越大波纹越大
            },
            label: {
                emphasis: {
                    show: true,
                    position: 'right',
                    formatter: '{b}',
                },
            },
            symbolSize: 2,
            showEffectOn: 'render',
            itemStyle: {
                normal: {
                    color: '#46bee9',
                },
            },
            data: allData.citys,
        },
        {
            name: '线路',
            type: 'lines',
            coordinateSystem: 'geo',
            zlevel: 2,
            large: true,
            effect: {
                show: true,
                constantSpeed: 30,
                symbol: 'arrow', //箭头图标，pin 圆点
                symbolSize: 3, //图标大小
                trailLength: 0, //特效尾迹长度[0,1]值越大，尾迹越长重
            },
            lineStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#58B3CC',
                            },
                            {
                                offset: 1,
                                color: '#F58158',
                            },
                        ],
                        false
                    ),
                    width: 1, //尾迹线条宽度
                    opacity: 0.2, //尾迹线条透明度
                    curveness: 0.2, //尾迹线条曲直度
                },
            },
            data: allData.moveLines,
        },
    ],
};

    myChart.setOption(option);
      // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();