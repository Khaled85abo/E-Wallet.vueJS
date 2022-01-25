<template>
  <div id="app">
    <nav>
      <a @click="route = 'home'">Home</a>
      <a @click="route = 'newcard'">Add Card</a>
    </nav>
    <Home
      v-if="route === 'home'"
      :cards="cards"
      @addcard="route = 'newcard'"
      :delayTime="delayTime"
      @remove="removeCard"
    />
    <NewCard
      v-if="route === 'newcard'"
      @card="addCard"
      :cards="cards"
      :delayTime="delayTime"
    />
  </div>
</template>

<script>
import Home from "./views/Home";
import NewCard from "./views/NewCard";
export default {
  components: { Home, NewCard },
  name: "App",
  data() {
    return {
      delayTime: 2,
      cards: [],
      route: "home",
    };
  },
  methods: {
    persist() {
      localStorage.setItem("walletCards", JSON.stringify(this.cards));
    },
    removeCard(index) {
      console.log("remove card with index: ", index);
      console.log("target card: ", this.cards[index]);
    },
    addCard(card) {
      console.log("from app.vue", card);
      this.cards.push(card);
      this.persist();
      console.log("cards: ", this.cards);
      setTimeout(() => {
        this.route = "home";
      }, this.delayTime * 1000);
    },
  },
  // either use before mount to get data before mounting,
  // or use mount with v-if="cards.length > 0"
  beforeMount() {
    const cards = localStorage.getItem("walletCards");
    console.log("cards from local storage", JSON.parse(cards));
    if (cards) {
      this.cards = JSON.parse(cards);
    }
    console.log("cards fetched from local storage: ", this.cards);
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

nav {
  max-width: 250px;
  margin: 0 auto 2rem auto;
  display: flex;
  justify-content: space-between;
  a {
    cursor: pointer;
    font-weight: bold;
    font-size: 1.2rem;
    background: rgb(92, 159, 218);
    color: white;
    padding: 0.7rem;
    border-radius: 9999px;
  }
}
</style>
