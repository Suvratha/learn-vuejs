const app = Vue.createApp({
    data(){
        return{
            name: 'Test',
            age: 30,
            url: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'
        };
    },
    methods:{
        agePlusFive(){
            return this.age+5;
        }
    }
});

app.mount('#assignment');