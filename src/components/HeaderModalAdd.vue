<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true">
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
              <img v-if="showImg" :src="showImg" class="w-75 mx-auto mb-3" />
              <div class="input-group mb-3" v-if="!showImg">
                <input type="file" accept="image/*" class="form-control" @change="handleFile" />
              </div>
              <div class="input-group mb-3" v-else>
                <button type="button" class="btn changImg_btn mx-auto" @click="removeImg">
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
                <option value="Movie">電影</option>
                <option value="TVDrama">電視劇</option>
                <option value="TVShow">綜藝</option>
                <option value="Cartoon">動漫</option>
              </select>
            </div>
            <div v-if="moviePost.inputMainValue == 'Movie'" class="input-group mb-3">
              <label class="input-group-text" for="inputGroupSelect01">分類</label>
              <select class="form-select" v-model="moviePost.inputChildValue">
                <option value="none" selected disabled>請選擇</option>
                <option value="plot">劇情</option>
                <option value="action">動作</option>
                <option value="science">科幻</option>
                <option value="love">愛情</option>
                <option value="war">戰爭</option>
                <option value="fear">恐怖</option>
                <option value="cartoon">動畫電影</option>
              </select>
            </div>
            <div v-if="moviePost.inputMainValue == 'Movie'" class="input-group mb-3">
              <label class="input-group-text" for="inputGroupSelect01">地區</label>
              <select class="form-select" v-model="moviePost.inputAreaValue">
                <option value="none" selected disabled>請選擇</option>
                <option value="CN">大陸</option>
                <option value="HK">香港</option>
                <option value="TW">台灣</option>
                <option value="US">美國</option>
                <option value="FR">法國</option>
                <option value="UK">英國</option>
                <option value="JP">日本</option>
                <option value="KR">韓國</option>
                <option value="GM">德國</option>
                <option value="TH">泰國</option>
                <option value="Other">其他</option>
              </select>
            </div>
            <div v-if="moviePost.inputMainValue == 'TVDrama'" class="input-group mb-3">
              <label class="input-group-text" for="inputGroupSelect01">類別</label>
              <select class="form-select" v-model="moviePost.inputChildValue">
                <option value="none" selected disabled>請選擇</option>
                <option value="cn">陸劇</option>
                <option value="kr">韓劇</option>
                <option value="us">美劇</option>
                <option value="jp">日劇</option>
                <option value="tw">台劇</option>
                <option value="hk">港劇</option>
              </select>
            </div>
            <div v-if="moviePost.inputMainValue == 'TVShow'" class="input-group mb-3">
              <label class="input-group-text" for="inputGroupSelect01">類別</label>
              <select class="form-select" v-model="moviePost.inputChildValue">
                <option value="none" selected disabled>請選擇</option>
                <option value="tw">台灣</option>
                <option value="hk">香港</option>
                <option value="cn">大陸</option>
                <option value="kr">韓國</option>
                <option value="jp">日本</option>
                <option value="other">其他</option>
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
              <!-- <span class="input-group-text">集數</span>
        <input
          type="number"
          class="form-control"
          placeholder="1集"
          required
          v-model="moviePost.set"
        /> -->
            </div>
            <!-- <div class="input-group mb-3">
        <span class="input-group-text">評分</span>
        <input
          type="number"
          placeholder="1~10"
          min="0"
          max="10"
          class="form-control"
          v-model="moviePost.mark"
        />
      </div> -->
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
        <!-- <div class="modal-footer">
    <button
      type="reset"
      class="btn btn-secondary"
      data-bs-dismiss="modal"
    >
      Close
    </button>
    <button type="button" class="btn btn-primary" @click="addDb">
      Save changes
    </button>
    <button type="button" class="btn btn-primary" @click="uploadFile">
      upload
    </button>
    <button type="button" class="btn btn-primary" @click="closeModal">
      X
    </button>
  </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
