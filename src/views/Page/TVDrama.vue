<template>
  <Header />
  <sort-bar :sortBarOption="sortBarOption" @getEmitStatus="getEmitStatus">
    <template #title> 電視劇 ( {{ getUserPostData.length }} ) </template>
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
      sort: "all",
      sortBarOption: {
        all: {
          label: "全部",
        },
        hk: {
          label: "港劇",
        },
        tw: {
          label: "台劇",
        },
        kr: {
          label: "韓劇",
        },
        us: {
          label: "美劇",
        },
        cn: {
          label: "陸劇",
        },
      },
    };
  },
  methods: {
    getEmitStatus(status) {
      this.sort = status;
    },
    moveToPage(uuid) {
      console.log(uuid);
      this.$router.push(`/post_detail/${uuid}`);
    },
    // test(e) {
    //   let vm = this;
    //   vm.file = e.target.files[0];
    //   console.log(this.file)
    //   console.log(this.file.name)
    //   var reader = new FileReader();
    //   reader.readAsDataURL(vm.file)
    //   reader.onload = (e) => {
    //     // console.log(e.target.result )
    //     vm.showImg= e.target.result;
    //   }
    //   // this.fileName = file.name;
    // },
    // send() {
    //   uploadBytes(ref(storage,`${this.file.name}`), this.file).then((snapshot) => {
    //     console.log(snapshot)
    //     console.log(`Uploaded a blob or file!`)
    //   });
    // },
    // getUrl() {
    //   getDownloadURL(ref(storage,`截圖 2020-11-04 下午2.27.08.png`))
    //   .then((url) => {
    //     // Insert url into an <img> tag to "download"
    //     this.url = url
    //     console.log(url)
    //   })
    //   .catch((error) => {
    //     // A full list of error codes is available at
    //     // https://firebase.google.com/docs/storage/web/handle-errors
    //     switch (error.code) {
    //       case 'storage/object-not-found':
    //         // File doesn't exist
    //         break;
    //       case 'storage/unauthorized':
    //         // User doesn't have permission to access the object
    //         break;
    //       case 'storage/canceled':
    //         // User canceled the upload
    //         break;
    //       // ...
    //       case 'storage/unknown':
    //         // Unknown error occurred, inspect the server response
    //         break;
    //     }
    //   });
    // },
    // getAllData() {
    //   listAll(ref(storage, ''))
    //     .then((res) => {
    //       console.log(res)
    //       res.items.forEach((itemRef) => {
    //         console.log(itemRef)
    //       })
    //     })
    // },
  },
  computed: {
    getUserPostData() {
      var Data = this.$store.getters.userPostData;
      return Object.entries(Data)
        .reverse()
        .filter((item) => {
          if (this.sort == "all") {
            return item[1].inputMainValue == "TVDrama";
          }
          return item[1].inputMainValue == "TVDrama" && item[1].inputChildValue == this.sort;
        });
    },
  },
  mounted() {
    this.$store.dispatch("getDBState");
  },
};
</script>

<style scoped>
.list {
  overflow-x: auto;
  white-space: nowrap;
}

a,
.nav-link {
  text-decoration: none;
  color: #032541;
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
</style>
