export const state = () => ({
  posts: []
});

export const actions = {
  async fetch({ commit }) {
    const API_URL = "https://jsonplaceholder.typicode.com/posts";
    const result = await this.$axios
      .get(API_URL, {
        params: {
          _limit: 9
        }
      })
      .then(res => {
        let contents = res.data;
        let category = ["new", "top"];
        for (let i = 0; i < contents.length; i++) {
          let rand = Math.round(Math.random());
          contents[i].category = category[rand];
        }
        console.log(res.data);
        commit("SET_POSTS", res.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
};

export const getters = {
  get: state => {
    return state.posts;
  }
};

export const mutations = {
  SET_POSTS(state, payload) {
    state.posts = payload;
  }
};
