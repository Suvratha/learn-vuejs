const app = Vue.createApp({
    data(){
        return {
            name:"VueLearner",
            age: 1,
            url: "https://v3.vuejs.org/logo.png"
        };
    },
    methods:{
        agePlusFive(){
            return this.age + 5;
        },
        favNumber(){
            return Math.random();
            
        }
    }

});

app.mount('#assignment');