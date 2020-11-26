const app = Vue.createApp({
    data() {
        return{
            enteredGoal: 'Complete the course!',
            courseGoal: 'Master Vue',
            linkToPage: 'https://vuejs.org/'
        };
    },
    methods:{
        outputGoal() {
            const randomNum = Math.random();
            if(randomNum>0.5){
                return 'Learn Vue';
            }else{
                return this.courseGoal;
            }
        }
    }
});

app.mount('#user-goal');