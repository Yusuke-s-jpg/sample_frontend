<template>
  <div class="modal">
    <div class="modal-wrap">
      <div class="modal-form-wrap">
        <h2 style="text-align: center; margin-bottom: 20px;">{{ title }}</h2>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="タイトル">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="内容">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button @click="$emit('closeModal')">Cancel</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        desc: ""
      }
    };
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .modal-wrap {
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    .modal-form-wrap {
      background-color: #fff;
      position: fixed;
      top: 30%;
      left: 25%;
      padding: 30px 60px;
      height: 40%;
      width: 50%;
    }
  }
}
</style>
