<template>
  <article
    @click="$emit('click')"
    class="w-96 h-60 mx-auto my-4 rounded-lg p-4 shadow-xl flex flex-col justify-between"
    :class="card.vendor"
  >
    <div class="flex justify-between items-start">
      <WifiChip v-bind:iconsFill="iconsFill" />
      <Logo v-bind:vendor="card.vendor" />
    </div>
    <div class="flex justify-center text-4xl">
      <span>{{ spacedCardNumber }}</span>
    </div>
    <div class="flex justify-between uppercase">
      <div class="text-left">
        <p class="text-xs">Cardholder name</p>
        <p>{{ card.owner ? card.owner : "firstname lastname" }}</p>
      </div>
      <div>
        <p class="text-xs">Valid thru</p>
        <p>{{ fillValid1 }}/{{ fillValid2 }}</p>
      </div>
    </div>
  </article>
</template>

<script>
import Logo from "./icons/Logo.vue";
import WifiChip from "./icons/WifiChip.vue";
export default {
  components: { Logo, WifiChip },
  props: ["card"],
  data() {
    return {
      wifiFill: "white",
      chipFill: "black",
      bgColor: "",
      valid1: null,
      valid2: null,
    };
  },
  computed: {
    spacedCardNumber() {
      let spaced = "";
      for (let i = 0; i < 16; i++) {
        if (i % 4 === 0) {
          spaced += " ";
        }
        if (this.card.cardNumber[i]) {
          spaced += this.card.cardNumber[i];
        } else {
          spaced += "x";
        }
      }
      return spaced;
    },
    fillValid1() {
      let output = "";
      for (let i = 0; i < 2; i++) {
        if (this.card.validThru[i]) {
          output += this.card.validThru[i];
        } else {
          output += "M";
        }
      }
      return output;
    },
    fillValid2() {
      let output = "";
      for (let i = 2; i < 4; i++) {
        if (this.card.validThru[i]) {
          output += this.card.validThru[i];
        } else {
          output += "Y";
        }
      }
      return output;
    },
    iconsFill() {
      switch (this.card.vendor) {
        case "Swedbank":
          return "black";
        default:
          return "white";
      }
    },
  },
};
</script>

<style lang="scss">
.default {
  background: lightgray;
}
</style>
