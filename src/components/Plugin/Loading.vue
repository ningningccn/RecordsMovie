<template>
  <div class="text-center mt-5">
    <div :class="{ 'spinner-border': isLoading }" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  props: {
    isLoading: Boolean,
  },
};
</script>

<style lang="scss" scoped></style>