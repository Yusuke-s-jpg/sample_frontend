<template>
  <div>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">タスク管理</nuxt-link>
        </li>
        <li>
          <p @click="show = true" class="new">タスク作成</p>
        </li>
      </ul>
    </nav>
    <Modal @closeModal="show = false" v-if="show" title="タスク作成" />
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
</script>

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
.new {
  margin-left: 15px;
  color: aliceblue;
  cursor: pointer;
}
</style>
