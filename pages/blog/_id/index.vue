<template>
  <div class="container">
    <div class="single-post">
      <div class="content">
        <h1 class="title">{{ blog.title }}</h1>
        <p class="author">Author: {{ user.name }}</p>
        <div class="img-container text-center mt-3 mb-3">
          <img src="https://picsum.photos/640/480/?random=1" alt />
        </div>
        <p class="content">{{ blog.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: [],
      user: []
    };
  },
  mounted() {
    this.fetchItem();
    this.fetchAuthor();
  },
  methods: {
    async fetchItem() {
      const itemId = this.$route.params.id;
      const API_URL = `https://jsonplaceholder.typicode.com/posts/${itemId}`;
      const result = await this.$axios
        .get(API_URL)
        .then(res => {
          this.blog = res.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    async fetchAuthor() {
      const itemId = this.$route.params.id;
      const API_URL = `https://jsonplaceholder.typicode.com/users/${itemId}`;
      const result = await this.$axios
        .get(API_URL)
        .then(res => {
          this.user = res.data;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.single-post {
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 30px;
}
</style>
