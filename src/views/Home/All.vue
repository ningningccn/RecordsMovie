<template>
  <search :value="searchText" @input="searchText = $event.target.value"> </search>
  <div class="container">
    <div class="row" v-if="userPostData.length > 0">
      <div
        class="col-6 col-md-4 col-lg-3 col-xl-2 px-1 my-1 my-sm-2"
        v-for="item in userPostData"
        :key="item.id">
        <card :item="item" @moveToPage="moveToPage"></card>
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
      var Data = this.$store.getters.userPostData;
      let filterA = Object.entries(Data)
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
    // translationMainWord() {
    //   return function (val) {
    //     switch (val) {
    //       case "Movie":
    //         return "電影";
    //       case "TVDrama":
    //         return "電視劇";
    //       case "TVShow":
    //         return "綜藝";
    //       case "Cartoon":
    //         return "動漫";
    //     }
    //   };
    // },
    // translationAreaWord() {
    //   return function (val) {
    //     switch (val) {
    //       case "CN":
    //         return "大陸";
    //       case "HK":
    //         return "香港";
    //       case "TW":
    //         return "台灣";
    //       case "US":
    //         return "美國";
    //       case "FR":
    //         return "法國";
    //       case "UK":
    //         return "英國";
    //       case "JP":
    //         return "日本";
    //       case "KR":
    //         return "韓國";
    //       case "GM":
    //         return "德國";
    //       case "TH":
    //         return "泰國";
    //       case "Other":
    //         return "其他";
    //     }
    //   };
    // },
    // translationChildWord() {
    //   return function (val) {
    //     switch (val) {
    //       case "tw":
    //         return "台灣";
    //       case "hk":
    //         return "香港";
    //       case "cn":
    //         return "大陸";
    //       case "kr":
    //         return "韓國";
    //       case "jp":
    //         return "日本";
    //       case "other":
    //         return "其他";
    //     }
    //   };
    // },
  },
  mounted() {
    this.$store.dispatch("getDBState");
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    moveToPage(uuid) {
      console.log(uuid);
      this.$router.push(`/post_detail/${uuid}`);
    },
    pushRouter(id) {
      console.log(id);
      this.$router.push(`/post_detail/${id}`);
    },
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
