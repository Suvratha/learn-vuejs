const app = Vue.createApp({
    data(){
        return{
            tasks: [],
            enteredTask:"",
            taskListIsVisible: true
        };
    },
    methods:{
        addTask(){
            this.tasks.push(this.enteredTask);
        },
        changeVisibility(){
            this.taskListIsVisible = !this.taskListIsVisible;
        }
    },
    computed:{
        buttonCaption(){
            return this.taskListIsVisible ? 'Hide List' : 'Show List'
        }
    }

});

app.mount("#assignment");