<template>
  <div class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-white" id="exampleModalLabel">新增記錄</h5>
          <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">
            <i class="bi bi-x-lg text-light"></i>
          </button>
        </div>
        <!-- body -->
        <div class="modal-body">
          <form @submit.prevent="addData()">
            <div>
              <img v-show="showImg" :src="showImg" class="w-75 mx-auto mb-3" />
              <div class="input-group mb-3" v-if="!showImg">
                <input type="file" accept="image/*" class="form-control" @change="handleFile" />
              </div>
              <div class="input-group mb-3" v-else>
                <button  type="button" class="btn changImg_btn mx-auto" @click="removeImg">
                  更換照片
                </button>
              </div>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">紀錄日期</span>
              <input type="date" class="form-control" required v-model="moviePost.watchDate" />
            </div>
            <div class="input-group mb-3">
              <label class="input-group-text" for="inputGroupSelect01">類別</label>
              <select
                class="form-select"
                id="inputGroupSelect01"
                v-model="moviePost.inputMainValue">
                <option value="none" selected disabled>請選擇</option>
                <option :value="key" v-for="(item, key) in movieType" :key="item.id">
                  {{ item }}
                </option>
              </select>
            </div>
            <div v-if="moviePost.inputMainValue == 'Movie'" class="input-group mb-3">
              <label class="input-group-text" for="inputGroupSelect01">分類</label>
              <select class="form-select" v-model="moviePost.inputChildValue">
                <option value="none" selected disabled>請選擇</option>
                <option :value="key" v-for="(item, key) in movieCategory" :key="item.id">
                  {{ item }}
                </option>
              </select>
            </div>
            <div v-if="moviePost.inputMainValue == 'Movie'" class="input-group mb-3">
              <label class="input-group-text" for="inputGroupSelect01">地區</label>
              <select class="form-select" v-model="moviePost.inputAreaValue">
                <option value="none" selected disabled>請選擇</option>
                <option :value="key" v-for="(item, key) in movieArea" :key="item.id">
                  {{ item }}
                </option>
              </select>
            </div>
            <div v-if="moviePost.inputMainValue == 'TVDrama'" class="input-group mb-3">
              <label class="input-group-text" for="inputGroupSelect01">類別</label>
              <select class="form-select" v-model="moviePost.inputChildValue">
                <option value="none" selected disabled>請選擇</option>
                <option :value="key" v-for="(item, key) in tvDramaCategory" :key="item.id">
                  {{ item }}
                </option>
              </select>
            </div>
            <div v-if="moviePost.inputMainValue == 'TVShow'" class="input-group mb-3">
              <label class="input-group-text" for="inputGroupSelect01">類別</label>
              <select class="form-select" v-model="moviePost.inputChildValue">
                <option value="none" selected disabled>請選擇</option>
                <option :value="key" v-for="(item, key) in tvShowCategory" :key="item.id">
                  {{ item }}
                </option>
              </select>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">名稱</span>
              <input type="text" class="form-control" v-model="moviePost.movieName" required />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">年份</span>
              <input
                type="number"
                class="form-control"
                placeholder="2022"
                v-model="moviePost.year"
                required />
            </div>
            <!-- button group -->
            <div class="w-100 d-flex btn-group mb-3">
              <!-- favorite -->
              <a
                class="btn w-50 btn_not_favorite"
                v-if="moviePost.favorite == 0"
                @click="addFavorite">
                <i class="bi bi-heart px-1"></i>
                <span>加入最愛</span>
              </a>
              <a class="btn btn_favorite w-50" v-if="moviePost.favorite == 1" @click="addFavorite">
                <i class="bi bi-heart-fill px-1"></i>
                <span>已加入最愛</span>
              </a>
              <a class="btn btn_watched w-50" v-if="moviePost.watched == 1" @click="addWatch">
                <i class="bi bi-eye px-1"></i>
                <span>已觀看</span>
              </a>
              <a class="btn w-50 btn_not_watched" v-if="moviePost.watched == 0" @click="addWatch">
                <i class="bi bi-eye-slash px-1"></i>
                <span>未觀看</span>
              </a>
            </div>
            <!-- star -->
            <div class="starBox d-flex text-warning">
              <div v-for="n in 5" :key="n" @mouseenter="enter(n)" @mouseleave="out" @click="ok(n)">
                <div class="d-flex">
                  <div v-if="moviePost.mark < n">
                    <i class="bi bi-star"></i>
                  </div>
                  <div v-if="moviePost.mark >= n">
                    <i class="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
            </div>

            <button class="btn submit_btn mt-5 w-100" type="submit" :disabled="isDisable">
              <span
                class="spinner-border-sm"
                role="status"
                :class="{ 'spinner-border': isLoading }"
                aria-hidden="true"></span>
              新增
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db, auth } from "../db";
import { storage } from "../db";

import { ref as fireRef, set, push, child } from "firebase/database";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { onAuthStateChanged } from "firebase/auth";
// import Modal from "bootstrap/js/dist/modal";
import {
  movieTypeMap,
  movieCategoryMap,
  movieAreaMap,
  tvDramaCategoryMap,
  tvShowCategory,
} from "@/data/header-modal-add";

export default {
  inject: ["reload"],
  props: ["modal", "data"],
  data() {
    return {
      isDisable: false,
      isLoading: false,
      Modal: null,
      File: null,
      showImg: "",
      moviePost: {
        inputMainValue: "none",
        inputChildValue: "none",
        inputAreaValue: "none",
        movieName: "",
        year: "",
        mark: 0,
        favorite: 0,
        watched: 1,
        url: "",
        watchDate: new Date(+new Date() + 8 * 3600 * 1000).toISOString().substr(0, 10),
        uploadDate: new Date(+new Date() + 8 * 3600 * 1000).toISOString().substr(0, 10),
      },
      flag: false,
    };
  },
  watch: {
    data(newValue) {
      console.log(newValue);
      this.moviePost.movieName = newValue.name || newValue.title || "";
      let year = newValue?.first_air_date || newValue?.release_date || "";
      if (year !== "") {
        this.moviePost.year = year.split("-")[0];
      }
      this.showImg = `https://image.tmdb.org/t/p/w500/${newValue.poster_path}`;
      this.moviePost.url = `https://image.tmdb.org/t/p/w500/${newValue.poster_path}`;
    },
  },
  methods: {
    handleFile(e) {
      let vm = this;
      console.log();
      vm.File = e.target.files[0];
      console.log(e.target.files[0]);
      var reader = new FileReader();
      reader.readAsDataURL(vm.File);
      reader.onload = (e) => {
        vm.showImg = e.target.result;

        var image = new Image();
        image.src = e.target.result;
        image.onload = () => {
          var width = image.width;
          var height = image.height;
          // console.log("width: ", width);
          // console.log("height: ", height);
          // console.log(width < 420);
          // console.log(height < 420);
          // console.log(width < height);

          if (width > height) {
            alert("圖片比例不對");
            vm.showImg = "";
            return;
          }
          if (width < 420 && height < 500) {
            vm.showImg = "";
            alert("圖片尺寸沒有420 * 500 ");
          }
        };
      };
    },
    addData() {
      if (this.File) {
        this.addDb().then(this.getUrl).then(this.addPost);
      } else {
        this.addPost();
      }
    },
    addDb() {
      return new Promise((resolve, reject) => {
        if (this.File) {
          (this.isDisable = true),
            (this.isLoading = true),
            uploadBytes(storageRef(storage, `${this.File.name}`), this.File)
              .then(() => {
                resolve(`Uploaded a blob or file!`);
                // console.log(`Uploaded a blob or file!`)
              })
              .catch((error) => {
                reject(error);
              });
        } else {
          console.log("return");
          alert("error");
          return;
        }
      });
    },
    getUrl() {
      return new Promise((resolve, reject) => {
        getDownloadURL(storageRef(storage, `${this.File.name}`))
          .then((url) => {
            let vm = this;
            vm.moviePost.url = url;
            console.log(url);
            resolve("getUrl");
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    addPost() {
      let vm = this;
      // var toast = new Toast(document.getElementById("liveToast"));
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const newKey = push(child(fireRef(db), "post")).key;
          set(fireRef(db, `/user/${user.uid}/post/` + newKey), vm.moviePost);
          console.log(this.modal);
          (this.isDisable = false), (this.isLoading = false), this.modal.hide();
          this.$router.push("/");
          this.reload();
        } else {
          this.$router.push("/");
          this.modal.hide();
        }
      });
    },
    removeImg() {
      this.showImg = "";
    },
    addFavorite() {
      let fav = this.moviePost.favorite;
      if (fav == "1") {
        this.moviePost.favorite = "0";
      } else {
        this.moviePost.favorite = "1";
      }
    },
    addWatch() {
      let watch = this.moviePost.watched;
      if (watch == "1") {
        this.moviePost.watched = "0";
        console.log("this.moviePost.watched1: ", this.moviePost.watched);
      } else {
        this.moviePost.watched = "1";
        console.log("this.moviePost.watched2: ", this.moviePost.watched);
      }
    },
    // add star
    enter(n) {
      //n 取值1-5
      if (!this.flag) {
        this.moviePost.mark = n;
        console.log("this.curIndex: ", this.moviePost.mark);
      }
    },
    out() {
      if (!this.flag) {
        // 没有点击过，curIndex值才会变化
        this.moviePost.mark = -1;
      }
    },
    ok(n) {
      console.log(this.flag);
      if (this.flag == false) {
        this.flag = true;
      } else {
        this.flag = false;
      }
      this.moviePost.mark = n; // 确认评价的星级数
    },
  },
  computed: {
    movieType() {
      return movieTypeMap;
    },
    movieCategory() {
      return movieCategoryMap;
    },
    movieArea() {
      return movieAreaMap;
    },
    tvDramaCategory() {
      return tvDramaCategoryMap;
    },
    tvShowCategory() {
      return tvShowCategory;
    },
  },
  mounted() {},
};
</script>

<style scoped>
/* modal */
.modal-header {
  background-color: #032541;
}
/* change img  */
.changImg_btn {
  background-color: #032541;
  color: #fff;
}
/* watched btn color  */
.btn_watched {
  color: #fff;
  background-color: #42b983;
  border-left: none;
}
.btn_not_watched {
  color: #42b983;
  border-color: #42b983;
  border-left: none;
}
.btn_watched:hover {
  color: #42b983;
  border-color: #42b983;
  background-color: #fff;
  border-left: none;
}
.btn_not_watched:hover {
  color: #fff;
  background-color: #42b983;
  border-left: none;
}
/* Favorite btn */
.btn_not_favorite {
  color: #fe628e;
  border-color: #fe628e;
  border-right: none;
}
.btn_not_favorite:hover {
  color: #ffffff;
  background-color: #fe628e;
  border-right: none;
}
.btn_favorite {
  color: #ffffff;
  background-color: #fe628e;
  border-color: #fe628e;
  border-right: none;
}
.btn_favorite:hover {
  color: #fe628e;
  background-color: #fff;
  border-right: none;
}
/* star  */
.starBox {
  font-size: 30px;
}
.submit_btn {
  background-color: #032541;
  color: #fff;
}

a > span {
  font-weight: bold;
}

.btn:focus {
  box-shadow: none;
}
</style>
