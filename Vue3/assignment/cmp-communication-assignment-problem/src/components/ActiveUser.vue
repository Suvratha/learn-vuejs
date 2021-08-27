<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name:</label>
      <input type="text" />
    </div>
    <div>
      <label>Age:</label>
      <input type="text" />
    </div>
    <button>Submit</button>
  </form>
</template>
<script>
export default {
    props:{
        name:{
            type: String,
            required: true
        },
        age:{
            type: String,
            required: true
        }
    }
};
</script>
