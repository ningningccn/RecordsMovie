<template>
  <Header />
  <div
    :style="{
      backgroundImage: 'url(' + movieData.url + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }">
    <div class="mask">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4">
            <img :src="`${movieData.url}`" class="img-fluid" />
          </div>
          <div class="col-9 col-sm-6 col-md-8 mx-auto text-start text-white ps-md-5 my-5 my-sm-0">
            <!-- button dropdown -->
            <div>
              <button class="btn btn_background btn_setting_color" data-bs-toggle="dropdown">
                <i class="bi bi-three-dots"></i>
              </button>
              <ul class="dropdown-menu text-center">
                <li>
                  <a
                    class="dropdown-item py-2"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#movieDetailModal">
                    <i class="bi bi-pencil pe-3"></i>
                    編輯資料
                  </a>
                </li>
                <li>
                  <a class="dropdown-item py-2" href="#" @click="delPost">
                    <i class="bi bi-trash pe-3"></i>
                    刪除資料
                  </a>
                </li>
              </ul>
            </div>

            <!--  -->
            <div class="fz-5 mt-5">
              <span class="fw-bold">
                {{ movieName }}
              </span>
              <span class="fz-3"> ( {{ movieYear }} ) </span>
            </div>
            <div class="fz-3 mt-3">
              <div v-if="movieData.inputMainValue == 'Movie'">
                <div>
                  <span>{{ displayCategory }}: </span>
                  <span>{{ displayChildValue }}</span>
                </div>
                <div>
                  <span>地區: </span>
                  <span>{{ displayArea }} </span>
                </div>
              </div>
              <div v-else>
                <div>
                  <span>類別:</span>
                  <span>{{ displayCategory }}</span>
                </div>
                <div>
                  <span>地區:</span>
                  <span>{{ displayChildValue }}</span>
                </div>
              </div>
            </div>
            <!-- star -->
            <div class="fz-3 my-5">
              <div class="d-flex align-items-center">
                <div class="">個人評分:</div>
                <div class="starBox d-flex text-warning ms-1">
                  <div v-for="n in 5" :key="n">
                    <span v-if="movieData.mark < n">
                      <i class="bi bi-star"></i>
                    </span>
                    <span v-if="movieData.mark >= n">
                      <i class="bi bi-star-fill"></i>
                    </span>
                    <div></div>
                  </div>
                </div>
              </div>

              <div>紀錄日期: {{ movieWatchDate }}</div>
            </div>
            <!-- watched or favorite-->
            <div class="fz-0 d-flex">
              <div v-if="movieData.watched == 0" class="mx-2">
                <button
                  class="btn btn_background btn_not_watched"
                  data-bs-toggle="tooltip"
                  data-bs-trigger="hover focus"
                  data-bs-html="true"
                  data-bs-placement="top"
                  title="設定已觀看"
                  @click="addWatched(0)">
                  <i class="bi bi-eye-slash-fill fz-2"></i>
                </button>
              </div>
              <div v-if="movieData.watched == 1" class="mx-2">
                <button
                  class="btn btn_background btn_watched"
                  data-bs-toggle="tooltip"
                  data-bs-trigger="hover focus"
                  data-bs-html="true"
                  data-bs-placement="top"
                  title="設定未觀看"
                  @click="addWatched(1)">
                  <i class="bi bi-eye-fill fz-2"></i>
                </button>
              </div>
              <div v-if="movieData.favorite == 0" class="mx-2">
                <button
                  class="btn btn_background btn_not_favorite"
                  data-bs-toggle="tooltip"
                  data-bs-trigger="hover focus"
                  data-bs-html="true"
                  data-bs-placement="top"
                  title="增加最愛"
                  @click="addFavorite(0)">
                  <i class="bi bi-heart-fill fz-2"></i>
                </button>
              </div>
              <div v-if="movieData.favorite == 1" class="mx-2">
                <button
                  class="btn btn_background btn_favorite"
                  data-bs-toggle="tooltip"
                  data-bs-trigger="hover focus"
                  data-bs-html="true"
                  data-bs-placement="top"
                  title="取消最愛"
                  @click="addFavorite(1)">
                  <i class="bi bi-heart-fill fz-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 修改資料 Modal -->
  <modify-modal :postData="movieData" id="movieDetailModal" @editPostData="editPost"></modify-modal>
  <!-- other Movie -->
  <div class="container mt-3">
    <h2 class="text-start p-4">相關類別</h2>
    <!-- Movie Card -->
    <div class="row px-3">
      <div
        class="col-6 col-md-4 col-lg-3 col-xl-2 px-1 my-1 my-sm-2"
        v-for="(item, key) in aboutMovie"
        :key="key">
        <card :item="item" @moveToPage="moveToPage"></card>
      </div>
    </div>
  </div>
  <!-- Toast -->
  <div class="position-fixed bottom-0 w-100 p-5" style="z-index: 11">
    <div
      id="favoriteToast"
      class="toast mx-auto align-items-center toast_fav_bgc text-white border-0"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-bs-delay="3000">
      <div class="toast-body mx-auto fw-bold">
        <span class="w-100" v-if="movieData.favorite == 1">
          <i class="bi bi-heart-fill"></i> 已加入最愛
        </span>
        <span v-if="movieData.favorite == 0"><i class="bi bi-heart"></i> 已取消最愛 </span>
      </div>
    </div>
  </div>
  <!-- Toast -->
  <div class="position-fixed bottom-0 w-100 p-5" style="z-index: 11">
    <div
      id="watchedToast"
      class="toast mx-auto align-items-center toast_watch_bgc text-white border-0"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-bs-delay="3000">
      <div class="toast-body mx-auto fw-bold">
        <span class="w-100" v-if="movieData.watched == 1">
          <i class="bi bi-eye-fill"></i> 已設定觀看
        </span>
        <span v-if="movieData.watched == 0"> <i class="bi bi-eye-slash-fill"></i> 設定未觀看 </span>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Card from "@/components/Card.vue";
import ModifyModal from "@/components/ModifyModal.vue";

import { Tooltip, Toast } from "bootstrap";
// import { db, auth } from "@/db";
// import { db } from "@/db";
// import { ref, child, get } from "firebase/database";
// import { onAuthStateChanged } from "firebase/auth";

import { delMovieData, editMovieData, getMovieDetail } from "@/api";

export default {
  components: {
    Header,
    Footer,
    Card,
    ModifyModal,
  },
  inject: ["reload"],
  data() {
    return {
      movieData: {},
      // 修改用的資料
      modifyMovieData: {},
      number: "",
      uid: "",
      page: 1,
      itemsPerPage: 12,
      flag: true,
    };
  },

  methods: {
    moveToPage(uuid) {
      console.log(uuid);
      this.$router.push(`/post_detail/${uuid}`);
      this.reload();
    },
    async getDetail() {
      let data = await getMovieDetail(this.number);
      console.log(data);
      if (data) {
        this.movieData = data;
        this.modifyMovieData = { ...data };
      }
      // const dbRef = ref(db);
      // get(child(dbRef, `/user/${this.uid}/post/${this.number}`))
      //   .then((snapshot) => {
      //     if (snapshot.exists()) {
      //       this.postData = snapshot.val();
      //       this.modifyPostData = { ...snapshot.val() };
      //       console.log(this.postData);
      //     } else {
      //       console.log("No data available");
      //     }
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
    },
    // state() {
    //   return new Promise((resolve, reject) => {
    //     var vm = this;
    //     onAuthStateChanged(auth, (user) => {
    //       if (user) {
    //         vm.uid = user.uid;
    //         resolve(`獲取uid`);
    //       } else {
    //         reject("User is signed out: ");
    //       }
    //     });
    //   });
    // },
    delPost() {
      delMovieData(this.number);
      this.$router.push("/");
    },
    editPost(result) {
      let data = result;
      editMovieData(this.number, data);
    },
    // star
    addFavorite(val) {
      var toastLiveExample = document.getElementById("favoriteToast");
      var toast = new Toast(toastLiveExample);
      let data = this.movieData;
      data.favorite = val == 0 ? 1 : 0;
      editMovieData(this.number, data);
      // if (val == 0) {
      //   data.favorite = 1;
      // }
      // if (val == 1) {
      //   data.favorite = 0;
      // }

      console.log(`updated`);
      toast.show();
    },
    addWatched(val) {
      var toastLiveExample = document.getElementById("watchedToast");
      var toast = new Toast(toastLiveExample);
      let data = this.movieData;
      data.watched = val === 0 ? 1 : 0;
      editMovieData(this.number, data);

      toast.show();
      console.log(`updated`);
      // if (val == 0) {
      //   data.watched = 1;
      // }
      // if (val == 1) {
      //   data.watched = 0;
      // }
    },
    handleScroll() {
      const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        this.page++;
      }
    },
  },
  computed: {
    movieName() {
      return this.movieData?.movieName || "";
    },
    movieYear() {
      return this.movieData?.year || "";
    },
    movieWatchDate() {
      return this.movieData?.watchDate || "";
    },
    aboutMovie() {
      let type = this.movieData.inputMainValue;
      let postID = this.number;
      var Data = this.$store.getters.userPostData;
      let filterA = Object.entries(Data)
        .reverse()
        .filter((item) => {
          return item[1].inputMainValue == type && item[0] != postID;
        });
      let filterB = filterA.filter((item, index) => {
        return this.page * this.itemsPerPage > index;
      });
      return filterB;
    },
    displayCategory() {
      const categoryMap = {
        Movie: "電影",
        TVDrama: "電視劇",
        TVShow: "綜藝",
        Cartoon: "動漫",
      };
      return categoryMap[this.movieData?.inputMainValue] || "";
    },
    displayChildValue() {
      const childMap = {
        plot: "劇情",
        action: "動作",
        science: "科幻",
        love: "愛情",
        war: "戰爭",
        fear: "恐怖",
        cartoon: "動畫電影",
        tw: "台灣",
        hk: "香港",
        cn: "大陸",
        kr: "韓國",
        jp: "日本",
        other: "其他",
      };
      return childMap[this.movieData?.inputChildValue] || "";
    },
    displayArea() {
      const areaMap = {
        CN: "大陸",
        HK: "香港",
        TW: "台灣",
        US: "美國",
        FR: "法國",
        UK: "英國",
        KR: "日本",
        JP: "韓國",
        GM: "德國",
        TH: "泰國",
        Other: "其他",
      };
      return areaMap[this.movieData?.inputAreaValue] || "";
    },
  },
  created() {
    this.uid = this.$store.state.userID;
    this.number = this.$route.params.postId;
    this.getDetail();
    // this.state().then(this.getDetail);
    this.$store.dispatch("getDBState");
  },
  updated() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl, { container: tooltipTriggerEl });
    });
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.font-sm {
  font-size: 28px;
}

.mask {
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  padding-top: 100px;
  padding-bottom: 120px;
}
.btn_background {
  background: #021a2e;
  border-radius: 50%;
}
.btn_setting_color {
  color: #ffffff;
}
.btn_setting_color:hover {
  color: #0fec0f;
}
/* not favorite */
.btn_not_favorite {
  color: white;
}
.btn_not_favorite:hover {
  color: #fe628e;
}
/* is favorite */
.btn_favorite {
  color: #fe628e;
}
.btn_watched {
  color: #42b983;
}
.btn_favorite:hover,
.btn_watched:hover,
.btn_not_watched {
  color: white;
}
.btn_not_watched:hover {
  color: #42b983;
}

/* toast */
.toast_fav_bgc {
  background-color: #fe628e;
}
.toast_watch_bgc {
  background-color: #42b983;
}

/* dropdown */
ul > li > a {
  font-size: 16px;
}

/* star */

.starBox {
  font-size: 30px;
}

.submit_btn {
  background-color: #032541;
  color: #fff;
}
</style>
