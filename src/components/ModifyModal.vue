<template>
  <div class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="d-flex justify-content-end pe-3 pt-3">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <span class="input-group-text">紀錄日期</span>
            <input
              type="date"
              class="form-control"
              disabled="disabled"
              :value="postData.watchDate" />
          </div>
          <div class="input-group mb-3" v-if="postData.inputMainValue == 'Cartoon'">
            <span class="input-group-text">類別</span>
            <input class="form-control" disabled="disabled" value="卡通" />
          </div>
          <!-- type movie -->
          <div v-if="postData.inputMainValue == 'Movie'">
            <div class="input-group mb-3">
              <span class="input-group-text">類別</span>
              <input class="form-control" disabled="disabled" value="電影" />
            </div>
            <!-- 分類 -->
            <div class="input-group mb-3">
              <span class="input-group-text">分類</span>
              <input class="form-control" disabled="disabled" :value="displayChildValue" />
            </div>
            <!-- 地區 -->
            <div class="input-group mb-3">
              <span class="input-group-text">地區</span>
              <input class="form-control" disabled="disabled" :value="displayAreaValue" />
            </div>
          </div>
          <!-- type TVDrama-->
          <div v-if="postData.inputMainValue == 'TVDrama'">
            <div class="input-group mb-3">
              <span class="input-group-text">類別</span>
              <input class="form-control" disabled="disabled" value="電視劇" />
            </div>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">名稱</span>
            <input class="form-control" disabled="disabled" :value="postData.movieName" />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">年份</span>
            <input class="form-control" v-model="editPostData.year" />
          </div>
          <div class="starBox d-flex text-warning">
            <div v-for="n in 5" :key="n" @mouseenter="enter(n)" @mouseleave="out" @click="ok(n)">
              <div class="d-flex">
                <div v-if="editPostData.mark < n">
                  <i class="bi bi-star"></i>
                </div>
                <div v-if="editPostData.mark >= n">
                  <i class="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- {{ editPostData }} -->
        <div class="modal-footer">
          <button
            type="button"
            class="btn submit_btn w-100"
            data-bs-dismiss="modal"
            @click="triggerParentMethods()">
            修改資料
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModifyModal",
  props: {
    modalID: String,
    postData: Object,
  },
  emits: ["editPostData"],
  data() {
    return {
      editPostData: {},
      flag: true,
    };
  },
  computed: {
    displayChildValue() {
      switch (this.postData.inputChildValue) {
        case "love":
          return "愛情";
        case "plot":
          return "劇情";
        case "action":
          return "動作";
        case "science":
          return "科幻";
        case "war":
          return "戰爭";
        case "fear":
          return "恐怖";
        case "cartoon":
          return "動畫電影";
        default:
          return this.postData.inputChildValue;
      }
    },
    displayAreaValue() {
      switch (this.postData.inputAreaValue) {
        case "HK":
          return "香港";
        case "CN":
          return "大陸";
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
          return this.postData.inputAreaValue;
      }
    },
  },
  watch: {
    postData: {
      handler() {
        this.editPostData = JSON.parse(JSON.stringify(this.postData));
      },
    },
  },
  methods: {
    enter(n) {
      //n 取值1-5
      if (!this.flag) {
        console.log(n);
        this.editPostData.mark = n;
        // console.log("this.curIndex: ", this.moviePost.mark);
      }
    },
    out() {
      if (!this.flag) {
        // 没有点击过，curIndex值才会变化
        this.editPostData.mark = -1;
      }
    },
    ok(n) {
      console.log(this.flag);
      if (this.flag == false) {
        this.flag = true;
      } else {
        this.flag = false;
      }
      this.editPostData.mark = n; // 确认评价的星级数
    },
    triggerParentMethods() {
      this.$emit("editPostData", this.editPostData);
    },
  },
  mounted() {
    console.log("mounted");
  },
};
</script>

<style scoped>
/* dropdown */
ul > li > a {
  font-size: 16px;
}
.starBox {
  font-size: 30px;
}
.submit_btn {
  background-color: #032541;
  color: #fff;
}
</style>
