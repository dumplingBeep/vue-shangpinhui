<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul v-for="goodsInfo in cartInfoList" :key="goodsInfo.id" class="cart-list">
          <li class="cart-list-con1">
            <input
              :checked="goodsInfo.isChecked"
              @change="updateGoodsIsChecked(goodsInfo)"
              type="checkbox"
              name="chk_list"
            />
          </li>
          <li class="cart-list-con2">
            <img :src="goodsInfo.imgUrl" :alt="goodsInfo.skuName" />
            <div class="item-msg">
              {{ goodsInfo.skuName }}
            </div>
          </li>
          <li class="cart-list-con3">
            <div class="item-txt">{{ goodsInfo.skuName }}</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{ goodsInfo.skuPrice }}</span>
          </li>
          <li class="cart-list-con5">
            <a @click="addGoodsNum(goodsInfo)" class="mins">-</a>
            <input
              autocomplete="off"
              type="text"
              :value="goodsInfo.skuNum"
              minnum="1"
              class="itxt"
            />
            <a @click="subtractGoodsNum(goodsInfo)" class="plus">+</a>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ goodsInfo.skuPrice * goodsInfo.skuNum }}</span>
          </li>
          <li class="cart-list-con7">
            <a @click="deleteGoods(goodsInfo.skuId)" class="sindelet">删除</a>
            <br />
            <a>移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input
          v-model="isAllBtnChecked"
          :checked="isAllChecked"
          @change="setAllChecked"
          class="chooseAll"
          type="checkbox"
        />
        <span>全选</span>
      </div>
      <div class="option">
        <a @click="visible = true">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">
          已选择
          <span>{{ totalNum }}</span>
          件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{ totalPrice }}</i>
        </div>
        <div class="sumbtn">
          <a @click="settlement" class="sum-btn">结算</a>
        </div>
      </div>
    </div>
    <Dialog :visible.sync="visible" title="提示">
      <template>
        <p class="tip-text sm-m-tb">{{ totalNum ? '删除选中商品' : '请至少选中一件商品！' }}</p>
      </template>
      <template #footer>
        <button @click="visible = false" v-show="totalNum" class="cancel-btn">取消</button>
        <button @click="confirm">{{ totalNum ? '确定' : '知道了' }}</button>
      </template>
    </Dialog>
  </div>
</template>

<script>
import {
  reqGetShopCartList,
  reqSetGoodsChecked,
  reqAddCart,
  reqDeleteGoods,
} from './../../api/shopcart';
import Dialog from './../../components/Dialog';

export default {
  name: 'ShopCart',
  components: {
    Dialog,
  },
  data() {
    return {
      cartInfoList: [],
      isAllBtnChecked: false,
      visible: false,
    };
  },
  async mounted() {
    const cartInfoList = await reqGetShopCartList();
    this.cartInfoList = cartInfoList[0].cartInfoList;
    this.isAllBtnChecked = +this.isAllChecked;
  },
  computed: {
    // 选中商品总数
    totalNum() {
      return this.cartInfoList
        .filter((cartInfo) => cartInfo.isChecked)
        .reduce((totalNum, cartInfo) => {
          totalNum += cartInfo.skuNum;
          return totalNum;
        }, 0);
    },
    // 选中商品总价
    totalPrice() {
      return this.cartInfoList
        .filter((cartInfo) => cartInfo.isChecked)
        .reduce((totalPrice, cartInfo) => {
          totalPrice += cartInfo.skuNum * cartInfo.skuPrice;
          return totalPrice;
        }, 0);
    },
    // // 商品是否全选
    isAllChecked: {
      get() {
        // 查找是否有未选中商品, 有则返回 false
        return !this.cartInfoList.find((cartInfo) => !cartInfo.isChecked);
      },
      set(val) {
        return val;
      },
    },
  },
  methods: {
    /**
     * @msg: 更新商品 checked 状态(发生请求)
     * @param {*} goodsInfo: 商品信息
     */
    async updateGoodsIsChecked(goodsInfo) {
      goodsInfo.isChecked = 1 - goodsInfo.isChecked;
      await reqSetGoodsChecked(goodsInfo.skuId, goodsInfo.isChecked);
      this.isAllBtnChecked = this.isAllChecked;
    },

    /**
     * @msg: 发送请求更新商品数
     * @param {*} skuId: 商品id
     * @param {*} goodsNum：商品数量
     */
    updateGoodsNum(skuId, goodsNum) {
      reqAddCart(skuId, goodsNum);
    },

    /**
     * @msg: 增加商品数量(发送请求)
     * @param {*} goodsInfo: 商品信息
     */
    addGoodsNum(goodsInfo) {
      if (goodsInfo.skuNum === 1) return;
      --goodsInfo.skuNum;
      this.updateGoodsNum(goodsInfo.skuId, -1);
    },

    /**
     * @msg: 减少商品数量(发送请求)
     * @param {*} goodsInfo: 商品信息
     */
    subtractGoodsNum(goodsInfo) {
      if (goodsInfo.skuNum === 99) return;
      ++goodsInfo.skuNum;
      this.updateGoodsNum(goodsInfo.skuId, 1);
    },

    /**
     * @msg: 点击传入当前skuId, 根据skuId删除商品(发送请求)
     * @param {*} skuId: 删除商品所需的 商品id
     */
    deleteGoods(skuId) {
      if (window.confirm('真的干掉?')) {
        this.cartInfoList = this.cartInfoList.filter((goodsInfo) => goodsInfo.skuId !== skuId);
        reqDeleteGoods(skuId);
      }
    },

    // 全选
    setAllChecked() {
      this.isAllBtnChecked = +this.isAllBtnChecked;

      // 过滤得到所有与全选按钮状态不同的商品
      // 相同状态不请求修改，节省请求数量
      const checkedCartInfoList = this.cartInfoList.filter(
        (cartInfo) => cartInfo.isChecked !== this.isAllBtnChecked
      );

      // 定义数组，保存所有 promise 请求
      const promiseAll = [];
      // 遍历过滤后的商品
      checkedCartInfoList.forEach((checkedCartInfo) => {
        // 发送请求返回 promise
        const p = reqSetGoodsChecked(checkedCartInfo.skuId, this.isAllBtnChecked);
        // 插入数组
        promiseAll.push(p);
      });

      // Promise.all：接收一个 promise 的 iterable 类型(array,map,set...)
      // 会等所有 promise 都返回结果触发回调函数
      // 注意：
      //  有一个promise返回reject,则Promise.all(promiseAll)返回失败的promise
      //  所有promise返回resolve,则Promise.all(promiseAll)返回成功的promise
      Promise.all(promiseAll)
        .then(() => {
          this.cartInfoList.forEach((cartInfo) => (cartInfo.isChecked = this.isAllBtnChecked));
        })
        .catch((e) => {
          console.log(e);
        });
    },

    // 删除选中商品
    confirm() {
      // 判断是否有选中商品，没有则退出隐藏
      if (!this.totalNum) {
        this.visible = false;
        return;
      }

      const promiseAll = new Set();
      const newCartInfoList = this.cartInfoList.reduce((p, cartInfo) => {
        if (cartInfo.isChecked) {
          promiseAll.add(reqDeleteGoods(cartInfo.skuId));
        } else {
          p.push(cartInfo);
        }

        return p;
      }, []);

      Promise.all(promiseAll).then(() => {
        this.cartInfoList = newCartInfoList;
        this.visible = false;
      });
    },

    // 结算
    settlement() {
      if (!this.totalNum) {
        this.visible = true;
        return;
      }
      this.$router.history.push('/trade');
    },
  },
};
</script>

<style lang="less" scoped>
.tip-text {
  text-align: center;
  font-size: 22px;
}

.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 25%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 25%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;
      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 4.1667%;
          input {
            cursor: pointer;
          }
        }

        .cart-list-con2 {
          width: 25%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }

        .cart-list-con3 {
          width: 20.8333%;

          .item-txt {
            text-align: center;
          }
        }

        .cart-list-con4 {
          width: 12.5%;
        }

        .cart-list-con5 {
          width: 12.5%;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
            cursor: pointer;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 31px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
            cursor: pointer;
          }
        }

        .cart-list-con6 {
          width: 12.5%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 12.5%;

          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
        cursor: pointer;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: 'Microsoft YaHei';
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}

.sindelet {
  cursor: pointer;
}
</style>
