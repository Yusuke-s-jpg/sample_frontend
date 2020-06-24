<template>
  <div class="container">
    <div class="article-card-list">
      <ArticleCards
        v-for="article in articles"
        :key="article.id"
        class="article-card"
        :article="article"
      />
    </div>
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
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
