<template>
  <div>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">タスク管理</nuxt-link>
        </li>
        <li>
          <button @click="show=true">
            <p>モーダル表示</p>
          </button>
        </li>
      </ul>
    </nav>
    <Modal @closeModal="show=false" v-if="show" />
  </div>
</template>

<script>
import Modal from "~/components/common/Modal.vue";
export default {
  components: {
    Modal
  },
  data() {
    return {
      show: false
    };
  }
};
</script>>

<style scoped>
ul {
  display: flex;
}
li {
  list-style: none;
}
a {
  color: aliceblue;
}
</style>