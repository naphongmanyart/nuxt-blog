<template>
  <div class="mb-4">
    <b-card
      :title="post.title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
    >
      <b-button variant="primary">
        <nuxt-link :to="`/blog/${post.id}`" class="link-text" :item="post.id">Read more</nuxt-link>
      </b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'ContentList',
  props: ['post']
};
</script>

<style lang="scss" scoped>
.link-text {
  color: #fff;
}

.card-body {
  min-height: 202px;
}
</style>
