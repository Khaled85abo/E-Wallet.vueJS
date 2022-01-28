<template>
  <div>
    <h1 class="uppercase">E-Wallet</h1>
    <div class="active">
      <h6 class="uppercase m-4 text-gray-500">Active Card</h6>
      <!-- Is computed function (theActiveCard) is better than just using the activeCardIndex -->
      <!-- <Card :card="theActiveCard" :key="activeCardIndex" /> -->
      <Card
        v-if="cards.length > 0"
        :card="cards[activeCardIndex]"
        :key="activeCardIndex"
        @click="ShowDeleteDialog"
      />
    </div>
    <SnackBar
      :message="message"
      v-if="showSnackBar"
      :type="type"
      @hide="hideSnackBar"
      @remove="removeCard"
    />
    <div
      v-if="cards.length > 1"
      class="collection"
      v-bind:style="calcDivHeight"
    >
      <Card
        v-for="(card, i) in cards"
        :key="i"
        @click="showCard($event, i)"
        :card="card"
        :style="{
          transform: 'translateX(-50%)' + 'translateY(' + i * 4 + 'rem)',
        }"
      />
    </div>
    <button
      @click="$emit('addcard')"
      class="bg-black h-16 w-80 rounded-lg text-xl uppercase text-white mb-4"
    >
      Add Card
    </button>
  </div>
</template>

<script>
import Card from "../components/Card";
import SnackBar from "../components/SnackBar.vue";
export default {
  props: ["cards", "delayTime"],
  components: { Card, SnackBar },
  data() {
    return {
      type: "info",
      showSnackBar: false,
      message: "Do You want to delete this card?",
      activeCardIndex: 0,
      transformX: "translateX(-50%)",
      transformY: "translateY(0)",
    };
  },
  methods: {
    showCard(ev, i) {
      this.activeCardIndex = i;
      console.log("activeCard: ", this.activeCardIndex);
    },
    ShowDeleteDialog() {
      this.temporarlyShowSnackBar("error", this.message);
    },
    hideSnackBar() {
      this.showSnackBar = false;
    },
    removeCard() {
      this.showSnackBar = false;
      this.$emit("remove", this.activeCardIndex);
    },
    temporarlyShowSnackBar(type, message) {
      if (type && message) {
        this.type = type;
        this.message = message;
      }
      this.showSnackBar = true;
    },
  },

  computed: {
    theActiveCard() {
      console.log("computed active card is rendered!");
      return this.cards[this.activeCardIndex];
    },
    calcDivHeight() {
      return {
        minHeight: `calc(241px + (4rem * ${this.cards.length}))`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
$order: 1;

.collection {
  position: relative;
  article {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
