<template>
  <!-- {{ searchedData }} -->
  <div class="card card-shadow" @click="getSearchID(item.id, item.media_type)">
    <img :src="`https://image.tmdb.org/t/p/w300/${item.poster_path}`" class="img-size" />
    <div class="details py-2 px-3">
      <div class="details">
        <h5 class="card-title card-ellipsis">{{ movieName }}</h5>
        <div class="d-flex justify-content-between mb-3">
          <small class="text-muted">{{ movieDate }}</small>
          <small class="text-muted">{{ movieType }}</small>
        </div>
        <p class="overview">
          {{ item.overview }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  emits: ["getMediaID"],
  computed: {
    movieName() {
      if (this.item.media_type == "tv") {
        return this.item.name;
      } else {
        return this.item.title;
      }
    },
    movieDate() {
      if (this.item.media_type == "tv") {
        return this.item.first_air_date;
      } else {
        return this.item.release_date;
      }
    },
    movieType() {
      if (this.item.media_type == "tv") {
        return "電視劇";
      } else {
        return "電影";
      }
    },
  },
  methods: {
    getSearchID(id, media_type) {
      this.$emit("getMediaID", { id, media_type });
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  height: 100%;
}
.details {
  text-align: left;
}
.overview {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
</style>
