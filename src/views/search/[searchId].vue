<template>
  <Header></Header>
  <banner :data="data" :mediaType="mediaType"></banner>
  <button @click="openModal()">增加</button>
  <HeaderModalAdd :modal="modal" :name="name"></HeaderModalAdd>
</template>

<script>
import Header from "@/components/Header.vue";
import banner from "@/components/search_detail_banner.vue";
import HeaderModalAdd from "@/components/HeaderModalAdd.vue";

import Modal from "bootstrap/js/dist/modal";

export default {
  components: {
    Header,
    banner,
    HeaderModalAdd,
  },
  data() {
    return {
      url: "https://api.themoviedb.org/3/",
      api_key: "a44def496d0c387f06b632df3f6cb20e",
      data: {},
      mediaType: "",
      modal: null,
    };
  },
  computed: {
    name() {
      return this.data?.name || "";
    },
  },
  methods: {
    getMovieDetail(id) {
      let apiUrl = this.url + "movie/" + id + "?api_key=" + this.api_key + "&language=zh-TW";
      this.axios.get(apiUrl).then((response) => {
        this.data = response.data;
        // console.log(response);
      });
    },
    getTvDetail(id) {
      let apiUrl = this.url + "tv/" + id + "?api_key=" + this.api_key + "&language=zh-TW";
      this.axios.get(apiUrl).then((response) => {
        console.log(response);
        this.data = response.data;
      });
    },
    openModal() {
      this.modal = new Modal(document.getElementById("exampleModal"));
      this.modal.show();
    },
  },
  created() {
    if (this.$route.params.mediaType == "tv") {
      this.getTvDetail(this.$route.params.mediaID);
      this.mediaType = this.$route.params.mediaType;
    } else {
      this.getMovieDetail(this.$route.params.mediaID);
      this.mediaType = this.$route.params.mediaType;
    }
    // https://api.themoviedb.org/3/tv/385687?api_key=a44def496d0c387f06b632df3f6cb20e&language=zh-TW
  },
};
</script>

<style lang="scss" scoped></style>
