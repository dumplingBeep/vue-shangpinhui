<template>
  <div class="controls">
    <input
      :value="count"
      @blur="handleBlur"
      @click.enter="handleBlur"
      autocomplete="off"
      class="itxt"
    />
    <a
      @click="count = count >= max ? max : ++count"
      :class="{ plus: true, disabled: count === max }"
    >
      +
    </a>
    <a
      @click="count = count <= min ? min : --count"
      :class="{ mins: true, disabled: count === min }"
    >
      -
    </a>
  </div>
</template>

<script>
export default {
  name: 'InputNum',
  data() {
    return {
      count: this.num,
    };
  },
  props: {
    num: {
      type: Number,
      default: 1,
    },
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 99,
    },
  },
  methods: {
    /**
     * @msg: 失去焦点事件：
     *  收集最新产品数量
     *  调用父组件自定义事件,更新父组件 v-model 数据
     * @param {*} e: 事件对象
     */
    handleBlur(e) {
      this.$emit('input', (this.count = +e.target.value));
    },
  },
  watch: {
    /**
     * @msg: 监视 count：
     *  值发生修改做临界值判断
     *  调用父组件自定义事件,更新父组件 v-model 数据
     */
    count(newCount, oldCount) {
      let count = newCount;

      // 非数字类型，展示上一次的值
      if (Number.isNaN(count)) {
        count = oldCount;
      }
      // 限制最小值
      else if (newCount < this.min) {
        count = this.min;
      }
      // 限制最大值
      else if (newCount > this.max) {
        count = this.max;
      }

      console.log(1);
      this.count = count;
      this.$emit('input', count);
    },
  },
};
</script>

<style lang="less" scoped>
.controls {
  width: 48px;
  position: relative;
  float: left;
  margin-right: 15px;

  .itxt {
    width: 38px;
    height: 35px;
    border: 1px solid #ddd;
    color: #555;
    float: left;
    border-right: 0;
    text-align: center;
  }

  .plus,
  .mins {
    width: 15px;
    text-align: center;
    height: 17px;
    line-height: 17px;
    background: #f1f1f1;
    color: #666;
    position: absolute;
    right: -8px;
    border: 1px solid #ccc;
    cursor: pointer;
    user-select: none;

    &.disabled {
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }

  .mins {
    right: -8px;
    top: 19px;
    border-top: 0;
  }

  .plus {
    right: -8px;
  }
}
</style>
