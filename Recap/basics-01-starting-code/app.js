const app =Vue.createApp({
    data(){
        return{
            courseGoal:'Finish the course!',
            courseGoalA: 'Learn Vue!',
            courseGoalB: 'Master Vue!',
            vueLink: 'https://v3.vuejs.org/'
        };
    },
    methods:{
        outputGoal(){
            const random = Math.random();
            if(random<0.5){
                return this.courseGoalA;
            }else{
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal')