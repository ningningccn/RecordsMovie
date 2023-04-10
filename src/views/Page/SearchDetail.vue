<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      url: "https://api.themoviedb.org/3/",
      api_key: "a44def496d0c387f06b632df3f6cb20e",
    };
  },
  methods: {
    getMovieDetail(id) {
      let apiUrl = this.url + "movie/" + id + "?api_key=" + this.api_key + "&language=zh-TW";
      this.axios.get(apiUrl).then((response) => {
        console.log(response);
      });
    },
    getTvDetail(id) {
      let apiUrl = this.url + "tv/" + id + "?api_key=" + this.api_key + "&language=zh-TW";
      this.axios.get(apiUrl).then((response) => {
        console.log(response);
      });
    },
  },
  created() {
    if (this.$route.params.mediaType == "tv") {
      this.getTvDetail(this.$route.params.mediaID);
    } else {
      this.getMovieDetail(this.$route.params.mediaID);
    }
    // https://api.themoviedb.org/3/tv/385687?api_key=a44def496d0c387f06b632df3f6cb20e&language=zh-TW
  },
};
</script>

<style lang="scss" scoped></style>
