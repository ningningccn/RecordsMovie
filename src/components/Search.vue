<template>
  <div class="container px-1 input-group">
    <span class="input-group-text" id="basic-addon1">
      <i class="bi bi-search"></i>
    </span>
    <input
      type="search"
      placeholder="Search"
      class="form-control"
      :value="value"
      @input="getSearchValue" />
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {
    value: {
      type: String,
    },
  },
  methods: {
    getSearchValue(e) {
      console.log(e.target.value);
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
