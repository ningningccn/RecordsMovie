<template>
  <!-- <search :value="searchText" @input="searchText = $event.target.value"> </search> -->
  <search v-model="searchText"> </search>
  <!-- <input type="text" v-model="searchText" /> -->
  <div class="container">
    <div class="row" v-if="userPostData.length > 0">
      <div
        class="col-6 col-md-4 col-lg-3 col-xl-2 px-1 my-1 my-sm-2"
        v-for="item in userPostData"
        :key="item.id">
        <card :item="item"></card>
      </div>
    </div>
    <not-have-data v-else></not-have-data>
    <div class="text-center mt-5">
      <div :class="{ 'spinner-border': isPageLoading }" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>
<script>
import Search from "@/components/Search.vue";
import Card from "@/components/Card.vue";
import NotHaveData from "@/components/NotHaveData.vue";
export default {
  data() {
    return {
      isPageLoading: false,
      searchText: "",
      page: 1,
      itemsPerPage: 24,
    };
  },
  components: {
    Search,
    Card,
    NotHaveData,
  },
  computed: {
    userPostData() {
      var data = this.$store.getters.userPostData;
      let filterA = Object.entries(data)
        .reverse()
        .filter((item) => {
          return item[1].movieName.match(this.searchText);
        });
      let filterB = filterA.filter((item, index) => {
        // console.log('index: ', index);
        return this.page * this.itemsPerPage > index;
      });
      return filterB;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const vm = this;
      const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        vm.isPageLoading = true;
        vm.page++;
        vm.isPageLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.bb_red {
  border-bottom: 2px solid #f36793;
}
.bb_green {
  border-bottom: 2px solid #6fff00;
}
</style>
