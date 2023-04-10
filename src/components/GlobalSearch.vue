<template>
  <div class="global-search" v-show="isGlobalSearch">
    <div class="container-md d-flex justify-content-end">
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        @click="globalSearchStatus()"></button>
    </div>
    <div class="container-md mt-3">
      <div class="search-title">搜尋詳細資訊</div>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="搜尋內容" v-model="searchText" />
        <button class="btn btn-search" type="button" @click="searchData()">搜尋</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["getSearchResponse"],
  data() {
    return {
      searchText: "",
    };
  },
  computed: {
    isGlobalSearch() {
      return this.$store.state.isGlobalSearch;
    },
  },
  methods: {
    globalSearchStatus() {
      this.$store.dispatch("globalSearchStatus");
    },
    searchData() {
      this.globalSearchStatus();
      this.$router.push(`/search?searchText=${this.searchText}`);
      this.searchText = "";
    },
  },
};
</script>

<style scoped>
.global-search {
  padding: 10px;
  background: #fff;
  position: sticky;
  top: 0;
  height: 200px;
  z-index: 100;
  font-size: 20px;
}
.global-search .search-title {
  font-weight: bold;
  margin-bottom: 10px;
}

.btn.btn-search {
  background: rgb(3, 37, 65);
  color: #fff;
}

input:focus {
  box-shadow: none;
  border: 1px solid rgb(3, 37, 65);
}
</style>
