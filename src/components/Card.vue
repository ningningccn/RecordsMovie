<template>
  <div
    class="card card-shadow card_shadow_green"
    :class="{
      bb_red: item[1].watched == 0,
      bb_green: item[1].watched == 1,
    }"
    @click.prevent="moveToPage(item[0])">
    <img :src="`${item[1].url}`" alt="" class="img-size" />
    <!-- <slot name="img"></slot> -->
    <div class="py-2 px-3">
      <div class="d-flex justify-content-between">
        <div class="fw-bold card-ellipsis">
          <!-- <slot name="movieName"></slot> -->
          {{ item[1].movieName }}
        </div>
        <!-- <slot name="favorite"> </slot> -->
        <div v-if="item[1].favorite == 1">
          <i class="bi bi-heart-fill text-danger"></i>
        </div>
        <div v-if="item[1].favorite == 0">
          <i class="bi bi-heart text-danger"></i>
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
          {{ item[1].year }}
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
  emits: ["moveToPage"],
  data() {
    return {};
  },
  computed: {
    translationMainWord() {
      switch (this.item[1].inputMainValue) {
        case "Movie":
          return "電影";
        case "TVDrama":
          return "電視劇";
        case "TVShow":
          return "綜藝";
        case "Cartoon":
          return "動漫";
        default:
          return "";
      }
    },
    translationAreaWord() {
      switch (this.item[1].inputAreaValue) {
        case "CN":
          return "大陸";
        case "HK":
          return "香港";
        case "TW":
          return "台灣";
        case "US":
          return "美國";
        case "FR":
          return "法國";
        case "UK":
          return "英國";
        case "JP":
          return "日本";
        case "KR":
          return "韓國";
        case "GM":
          return "德國";
        case "TH":
          return "泰國";
        case "Other":
          return "其他";
        default:
          return "";
      }
    },
    translationChildWord() {
      switch (this.item[1].inputChildValue) {
        case "tw":
          return "台灣";
        case "hk":
          return "香港";
        case "cn":
          return "大陸";
        case "kr":
          return "韓國";
        case "jp":
          return "日本";
        case "other":
          return "其他";
        case "plot":
          return "劇情";
        case "action":
          return "動作";
        case "science":
          return "科幻";
        case "love":
          return "愛情";
        case "war":
          return "戰爭";
        case "fear":
          return "恐怖";
        case "cartoon":
          return "動畫電影";
        default:
          return "";
      }
    },
  },
  methods: {
    moveToPage(uuid) {
      console.log(uuid);
      console.log(this);
      this.$emit("moveToPage", uuid);
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
