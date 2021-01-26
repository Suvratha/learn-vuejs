const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addFive() {
      this.counter = this.counter + 5;
    },
    addOne() {
      this.counter = this.counter + 1;
    },
  },
  computed: {
    result() {
      if (this.counter < 37) {
        return "Not there yet";
      } else if (this.counter === 37) {
        return this.counter;
      } else {
        return "Too much!";
      }
    },
  },
  watch: {
    counter(value) {
      if (this.counter > 37) {
        const that = this;
        setTimeout(function(){
            that.counter=0;
        }, 5000);
      }
    },
  },
});

app.mount("#assignment");
