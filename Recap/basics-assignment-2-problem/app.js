const app = Vue.createApp({
    data(){
        return{
            enteredValue: '',
            enteredValue2: '',
            confirmedValue: ''
        };
    },
    methods: {
        showAlert(){
            alert('Button is pressed!');
        },
        textOutput(event){
            this.enteredValue = event.target.value;
        },
        captureEnteredValue2(event){
            this.enteredValue2 = event.target.value;
        },
        confirmedTextOutput(){
            this.confirmedValue = this.enteredValue2;
        }

    }
});

app.mount('#assignment');