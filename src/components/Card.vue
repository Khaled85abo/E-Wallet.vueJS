// :class="card.vendor"
<template>
  <article
    :class="card.vendor"
    class="w-96 h-60 mx-auto my-4 rounded-lg p-4 shadow-xl flex flex-col justify-between"
  >
    <div class="flex justify-between items-start">
      <div class="flex flex-col">
        <Wifi :iconsFill="iconsFill" />
        <Chip :iconsFill="iconsFill" :chipLine="chipLine" />
      </div>
      <Bitcoin v-if="card.vendor === 'Handelsbanken'" />
      <Evil v-if="card.vendor === 'Swedbank'" />
      <Blockchain v-if="card.vendor === 'Nordea'" />
      <Ninja v-if="card.vendor === 'Danskbank'" />
    </div>
    <div class="mt-2 mb-4 flex justify-between">
      <span class="text-3xl">{{ fillSpan1 }}</span>
      <span class="text-3xl">{{ fillSpan2 }}</span>
      <span class="text-3xl">{{ fillSpan3 }}</span>
      <span class="text-3xl">{{ fillSpan4 }}</span>
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
import { Bitcoin, Blockchain, Ninja, Wifi, Chip, Evil } from "./icons";
export default {
  components: { Blockchain, Bitcoin, Ninja, Wifi, Chip, Evil },
  props: ["card"],
  data() {
    return {
      wifiFill: "white",
      chipFill: "black",
      chipLine: "black",
      bgColor: "",
      span1: null,
      span2: null,
      span3: null,
      span4: null,
      valid1: null,
      valid2: null,
    };
  },
  computed: {
    fillSpan1() {
      let span = "";
      for (let i = 0; i < 4; i++) {
        if (this.card.cardNumber[i]) {
          span += this.card.cardNumber[i];
        } else {
          span += "X";
        }
      }
      return span;
    },
    fillSpan2() {
      let span = "";
      for (let i = 4; i < 8; i++) {
        if (this.card.cardNumber[i]) {
          span += this.card.cardNumber[i];
        } else {
          span += "X";
        }
      }
      return span;
    },
    fillSpan3() {
      let span = "";
      for (let i = 8; i < 12; i++) {
        if (this.card.cardNumber[i]) {
          span += this.card.cardNumber[i];
        } else {
          span += "X";
        }
      }
      return span;
    },
    fillSpan4() {
      let span = "";
      for (let i = 12; i < 16; i++) {
        if (this.card.cardNumber[i]) {
          span += this.card.cardNumber[i];
        } else {
          span += "X";
        }
      }
      return span;
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
.Nordea {
  background: #0a126e;
  color: #ece6e6;
}
.Swedbank {
  background: #c59801;
}
.Danskbank {
  background: #002c44;
  color: lightgray;
}
.Handelsbanken {
  background: #6a6a69;
  color: lightgray;
}
.default {
  background: lightgray;
}
</style>
