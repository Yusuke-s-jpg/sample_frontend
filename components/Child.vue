<template>
  <div>
    <h2>{{ fromParent }}</h2>
    <h2>{{ number / 2 }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    fromParent: {
      type: String
    },
    number: {
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
