const app = Vue.createApp({
  data() {
    return {
      enteredValue: "",
      visible: true,
      inputBackgroundColor:''
    };
  },
  methods: {
    toggleButton() {
      return (this.visible = !this.visible);
    },
  },
  computed: {
    stylePara() {
      return {
        user1: this.enteredValue === 'user1',
        user2: this.enteredValue === 'user2',
        visible: this.visible ,
        hidden: !this.visible,
      };
    },
  },
});

app.mount("#assignment");
