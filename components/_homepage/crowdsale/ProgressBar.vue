<template>
  <div class="progress-bar">
    <div
    :class="isBlack == true ? 'progress-bar__inner black' : 'progress-bar__inner'"
    :style="`transform: translateX(${percentageLimited - 100}%)`"></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    percentage: {
      type: Number,
      validator: value => value >= 0 && value <= 100,
      default: 0
    },
    isBlack: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    percentageLimited() {
      if (this.percentage > 100) {
        return 100;
      }
      if (this.percentage < 0) {
        return 0;
      }
      return this.percentage;
    }
  }
};
</script>

<style lang="scss" scoped>
.progress-bar {

  &,
  &__inner {
    height: 9px;
    border-radius: 10px;
    width: 100%;
  }

  background: #efefef;
  overflow: hidden;

  &__inner {
    background: #222;
    transition: transform 0.15s;

    &.black {
      background: black;
    }
  }
}
</style>
