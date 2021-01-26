const app = Vue.createApp({
  data() {
    return {
      textVal: '',
      finalText:''
    };
  },
  methods: {
    showAlert() {
      alert("Alert!!!..Alert!!!..Alert!!");
    },
    inputText(event) {
      this.textVal = event.target.value;
    },
    confirmedText(event){
        this.finalText =  event.target.value;
    }
  },
});
app.mount("#assignment");
