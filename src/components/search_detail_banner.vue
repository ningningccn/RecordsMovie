<template>
  <div
    :style="{
      backgroundImage: 'url(' + backdrop_path + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }">
    <div class="mask">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <img :src="poster" alt="" class="img-fluid" />
          </div>
          <div class="col-md-8 text-start text-white">
            <div class="fz-5 mt-5">
              <span class="fw-bold">
                {{ name }}
              </span>
              <span class="fz-3"> {{ first_air_year }}</span>
            </div>
            <div class="language">{{ language }}</div>

            <div class="overview">
              <div class="fz-3 mt-3 fw-bold">概要</div>
              <div class="mt-2">
                {{ data.overview }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
    mediaType: {
      type: String,
    },
  },
  data() {
    return {
      languageList: {
        ja: "日本",
        en: "英文",
        zh: "漢語",
      },
    };
  },
  methods: {},
  computed: {
    poster() {
      if (this.data.poster_path) {
        return `https://image.tmdb.org/t/p/w500/${this.data.poster_path}`;
      }
      return "沒有poster";
    },
    name() {
      if (this.mediaType == "tv") {
        return this.data.name;
      } else if (this.mediaType == "movie") {
        return this.data.title;
      }
      return "mediaType not supported";
    },
    first_air_year() {
      let date = this.data?.first_air_date || this.data?.release_date || "";
      if (date !== "") {
        return `(${date.split("-")[0]})`;
      }
      return "";
    },
    language() {
      let language = this.data.original_language;
      if (language) {
        return this.languageList[language];
      }
      return "";
    },
    backdrop_path() {
      let backdrop = this.data.backdrop_path || this.data.poster_path;
      if (backdrop) {
        let back = "https://image.tmdb.org/t/p/w1280/" + backdrop;
        return back;
      }
      return "沒有圖片";
    },
  },
};
</script>

<style lang="scss" scoped>
.mask {
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(2px);
  padding-top: 100px;
  padding-bottom: 120px;
}
</style>
