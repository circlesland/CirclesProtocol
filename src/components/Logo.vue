<template>
  <img src="/logo.svg" :width="getWidth" :height="getHeight" x="0.0" y="0.0" viewBox="0 0 48 48" />
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 40,
    },
  },

  computed: {
    getWidth() {
      return this.width;
    },

    getHeight() {
      return Math.ceil((this.getWidth / 48) * 48);
    },
  },
};
</script>

