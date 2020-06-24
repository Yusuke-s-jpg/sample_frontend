<template>
  <div class="container">
    <ArticleCards
      v-for="article in articles"
      :key="article.id"
      class="article-card"
      :article="article"
    />
  </div>
</template>

<script>
import ArticleCards from "~/components/article/ArticleCards.vue";

export default {
  components: {
    ArticleCards
  },
  async asyncData({ $axios }) {
    const res = await $axios.$get("http://localhost:10080/api/articles");
    console.log(res);
    return {
      articles: res
    };
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  padding: 50px;
}
</style>
