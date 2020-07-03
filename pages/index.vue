<template>
  <div class="container">
    <div class="new-button">
      <button @click="show = true">タスク作成</button>
    </div>
    <div class="article-wrapper">
      <ArticleCards
        v-for="article in articles"
        :key="article.id"
        class="article-card"
        :article="article"
      />
    </div>
    <Modal @closeModal="show = false" v-if="show" title="タスク作成" />
  </div>
</template>

<script>
import ArticleCards from "~/components/article/ArticleCards.vue";
import Modal from "~/components/common/Modal.vue";

export default {
  components: {
    ArticleCards,
    Modal
  },
  data() {
    return {
      show: false
    };
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
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px;
}

.article-wrapper {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  padding: 50px;
}

.article-card {
  margin: 15px;
}
</style>
