# 项目-做个商城


## 前言

首页尝试用vue，做个全栈电商型的小型APP网站，这个项目从0开发到部署一周时间左右，4个人通力合作，涉及注册登录、商品展示、购物车、下单等等。

## 技术栈

vue2 + vuex + vue-router + vue-cli + ES6 + axios + sass + flex

## 关于接口数据

接口项目地址：[shop-api](http://www.0quan8.com/index.php)


## 关于部署



# 项目运行

```
git clone https://github.com/nzsto/vue-shop-app.git

cd vue-shop-app

npm install

npm run serve

```

## 目标功能

- [x] 登陆、登出功能
- [x] 注册
- [x] 加入、删除、修改购物
- [x] 新增、修改、删除收货地址
- [x] 下单功能
- [x] 支付功能 -- 由于没权限申请到蚂蚁金服支付宝开发接口,因此只是模拟支付.
- [x] 商品详情
- [x] 个人中心
- [x] 订单列表


## 项目布局

```txt
.
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── dist                                        // 打包文件
├── src                                         // 源码目录
│   ├── api                                     // 请求接口
│   ├── common                                  // 公共组件
│   ├── components                              // 组件
│   ├── page                                    // 页面
│   │   └── Cart                                // 购物车
│   │   └── Checkout                            // 提交订单
│   │   └── Goods                               // 商品
│   │       ├── goods                           // 商品列表
│   │       ├── goodsDetails                    // 商品详情
│   │   └── Home                                // 主页
│   │   └── Login                               // 登陆
│   │   └── Order                               // 订单
│   │       ├── order                           // 商品列表
│   │       ├── payment                         // 提交订单
│   │       ├── paysuccess                      // 提交成功
│   │   └── User                                // 个人中心
│   │       ├── children
│   │       │   ├── addressList                 // 地址列表
│   │       │   ├── information                 // 个人信息
│   │       │   └── order                       // 订单列表
│   │   └── index.vue                           // 主页
│   ├── store                                   // vuex的状态管理
│   │   ├── action.js                           // 配置actions
│   │   ├── index.js                            // 引用vuex，创建store
│   │   ├── modules                             // store模块
│   │   ├── mutation-types.js                   // 定义常量muations名
│   │   └── mutations.js                        // 配置mutations
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── favicon.ico                                 // 图标
├── index.html                                  // 入口html文件
.

```
