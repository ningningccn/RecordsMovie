<template>
  <Header />
  <sort-bar :sortBarOption="sortBarOption" @getEmitStatus="getEmitStatus">
    <template #title> 綜藝 ( {{ getUserPostData.length }} ) </template>
  </sort-bar>
  <div class="container">
    <div class="row" v-if="getUserPostData.length > 0">
      <div
        class="col-6 col-md-4 col-lg-3 col-xl-2 px-1 my-1 my-sm-2"
        v-for="(item, key) in getUserPostData"
        :key="key">
        <card :item="item" @moveToPage="moveToPage"></card>
      </div>
    </div>
    <not-have-data v-else></not-have-data>
  </div>
  <Footer class="footer mt-5" />
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import NotHaveData from "@/components/NotHaveData.vue";

import SortBar from "@/components/Page/SortBar.vue";
import Card from "@/components/Card.vue";

export default {
  components: {
    Header,
    Footer,
    NotHaveData,
    SortBar,
    Card,
  },
  data() {
    return {
      sort: "all",
      sortBarOption: {
        all: {
          label: "全部",
        },
        hk: {
          label: "香港",
        },
        tw: {
          label: "台灣",
        },
        kr: {
          label: "韓國",
        },
        jp: {
          label: "日本",
        },
        cn: {
          label: "大陸",
        },
        foreign: {
          label: "外國",
        },
      },
    };
  },
  methods: {
    getEmitStatus(status) {
      this.sort = status;
    },
    moveToPage(uuid) {
      console.log(uuid);
      this.$router.push(`/post_detail/${uuid}`);
    },
  },
  watch: {
    sort() {
      this.filterPostData = this.getUserPostData.filter((item) => {
        if (this.sort == "all") {
          return;
        }
        return item[1].inputChildValue == this.sort;
      });
    },
  },
  computed: {
    getUserPostData() {
      var Data = this.$store.getters.userPostData;
      return Object.entries(Data)
        .reverse()
        .filter((item) => {
          if (this.sort !== "all") {
            return item[1].inputMainValue == "TVShow" && item[1].inputChildValue == this.sort;
          }
          return item[1].inputMainValue == "TVShow";
        });
    },
  },
  mounted() {
    this.$store.dispatch("getDBState");
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

.button_selected {
  background-color: #032541;
  color: #c0fecf;
  border-radius: 5px;
}

.bb_red {
  border-bottom: 2px solid #f36793;
}
.bb_green {
  border-bottom: 2px solid #6fff00;
}
</style>
