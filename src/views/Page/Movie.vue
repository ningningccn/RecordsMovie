<template>
  <Header />
  <sort-bar
    :sortBarOption="sortBarOption"
    :sortBarOption2="sortBarOption2"
    @getEmitStatus="getEmitStatus"
    @getEmitArea="getEmitArea">
    <template #title> 電影 ( {{ getUserPostData.length }} ) </template>
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

  <Footer />
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
      area: "ALL",
      sort: "all",
      sortBarOption: {
        all: {
          label: "全部",
        },
        plot: {
          label: "劇情",
        },
        action: {
          label: "動作",
        },
        science: {
          label: "科幻",
        },
        love: {
          label: "愛情",
        },
        war: {
          label: "戰爭",
        },
        fear: {
          label: "恐怖",
        },
        cartoon: {
          label: "動畫電影",
        },
      },
      sortBarOption2: {
        ALL: {
          label: "全部",
        },
        CN: {
          label: "大陸",
        },
        HK: {
          label: "香港",
        },
        TW: {
          label: "台灣",
        },
        US: {
          label: "美國",
        },
        FR: {
          label: "法國",
        },
        alUKl: {
          label: "英國",
        },
        JP: {
          label: "日本",
        },
        KR: {
          label: "韓國",
        },
        GM: {
          label: "德國",
        },
        TH: {
          label: "泰國",
        },
        Other: {
          label: "其他",
        },
      },
    };
  },
  methods: {
    // selectArea(val) {
    //   this.area = val;
    // },
    // selectSort(val) {
    //   this.sort = val;
    // },
    // resetSort() {
    //   this.area = "ALL";
    //   this.sort = "all";
    // },
    getEmitArea(area) {
      this.area = area;
    },
    getEmitStatus(status) {
      this.sort = status;
    },
    moveToPage(uuid) {
      console.log(uuid);
      this.$router.push(`/post_detail/${uuid}`);
    },
  },
  computed: {
    getUserPostData() {
      var Data = this.$store.getters.userPostData;
      return Object.entries(Data)
        .reverse()
        .filter((item) => {
          if (this.sort !== "all" && this.area == "ALL") {
            return item[1].inputMainValue == "Movie" && item[1].inputChildValue == this.sort;
          }
          if (this.sort == "all" && this.area !== "ALL") {
            return item[1].inputMainValue == "Movie" && item[1].inputAreaValue == this.area;
          }
          if (this.sort !== "all" && this.area !== "ALL") {
            return (
              item[1].inputMainValue == "Movie" &&
              item[1].inputChildValue == this.sort &&
              item[1].inputAreaValue == this.area
            );
          }
          return item[1].inputMainValue == "Movie";
        });
    },
  },
  mounted() {
    this.$store.dispatch("getDBState");
  },
};
</script>

<style scoped>
a,
.nav-link {
  text-decoration: none;
  color: #032541;
}

.list {
  display: flex;
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
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

/* .yearColor {
  color: #00000099;
  font-size: 12px;
} */

/* .card_Shadow {
  box-shadow: 3px 3px 4px rgb(0 0 0 / 20%);
  cursor: pointer;
} */

/* .ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
} */
</style>
