<template>
  <search :value="searchText" @input="searchText = $event.target.value"> </search>
  <div class="container">
    <div class="row" v-if="userPostData.length > 0">
      <div
        class="col-6 col-md-4 col-lg-3 col-xl-2 px-1 my-1 my-sm-2"
        v-for="item in userPostData"
        :key="item.id">
        <card :item="item" @moveToPage="moveToPage"></card>
      </div>
    </div>
    <not-have-data v-else></not-have-data>
    <loading :isLoading="isPageLoading"></loading>
  </div>
</template>
<script>
// import { useRouter } from 'vue-router'
// import { db , auth} from "@/db";
// import { ref, child, get } from "firebase/database";
// import { onAuthStateChanged } from "firebase/auth";
import Search from "@/components/Search.vue";
import Card from "@/components/Card.vue";
import NotHaveData from "@/components/NotHaveData.vue";
import Loading from "@/components/Plugin/Loading.vue";
export default {
  components: {
    Search,
    Card,
    NotHaveData,
    Loading,
  },
  data() {
    return {
      isPageLoading: false,
      searchText: "",
      page: 1,
      itemsPerPage: 24,
    };
  },
  methods: {
    moveToPage(uuid) {
      console.log(uuid);
      this.$router.push(`/post_detail/${uuid}`);
    },
    handleScroll() {
      const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        this.page++;
      }
    },
    // getDbPost() {
    //   var vm = this;
    //   get(child(ref(db), `user/${vm.uid}/post/`))
    //     .then((snapshot) => {
    //       console.log(snapshot.exists());
    //       if (snapshot.exists()) {
    //         // let arr = [];
    //         // arr = snapshot.val();
    //         // console.log(typeof arr, arr);
    //         vm.postData = snapshot.val();
    //       } else {
    //         console.log("沒有資料");
    //       }
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // },
    // state() {
    //   return new Promise((resolve, reject) => {
    //     onAuthStateChanged(auth, (user) => {
    //       var vm = this;
    //       if (user) {
    //         vm.uid = user.uid;
    //         resolve(`獲取uid`);
    //       } else {
    //         reject('User is signed out: ');
    //       }
    //     });

    //   })
    // },
  },
  computed: {
    userPostData() {
      var Data = Object.entries(this.$store.getters.userPostData).reverse();

      // return Object.entries(Data)
      let filterA = Data.filter((item) => {
        return item[1].watched == 1 && item[1].movieName.match(this.searchText);
      });
      let filterB = filterA.filter((item, index) => {
        // console.log(item , index)
        console.log(6 > index);
        return this.page * this.itemsPerPage > index;
      });
      // console.log(b);
      return filterB;
    },
  },
  mounted() {
    this.$store.dispatch("getDBState");
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
/* .mask {
  position: absolute;
  z-index: 2;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.452);
  transition: 0.5s opacity;
  opacity: 0;
}

.mask:hover {
  opacity: 1;
} */
/* .yearColor {
  color: #00000099;
  font-size: 12px;
} */

.card {
  box-shadow: 3px 3px 4px rgb(0 0 0 / 20%);
  cursor: pointer;
}

.bb_red {
  border-bottom: 2px solid #f36793;
}
.bb_green {
  border-bottom: 2px solid #6fff00;
}

/* .ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
} */
/* .img-size {
  max-width: 100%;
  height: 320px;
} */
</style>
