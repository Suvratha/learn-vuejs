const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastname: "",
      // fullName: '',
    };
  },
  methods: {
    setName(event) {
      //this.name = event.target.value + ' ' + lastName;
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
  },
  computed: {
    fullName() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + this.lastname;
    },
  },
  watch: {
    // name(value) {
    //   if(value === ''){
    //     this.fullName = '';
    //   }else{
    //     this.fullName = value + ' ' + this.lastname;
    //   }
    // },
    // lastname(value) {
    //   if(value === ''){
    //     this.fullName = '';
    //   }else{
    //     this.fullName = this.name + ' ' + value;
    //   }
    // }
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
  },
});

app.mount("#events");
