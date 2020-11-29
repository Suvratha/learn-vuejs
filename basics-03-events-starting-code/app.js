const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      count: 0,
      name:'',
      fullname: '',
      confirmedName:''
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    reduce() {
      this.counter--;
    },
    addNum(num) {
      this.count = this.count + num;
    },
    subtractNum(num) {
      this.count = this.count - num;
    },
    setName(event){
      this.name= event.target.value;
    },
    setFullName(event, lastName){
      this.fullname = event.target.value + ' ' + lastName;
    },
    submitForm(){
      alert("Form submitted!")
    },
    completeName(){
      this.confirmedName= this.fullname;
    }
  },
});

app.mount("#events");
