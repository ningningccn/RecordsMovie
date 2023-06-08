import { db, auth } from "@/db";
import { onAuthStateChanged } from "firebase/auth";
import { ref as fireRef, set, child, get, push, remove } from "firebase/database";
import store from "./store";
import axios from "axios";

console.log(store);

export const authStateChanged = () => {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user);
    });
  });
};

export async function getPostData(uuid) {
  const snapshot = await get(child(fireRef(db), `user/${uuid}/post/`));
  return snapshot.val();
}
// GET
export async function getMovieDetail(movieID) {
  let uuid = store.state.userID;
  const snapshot = await get(child(fireRef(db), `user/${uuid}/post/${movieID}`));
  return snapshot.val();
}

// POST API
export async function postMovieData(data) {
  let uuid = store.state.userID;
  const newKey = push(child(fireRef(db), "post")).key;
  set(fireRef(db, `/user/${uuid}/post/` + newKey), data);
  store.dispatch("getDBState");
}

// DELETE POST
export async function delMovieData(movieID) {
  let uuid = store.state.userID;
  remove(fireRef(db, `user/${uuid}/post/${movieID}`));
  store.dispatch("getDBState");
}
// EDIT POST
export async function editMovieData(movieID, data) {
  let uuid = store.state.userID;
  set(fireRef(db, `/user/${uuid}/post/${movieID}`), data);
  store.dispatch("getDBState");
}

let searchUrl = "https://api.themoviedb.org/3/search/multi?api_key=";
let apiKey = "a44def496d0c387f06b632df3f6cb20e";
// GET Search Data
export async function searchMovieFetch(query) {
  let apiUrl = `${searchUrl}${apiKey}&language=zh-TW&query=${query}`;
  console.log(apiUrl);
  const res = await axios.get(apiUrl);
  return res.data;
}

// GET The movie DB
