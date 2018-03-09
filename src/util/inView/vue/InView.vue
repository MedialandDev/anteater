<template lang="pug">
.in-view
  slot
</template>

<script>
// eslint-disable-next-line
import inView from 'ml.anteater/util/inView';

export default {
  name: 'anteater-inview',
  props: {
    options: {
      type: Object,
    },
  },
  mounted() {
    const { $el, options } = this;
    inView($el, options).subscribe((bool) => {
      this.$emit('change', bool);
    });
  },
};
</script>
