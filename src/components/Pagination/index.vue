<template>
  <div class="pagination">
    <!-- 左箭头 -->
    <button @click="$emit('update:currentPage', currentPage - 1)" :disabled="currentPage === 1">
      &lt;
    </button>

    <!-- 页码1 -->
    <button :class="{ active: currentPage === 1 }" @click="currentPage = 1">1</button>
    <button v-show="startAndEnd.start > 2">...</button>

    <!-- 中间页码 -->
    <button
      v-for="item in startAndEnd.end - startAndEnd.start + 1"
      :key="item"
      :class="{ active: currentPage === getCurrentPage(item) }"
      @click="$emit('update:currentPage', getCurrentPage(item))"
    >
      {{ getCurrentPage(item) }}
    </button>

    <button v-show="startAndEnd.end < totalPages - 1">...</button>
    <!-- 最后一页 -->
    <button
      v-show="totalPages > 1"
      :class="{ active: currentPage === totalPages }"
      @click="$emit('update:currentPage', totalPages)"
    >
      {{ totalPages }}
    </button>

    <!-- 右箭头 -->
    <button
      @click="$emit('update:currentPage', currentPage + 1)"
      :disabled="currentPage >= totalPages"
    >
      &gt;
    </button>

    <!-- 每页条数 -->
    <select v-model="myPageSize" class="pagination-select">
      <option v-for="size in pageSizes" :key="size" :value="size">每页 {{ size }} 条</option>
    </select>

    <!-- 总数 -->
    <span class="pagination-total">共 {{ total }} 条</span>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    // 数据总数
    total: {
      type: Number,
      required: true,
    },
    // 当前页码
    'current-page': {
      type: Number,
      required: true,
    },
    //
    'page-sizes': {
      type: Array,
      required: true,
    },
    // 每页条数
    'page-size': {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      // myCurrentPage: this.currentPage,
      myPageSize: this.pageSize,
    };
  },
  methods: {
    getCurrentPage(item) {
      console.log(item + this.startAndEnd.start - 1);
      return item + this.startAndEnd.start - 1;
    },
  },
  computed: {
    // 总页数
    totalPages() {
      return Math.ceil(this.total / this.myPageSize);
    },

    // 当前页码前后页
    startAndEnd() {
      const { currentPage, totalPages } = this;

      if (totalPages <= 1) {
        return {
          start: 1,
          end: 0,
        };
      }

      if (totalPages <= 7) {
        return {
          start: 2,
          end: totalPages - 1,
        };
      }

      // 起始页
      let start = currentPage - 2;

      if (start < 2) start = 2;

      // 结束页
      let end = start + 5 - 1;

      if (end > totalPages - 1) {
        end = totalPages - 1;
        start = end - 4;
      }

      if (totalPages < end) {
        end = totalPages;
      }

      return {
        start,
        end,
      };
    },
  },
  watch: {
    /**
     * @msg: 监视 currentPage
     *  发生改变调用父组件方法更新数据(发送请求)
     * @param {*} currentPage: 最新 myCurrentPage 的值，传递给父组件方法
     */
    currentPage(currentPage) {
      this.$emit('current-change', currentPage);
    },

    /**
     * @msg: 监视 myPageSize
     *  发生改变调用父组件方法更新数据(发送请求)
     * @param {*} pageSize: 最新 myPageSize 的值，传递给父组件方法
     */
    myPageSize(pageSize) {
      if (this.currentPage > this.totalPages) {
        console.log(1);
        this.$emit('update:currentPage', this.totalPages);
      }
      console.log(1);
      this.$emit('size-change', pageSize);
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  display: flex;
  justify-content: center;

  button {
    outline: none;
    border: none;
    margin: 0 5px;
    width: 30px;
    height: 30px;
    background-color: #f4f4f5;
    color: #303133;
    font-weight: 700;
    border-radius: 2px;
    cursor: pointer;

    &.active {
      background-color: #409eff;
      color: #fff;
    }

    &:disabled {
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }

  .pagination-total {
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    vertical-align: top;
    box-sizing: border-box;
  }

  .pagination-select {
    width: 100px;
    margin: 0 5px;
    font-size: 12px;
    border-radius: 3px;
    border: 1px solid #dcdfe6;
    outline: none;
    color: #606266;
    padding-left: 10px;
  }
}
</style>
