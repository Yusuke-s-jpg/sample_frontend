<template>
  <el-card class="article-card">
    <div slot="header" class="clearfix">
      <span>{{ article.title }}</span>
      <el-button style="float: right; padding: 3px 0" type="text"
        >Operation button</el-button
      >
    </div>
    <div class="text item">
      {{ article.body }}
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.article-card {
  width: 50%;
}
</style>
