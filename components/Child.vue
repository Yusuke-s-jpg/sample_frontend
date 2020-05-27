<template>
  <h2>{{ fromParent }}</h2>
</template>

<script>
export default {
  props: {
    fromParent: {
      type: String
    }
  }
};
</script>

<style scoped>
h2 {
  background-color: red;
}
</style>
