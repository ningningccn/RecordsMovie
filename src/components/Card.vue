<template>
  <div
    class="card card-shadow card_shadow_green"
    :class="bgcolor"
    @click.prevent="moveToPage(item[0])">
    <img :src="`${item[1].url}`" alt="" class="img-size" />
    
    <!-- <slot name="img"></slot> -->
    <div class="py-2 px-3">
      <div class="d-flex justify-content-between">
        <div class="fw-bold card-ellipsis">
          <!-- <slot name="movieName"></slot> -->
          {{ movieName }}
        </div>
        <!-- <slot name="favorite"> </slot> -->
        <div>
          <i :class="class_favorite"></i>
        </div>
      </div>
      <div class="d-flex justify-content-between card-yearColor">
        <div class="d-flex">
          {{ translationMainWord }}
          <!-- <slot name="movieCategory">
            {{ translationMainWord }}
          </slot> -->
          <div class="ps-1">
            {{ translationAreaWord }}
            <!-- <slot name="movieArea">
              {{ translationAreaWord }}
            </slot> -->
          </div>
          <div class="ps-1">
            {{ translationChildWord }}
            <!-- <slot name="inputChildValue">
              {{ translationChildWord }}
            </slot> -->
          </div>
        </div>
        <div>
          {{ movieYear }}
          <!-- <slot name="year"> </slot> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  // props: ["backgroundColor", "uuid", "inputMainValue", "inputAreaValue", "inputChildValue"],
  props: ["item"],
  inject: ["reload"],
  // emits: ["moveToPage"],
  data() {
    return {};
  },
  computed: {
    propData() {
      return this.item[1];
    },
    translationMainWord() {
      const wordMap = {
        Movie: "電影",
        TVDrama: "電視劇",
        TVShow: "綜藝",
        Cartoon: "動漫",
      };
      return wordMap[this.item[1]?.inputMainValue] || "";
    },
    translationAreaWord() {
      const areaMap = {
        CN: "大陸",
        HK: "香港",
        TW: "台灣",
        US: "美國",
        FR: "法國",
        UK: "英國",
        JP: "日本",
        KR: "韓國",
        GM: "德國",
        TH: "泰國",
        Other: "其他",
      };
      return areaMap[this.item[1]?.inputMainValue] || "";
    },
    translationChildWord() {
      const childMap = {
        tw: "台灣",
        hk: "香港",
        cn: "大陸",
        kr: "韓國",
        jp: "日本",
        other: "其他",
        plot: "劇情",
        action: "動作",
        science: "科幻",
        love: "愛情",
        war: "戰爭",
        fear: "恐怖",
        cartoon: "動畫電影",
      };
      return childMap[this.item[1]?.inputMainValue] || "";
    },

    movieName() {
      return this.item[1]?.movieName || {};
    },
    movieYear() {
      return this.propData?.year || "";
    },
    bgcolor() {
      if (this.item[1]?.watched == 1) {
        return "bb_green";
      } else {
        return "bb_red";
      }
      // const colorMap = {
      //   0: "bb_red",
      //   1: "bb_green",
      // };
      // console.log(typeof this.item[1].watched);
      // return colorMap[this.item[1]?.watched || "bb_red"];
    },
    class_favorite() {
      let favoriteMap = {
        0: "bi bi-heart text-danger",
        1: "bi bi-heart-fill text-danger",
      };
      return favoriteMap[this.item[1]?.favorite] || "";
    },
  },
  methods: {
    moveToPage(uuid) {
      console.log(uuid);
      console.log(this);
      this.$router.push(`/post_detail/${uuid}`);
      this.reload();

      // this.$emit("moveToPage", uuid);
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
