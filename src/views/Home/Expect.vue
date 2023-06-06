<template>
  <search :value="searchText" @input="searchText = $event.target.value"> </search>
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
    <loading :isLoading="isPageLoading"></loading>
  </div>
</template>

<script>
import Search from "@/components/Search.vue";
import Card from "@/components/Card.vue";
import NotHaveData from "@/components/NotHaveData.vue";
import Loading from "@/components/Plugin/Loading.vue";

export default {
  components: {
    Search,
    Card,
    NotHaveData,
    Loading,
  },
  data() {
    return {
      isPageLoading: false,
      searchText: "",
      page: 1,
      itemsPerPage: 24,
    };
  },
  computed: {
    userPostData() {
      var Data = this.$store.getters.userPostData;
      let filterA = Object.entries(Data)
        .reverse()
        .filter((item) => {
          return item[1].watched == 0 && item[1].movieName.match(this.searchText);
        });
      let filterB = filterA.filter((item, index) => {
        console.log(6 > index);
        return this.page * this.itemsPerPage > index;
      });
      return filterB;
    },
  },
  methods: {
    handleScroll() {
      const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        this.page++;
      }
    },
  },

  mounted() {
    this.$store.dispatch("getDBState");
    window.addEventListener("scroll", this.handleScroll);
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
