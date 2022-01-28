<template>
  <div id="app" class="text-center mt-2">
    <nav class="max-w-xs mx-auto mb-8 flex justify-between">
      <a
        class="font-bold text-lg bg-blue-200 text-black p-3 rounded-full"
        @click="route = 'home'"
        >Home</a
      >
      <a
        class="font-bold text-lg bg-blue-200 text-black p-3 rounded-full"
        @click="route = 'newcard'"
        >Add Card</a
      >
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
      this.cards.splice(index, 1);
      this.persist();
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
