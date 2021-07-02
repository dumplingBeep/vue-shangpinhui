<template>
  <div class="message-box-wrap" v-show="visible" @click="close">
    <div class="message-box" @click.stop>
      <div class="message-box-header">
        <span class="message-box-title">{{ title }}</span>
        <button class="message-box-header_btn" @click="close">×</button>
      </div>
      <div class="message-box-content">
        <slot />
      </div>
      <div class="message-box-footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '标题',
    },
  },
  methods: {
    close() {
      this.$emit('update:visible', false);
    },
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        document.documentElement.style.overflowY = 'hidden';
      } else {
        document.documentElement.style.overflowY = 'auto';
      }
    },
  },
  beforeDestroy() {
    document.documentElement.style.overflowY = 'auto';
  },
};
</script>

<style lang="less" scoped>
.message-box-wrap {
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;

  &:after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 0;
    vertical-align: middle;
  }
}

.message-box {
  display: inline-block;
  width: 420px;
  padding-bottom: 10px;
  vertical-align: middle;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  font-size: 18px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  text-align: left;
  overflow: hidden;
  backface-visibility: hidden;
}

.message-box-header {
  position: relative;
  padding: 15px 15px 10px;
  font-size: 18px;
  text-align: left;
}

.message-box-header_btn {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 0;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  cursor: pointer;
}

.message-box-content {
  padding: 10px 15px;
  color: #606266;
  font-size: 14px;
}

.message-box-footer {
  padding: 5px 15px 0;
  text-align: right;

  button {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    outline: none;
    border: 1px solid #409eff;
    display: inline-block;
    line-height: 1;
    cursor: pointer;
    transition: 0.1s;
    box-sizing: border-box;

    &:hover {
      background: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }

    &:nth-child(2) {
      margin-left: 10px;
    }

    &.cancel-btn {
      color: #606266;
      background-color: #fff;
      border: 1px solid #dcdfe6;
    }

    &.cancel-btn:hover {
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
  }
}
</style>
