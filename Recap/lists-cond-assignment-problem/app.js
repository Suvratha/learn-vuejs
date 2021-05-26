const app = Vue.createApp({
  data() {
    return {
      enteredValue: '',
      tasks: [],
      display: true
    };
  },
  methods: {
    addTask(){
        this.tasks.push(this.enteredValue);
    },
    toggleDisplay(){
        this.display = !this.display;
    },
     buttonName(){
        if(this.display === true){
            return 'Hide List';
        }else{
            return 'Show List';
        }
    }
  }
});

app.mount("#assignment");
