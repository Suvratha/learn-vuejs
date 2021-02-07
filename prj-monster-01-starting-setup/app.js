function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerLife: 100,
      monsterLife: 100,
      attackCounter: 0,
      winner: null,
      logMessages: [],
    };
  },
  methods: {
    attackMonster() {
      this.attackCounter++;
      const attackValue = getRandomValue(5, 12);
      this.monsterLife -= attackValue;
      this.addLogMessage('player', 'attack', attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerLife -= attackValue;
      this.addLogMessage('monster', 'attack', attackValue);
    },
    specialAttackMonster() {
      this.attackCounter++;
      const attackValue = getRandomValue(10, 25);
      this.monsterLife -= attackValue;
      this.addLogMessage('player', 'attack', attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      this.attackCounter++;
      const healValue = getRandomValue(8, 20);
      if (this.playerLife + healValue > 100) {
        this.playerLife = 100;
      } else {
        this.playerLife += healValue;
      }
      this.addLogMessage('player', 'heal', healValue);
      this.attackPlayer();
    },
    startANewGame() {
      this.playerLife = 100;
      this.monsterLife = 100;
      this.attackCounter = 0;
      this.winner = null;
      this.logMessages = [];
    },
    surrender() {
      this.winner = "monster";
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
          actionBy: who,
          actionType: what,
          actionValue: value
      });
    },
  },
  computed: {
    monsterBarStyle() {
      if (this.monsterLife < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterLife + "%" };
    },
    playerBarStyle() {
      if (this.playerLife < 0) {
        return { width: "0%" };
      }
      return { width: this.playerLife + "%" };
    },
    specialAttackButtonShow() {
      return this.attackCounter % 3 !== 0;
    },
  },
  watch: {
    playerLife(value) {
      if (value <= 0 && this.monsterLife <= 0) {
        //draw
        this.winner = "draw";
      } else if (value <= 0) {
        //Player lost
        this.winner = "monster";
      }
    },
    monsterLife(value) {
      if (value <= 0 && this.playerLife <= 0) {
        //draw
        this.winner = "draw";
      } else if (value <= 0) {
        //Monster lost
        this.winner = "player";
      }
    },
  },
});

app.mount("#game");
