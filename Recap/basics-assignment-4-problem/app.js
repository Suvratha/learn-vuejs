const app = Vue.createApp({
    data(){
        return {
            user1Entered: false,
            user2Entered: false,
            visible: true,
            inputColor : ''
        };
    },
    methods: {
        selectedUser(input){
            if(input.target.value === 'user1'){
                this.user1Entered = true;
                this.user2Entered = false;
            }else if(input.target.value === 'user2'){
                this.user1Entered = false;
                this.user2Entered = true;
            }
        },
        toggleVisibility(){
            this.visible = !this.visible;
        }
    },
    computed: {
        styleIs(){
            if(this.user1Entered){
                return 'user1';
            }else if(this.user2Entered){
                return 'user2';
            }
        },
        visibility(){
            return this.visible ? 'visible' : 'hidden';
        }
    }
    
});

app.mount('#assignment');