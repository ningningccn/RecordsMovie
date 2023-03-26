<template>
  <div class="container p-1">
    <h2 class="d-flex my-4">
      <slot name="title"></slot>
    </h2>

    <div class="card py-4" style="background-color: #f1f1f1">
      <div class="nav">
        <h4 class="px-3">飾選</h4>
        <a href="#" class="mt-1 resetSort_size" @click.prevent="resetSort()">重置飾選</a>
      </div>
      <div class="list d-flex">
        <span class="nav-link fw-bold">分類</span>
        <a
          class="nav-link"
          href="#"
          :class="{ button_selected: sort == `${key}` }"
          @click.prevent="selectSort(key)"
          v-for="(option, key) in sortBarOption"
          :key="option.id"
          >{{ option.label }}
        </a>
      </div>
      <div class="list d-flex mt-3" v-if="sortBarOption2">
        <span class="nav-link fw-bold">地區</span>
        <a
          class="nav-link"
          href="#"
          :class="{ button_selected: area == `${key}` }"
          @click.prevent="selectArea(key)"
          v-for="(option, key) in sortBarOption2"
          :key="option.id"
          >{{ option.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sortBarOption: Object,
    sortBarOption2: Object,
  },
  emits: ["getEmitStatus", "getEmitArea"],
  data() {
    return {
      area: "ALL",
      sort: "all",
    };
  },
  methods: {
    resetSort() {
      console.log("resort");
      if (this.sortBarOption2) {
        this.area = "ALL";
        this.sort = "all";
        this.$emit("getEmitStatus", this.sort);
        this.$emit("getEmitArea", this.area);
      } else {
        this.sort = "all";
        this.$emit("getEmitStatus", this.sort);
      }
    },
    selectArea(val) {
      this.area = val;
      this.$emit("getEmitArea", this.area);
    },
    selectSort(val) {
      console.log(val);
      this.sort = val;
      this.$emit("getEmitStatus", this.sort);
    },
  },
};
</script>

<style scoped>
.list {
  overflow-x: auto;
  white-space: nowrap;
}
a,
.nav-link {
  text-decoration: none;
  color: #032541;
}
.resetSort_size {
  font-size: 14px;
}

.button_selected {
  background-color: #032541;
  color: #c0fecf;
  border-radius: 5px;
}
</style>
