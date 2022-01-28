<template>
  <div>
    <Card :card="user" class="sticky top-3" />
    <!-- <button class="h-16 w-16 rounded-full" @click="temporarlyShowSnackBar">
      SnackBar
    </button> -->
    <SnackBar
      v-if="showSnackBar"
      v-bind:type="type"
      :message="message"
      @hide="hideSnackBar"
    />
    <form
      @submit.prevent="createCard"
      id="form"
      class="max-w-sm mt-8 mx-auto text-left uppercase"
    >
      <label for="number" class="block">card number </label>
      <!--
        type="text"
        // regular expression
        onkeypress="return /[0-9]/i.test(event.key)" 
            -->
      <input
        type="number"
        id="number"
        v-model="user.cardNumber"
        min="16"
        class="p-4 block w-full rounded-lg h-14 mt-1 mb-4 text-lg border-black border-2 border-solid"
      />
      <label for="number" class="block">card holder name </label>
      <input
        type="text"
        id="number"
        v-model="user.owner"
        class="p-4 block w-full rounded-lg h-14 mt-1 mb-4 text-lg border-black border-2 border-solid"
      />

      <div class="flex justify-between">
        <div class="flex flex-col w-2/5">
          <label for="validThru" class="block">valid thru</label>
          <input
            type="text"
            id="validThru"
            v-model="user.validThru"
            max="4"
            class="p-4 block w-full rounded-lg h-14 mt-1 mb-4 text-lg border-black border-2 border-solid"
          />
        </div>
        <div class="flex flex-col w-2/5">
          <label for="cvc" class="block">ccv</label>
          <input
            type="number"
            id="cvc"
            v-model="user.cvc"
            class="p-4 block w-full rounded-lg h-14 mt-1 mb-4 text-lg border-black border-2 border-solid"
          />
        </div>
      </div>
      <label for="number" class="block">vendor</label>
      <select
        v-model="user.vendor"
        class="p-4 block w-full rounded-lg h-14 mt-1 mb-4 text-lg border-black border-2 border-solid"
      >
        <option :value="{}" selected disabled hidden>Choose your vendor</option>
        <option v-for="(bank, i) of vendors" :key="i">{{ bank }}</option>
      </select>

      <input
        type="submit"
        class="bg-black h-16 w-full rounded-lg mb-4 text-white mt-12"
      />
    </form>
  </div>
</template>

<script>
import SnackBar from "../components/SnackBar";
import Card from "../components/Card.vue";
export default {
  props: ["cards", "delayTime"],
  components: { SnackBar, Card },
  data() {
    return {
      timeOutCode: null,
      showSnackBar: false,
      type: "error",
      message: "this Card Already exists",
      vendors: ["Nordea", "Swedbank", "Danskbank", "Handelsbanken"],
      snackBarTime: 2,
      user: {
        owner: "",
        validThru: "",
        cardNumber: "",
        cvc: "",
        vendor: "default",
      },
    };
  },
  methods: {
    createCard() {
      const user = this.user;
      // console.log(this.user);
      const number = user.cardNumber.slice(0, 16);
      const existingCard = this.cards.filter(
        (card) => card.cardNumber === number
      );
      if (existingCard.length > 0) {
        console.log("card eixsts: ", existingCard);
        this.temporarlyShowSnackBar(
          "error",
          "You already have a card with this number!"
        );
        return;
      }
      if (
        user.cardNumber.length === 0 ||
        user.validThru.length === 0 ||
        user.cvc.length === 0
      ) {
        this.temporarlyShowSnackBar("error", "All fields are required!");
        return;
      }
      const card = { ...this.user, cardNumber: number };
      this.$emit("card", card);
      this.temporarlyShowSnackBar("success", "Your card has been created!");
      this.user = {
        owner: "",
        validThru: "",
        cardNumber: "",
        cvc: null,
        vendor: "",
      };
    },
    hideSnackBar() {
      this.showSnackBar = false;
    },
    temporarlyShowSnackBar(type, message) {
      if (type && message) {
        this.type = type;
        this.message = message;
      }

      this.showSnackBar = true;
    },
  },
};
</script>
