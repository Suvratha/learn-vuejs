const app = Vue.createApp({
  data() {
    return {
      enteredItem: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredItem);
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
