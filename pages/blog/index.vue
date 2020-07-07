<template>
  <div class="container mt-4">
    <h3 class="page-title text-center">Content List</h3>
    <div class="filter">
      <b-form-group label="Select Category">
        <b-form-radio v-model="selected" name="radio" value="all">All</b-form-radio>
        <b-form-radio v-model="selected" name="radio" value="new">New</b-form-radio>
        <b-form-radio v-model="selected" name="radio" value="top">Top</b-form-radio>
      </b-form-group>
    </div>
    <div class="row">
      <content-list
        class="content mx-4"
        v-for="(content, index) in filteredCategory"
        :key="index"
        :post="content"
      />
    </div>
  </div>
</template>

<script>
import ContentList from '@/components/ContentList';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    ContentList
  },
  data() {
    return {
      contents: [],
      selected: 'all'
    };
  },
  computed: {
    ...mapGetters({
      getPosts: 'posts/get'
    }),
    filteredCategory() {
      let category = this.selected;
      if ((category === 'all')) {
        return this.contents;
      } else {
        return this.contents.filter(content => {
          return content.category === category;
        });
      }
    }
  },
  async mounted() {
    let sync = await this.$store.dispatch('posts/fetch');
    let data = await this.getPosts;
    this.contents = data;
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.page-title {
  margin-bottom: 24px;
}
</style>
