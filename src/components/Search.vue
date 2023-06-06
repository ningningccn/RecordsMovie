<template>
  <div class="container px-1 input-group">
    <span class="input-group-text" id="basic-addon1">
      <i class="bi bi-search"></i>
    </span>
    <input
      type="search"
      placeholder="Search"
      class="form-control"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>

<script>
export default {
  name: "Search",
  props: ["modelValue"],
  emits: ["update:modelValue"],
};
</script>

<style lang="scss" scoped></style>
