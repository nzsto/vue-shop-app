const Mock=require('mockjs')
//随机生成数据

Mock.mock(/\/search/,"get",function(options){
    var data =Mock.mock({
        "data|10":[
            {
                "searchList":'@ctitle(2, 6)'
            }
        ]
    })
    
    return data 
})
