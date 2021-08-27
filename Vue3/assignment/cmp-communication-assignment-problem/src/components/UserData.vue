<template>
  <li>
    <h2>Username: {{ username }}</h2>
  </li>
  <li>Age: {{ age }}</li>
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
