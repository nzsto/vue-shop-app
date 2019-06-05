import {http} from '@utils/http'
//接口管理

//分类列表
export const sortList = ()=>http("get","/api/good/top_catlist",{id:id})
