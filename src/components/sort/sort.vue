<template>
    <div class="shop_menu">
        <!-- 左边 -->
        <div class="menu_wrapper">
            <ul>
                <!-- current -->
                <li class="menu_item" v-for="(goods,index) in sortGoodsLists" :key="index"
                    :class="{current: index === currentIndex}" @click="clickList(index)" ref="menuList">
                    <span>{{goods.cata_name}}</span>
                </li>
            </ul>
        </div>
        <!-- 右边 -->
        <div class="shop_wrapper">
            <ul ref="itemList">
                <li class="shops-li" v-for="(goods, index1) in sortGoodsLists" :key="index1">
                    <div class="shops-title">
                        <h4>{{goods.cata_name}}</h4>
                    </div>
                    <ul class="phone-type" v-if="goods.tag === 'phone'">
                        <li v-for="(phone,index) in goods.category" :key="index">
                            <img :src="phone.icon" alt="">
                        </li>
                    </ul>
                    <ul class="shops-items">
                        <li v-for="(item, index2) in goods.items" :key="index2">
                            <img :src="item.icon" alt="">
                            <span>{{item.cata_name}}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import Vuex from "vuex";
    import BScroll from 'better-scroll'
    export default {
        name: 'Sort',
        data() {
            return {
                scrollY: 0, //右侧列表滑动的y轴坐标
                rightLiTops: [] //所有分类头部位置
            }
        },
        created() {
            this.actionsSort()
        },
        computed: {
            ...Vuex.mapState({ //列表数据
                sortGoodsLists: state => state.sort.sortGoodsLists
            }),
            //动态绑定class类名
            currentIndex(index) {
                const {
                    scrollY,
                    rightLiTops
                } = this;
                return rightLiTops.findIndex((tops, index) => {
                    this._initLeftScroll(index); //调用左右联调滚动效果
                    return scrollY >= tops && scrollY < rightLiTops[index + 1]
                })
            }
        },
        methods: {
            ...Vuex.mapActions({
                actionsSort: "sort/actionsSort"
            }),
            _initBScroll() {
                //左边滚动
                this.leftBscroll = new BScroll('.menu_wrapper', {});
                //右边滚动
                this.rightBscroll = new BScroll('.shop_wrapper', {
                    probeType: 3 //在滚动中触发scroll 事件
                });
                //监听右边滚动事件
                this.rightBscroll.on('scroll', (pos) => {
                    this.scrollY = Math.abs(pos.y);
                    // console.log(this.scrollY)
                })
            },
            //求出右边列表的高度
            _initRightHeight() {
                let itemArray = []; //定义一个伪数组
                let top = 0;
                itemArray.push(top)
                //获取右边所有li的礼
                let allList = this.$refs.itemList.getElementsByClassName('shops-li');
                //allList伪数组转化成真数组
                Array.prototype.slice.call(allList).forEach(li => {
                    top += li.clientHeight; //获取所有li的每一个高度
                    itemArray.push(top)
                });
                this.rightLiTops = itemArray;
                //console.log(this.rightLiTops)
            },
            //点击左边实现滚动
            clickList(index) {
                this.scrollY = this.rightLiTops[index];
                //console.log(this.scrollY)
                this.rightBscroll.scrollTo(0, -this.scrollY, 200, )
            },
            //左右联调
            _initLeftScroll(index) {
                let menu = this.$refs.menuList;
                let el = menu[index];
                this.leftBscroll.scrollToElement(el, 300, 0, -300)
            }
        },
        watch: {
            sortGoodsLists() {
                //监听数据
                this.$nextTick(() => {
                    //左右两边滚动
                    this._initBScroll();
                    //右边列表高度
                    this._initRightHeight()
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    .shop_menu {
        overflow: hidden;
        margin-top: .9rem;
        position: absolute;
        width: 100%;
        display: flex;
    }

    .menu_wrapper {
        width: 25%;
        height: 100%;
        text-align: center;
        background: #f5f5f5;
        overflow-y: hidden;
    }

    .menu_wrapper .menu_item {
        display: block;
        width: 100%;
        line-height: 1.066667rem;
        font-size: .346667rem;
        box-sizing: border-box;
        overflow: hidden;
    }

    .menu_wrapper .menu_item.current {
        color: #fd575c;
        background: #fff;
        border-left: 3px solid #fd575c;
    }

    .shop-wrapper {
        flex: 1;
        background: #fff;

        .shops-title {
            display: flex;
            flex-direction: row;
            padding: 0 10px;
            height: 40px;
            align-items: center;
            justify-content: space-between;
            color: #9999;
        }

        a {
            text-decoration: none;
            color: #9c9c9c;
            font-size: 14px;
        }

        .shops-items {
            display: flex;
            flex-wrap: wrap;

            li {
                display: flex;
                flex-direction: column;
                width: 33.3%;
                height: 90px;
                justify-content: center;
                align-items: center;

                img {
                    width: 60%;
                    height: 60%;
                    margin-bottom: 5px;
                }

                span {
                    color: #151516;
                    font-size: 13px
                }
            }
        }
    }

    .phone-type {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        border-bottom-1px: (#cccccc);

        li {
            width: 33.3%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 5px 0;

            img {
                width: 70%;
            }
        }
    }
</style>