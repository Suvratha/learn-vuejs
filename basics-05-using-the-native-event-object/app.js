const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
    outputFullName() {
      console.log("Running..");
      if (this.name === "") {
        return (this.name = "");
      }
      return this.name + " " + "mouse";
    },
  },
  computed: {
    //Computed properties is a key feature for outputting dynamic values that are dependent on multiple input values, or in following case one dynamic and other static values
    fullname() {
      console.log("Running..");
      if (this.name === "") {
        return (this.name = "");
      }
      return this.name + " " + "mouse";
    },
  },
  // A watcher is a function you can tell Vue to execute, when one of its dependies change. We can use watchers instead of computed properities.
  watch: {
    counter(value) { //Use the data property name as watch name; Gets a default parameter value, which is the current value of the data variable
      if (value > 50) {
        this.counter = 0;
      }
    },
  },
});

app.mount("#events");
