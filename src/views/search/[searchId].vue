<template>
  <Header></Header>
  <banner :data="data" :mediaType="mediaType"></banner>
  <button @click="openModal()">增加</button>
  <HeaderModalAdd :modal="modal" :data="data" id="searchModal"></HeaderModalAdd>
</template>

<script>
import Header from "@/components/Header.vue";
import banner from "@/components/search_detail_banner.vue";
import HeaderModalAdd from "@/components/HeaderModalAdd.vue";
import Modal from "bootstrap/js/dist/modal";

import { getSearchMovieDetail } from "@/api";

export default {
  components: {
    Header,
    banner,
    HeaderModalAdd,
  },
  data() {
    return {
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
    openModal() {
      this.modal = new Modal(document.getElementById("searchModal"));
      this.modal.show();
    },
  },
  async created() {
    this.mediaType = this.$route.params.mediaType;
    let mediaId = this.$route.params.mediaID;
    let res = await getSearchMovieDetail(this.mediaType, mediaId);
    this.data = res;
  },
};
</script>

<style lang="scss" scoped></style>
