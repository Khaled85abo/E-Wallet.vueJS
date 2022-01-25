<template>
  <div
    class="snackbar fixed bottom-1/3 left-1/2 -translate-x-1/2 max-w-md font-bold"
  >
    <p :class="type" class="p-4 rounded-lg shadow-sm">
      {{ message }}
      <button
        v-if="message.includes('delete')"
        class="rounded-full ml-3 uppercase font-bold p-2 bg-red-900 text-white"
        @click="$emit('remove')"
      >
        Confirm
      </button>
    </p>
  </div>
</template>

<script>
export default {
  props: ["type", "message"],
};
</script>

<style lang="scss" scoped>
.error {
  background: red;
}
.success {
  background: rgb(47, 199, 47);
}
.info {
  background: blue;
  color: white;
}
</style>
