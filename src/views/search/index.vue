<template>
  <Header />
  <div class="container-md">
    <h2 class="d-flex my-4">搜尋結果 ({{ total_results }})</h2>
    <div class="search-bar">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="搜尋內容" v-model="searchText" />
        <button class="btn btn-search" type="button" @click="searchData()">搜尋</button>
      </div>
    </div>
    <div class="search-content row g-0">
      <div
        class="col-6 col-md-4 col-lg-3 col-xl-2 px-1 my-1 my-sm-2"
        v-for="item in resultsData"
        :key="item.id">
        <searchCard :item="item" @getMediaID="getMediaDetail"></searchCard>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import SearchCard from "@/components/Page/SearchCard.vue";
import Footer from "@/components/Footer.vue";

import { searchMovieFetch } from "@/api";

export default {
  components: {
    Header,
    SearchCard,
    Footer,
  },
  data() {
    return {
      resultsData: [],
      querySearchText: "",
      searchText: "",
      total_results: 0,
    };
  },
  methods: {
    searchData() {
      this.$router.push(`/search?searchText=${this.searchText}`);
      this.searchText = "";
    },
    getMediaDetail(dataObj) {
      console.log(dataObj);
      this.$router.push({
        name: "searched",
        params: {
          mediaType: dataObj.media_type,
          mediaID: dataObj.id,
        },
      });
    },
  },
  async created() {
    this.$watch("$route.query", async () => {
      this.querySearchText = this.$route.query.searchText;
      let { results, total } = await searchMovieFetch(this.querySearchText);
      this.resultsData = results;
      this.total_results = total;

      // let apiUrl = this.url + this.api_key + "&language=zh-TW&query=" + this.querySearchText;
      // console.log(this.$route.query);
      // console.log(apiUrl);
      // this.axios.get(apiUrl).then((response) => {
      //   console.log(response.data);
      //   this.searchedData = response.data.results;
      //   this.total_results = response.data.total_results;
      // });
    });
    this.querySearchText = this.$route.query.searchText;
    let { results, total } = await searchMovieFetch(this.querySearchText);

    this.resultsData = results;
    this.total_results = total;
    // 
    // console.log(searchMovieData);
    // let apiUrl = this.url + this.api_key + "&language=zh-TW&query=" + this.querySearchText;
    // // console.log(this.$route.query);
    // console.log(apiUrl);
    // this.axios.get(apiUrl).then((response) => {
    //   console.log(response.data);
    //   this.searchedData = response.data.results;
    //   this.total_results = response.data.total_results;
    // });
  },
};
</script>

<style scoped>
.btn.btn-search {
  background: rgb(3, 37, 65);
  color: #fff;
}

input:focus,
button:focus {
  box-shadow: none;
  border: 1px solid rgb(3, 37, 65);
}
</style>
