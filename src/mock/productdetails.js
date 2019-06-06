const Mock = require("mockjs");

//随机生成数据   详情页
var data = Mock.mock({
    "data|60":[
        {
            "biaoti":"ctitle()",
            "price|1-10":1,
            "date": '@date("yyyy-MM-dd HH:mm:ss")',
            "jieshao":"@cparagraph()",
            "shop":"@cname(6)",
            "store":"@ctitle(6)",
            "pingjia|1-10":1,
            "img":"@image('800x800','#fff','#fff','topmiddle')",
            "pingjia|10-1000":10,
            "imgDetails":"@image('1500x2300','#pink','#fff','details')",
            "imgEnd":"@image('300x300','#fff','#fff','topmiddle')",

        }
    ]
})


console.log(data)

Mock.mock(/\/productdetails/,"get",(config)=>{
    return data
})