<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name:</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Age:</label>
      <input type="text" v-model="enteredAge" />
    </div>
    <button>Submit</button>
  </form>
</template>
<script>
export default {
  emits: ["new-user"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("new-user", this.enteredName, this.enteredAge);
    },
  },
};
</script>
