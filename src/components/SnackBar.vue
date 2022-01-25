<template>
  <div
    class="snackbar fixed bottom-1/3 left-1/2 -translate-x-1/2 max-w-md font-bold text-white"
  >
    <div :class="type" class="p-4 rounded-lg shadow-sm flex items-center">
      <svg
        v-if="type === 'error'"
        class="inline mr-2"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#ff0000;"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
        />
      </svg>
      {{ message }}
      <button
        v-if="message.includes('delete')"
        class="rounded-full ml-3 uppercase font-bold p-2 bg-red-900"
        @click="$emit('remove')"
      >
        Confirm
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["type", "message"],
};
</script>

<style lang="scss" scoped>
.error {
  background: #ff0000;
}
.success {
  background: rgb(47, 199, 47);
  color: black;
}
.info {
  background: blue;
}
</style>
