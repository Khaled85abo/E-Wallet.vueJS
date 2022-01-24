<template>
  <div
    class="snackbar fixed bottom-8 left-2/4 -translate-x-1/2 max-w-sm font-bold"
  >
    <p :class="type" class="p-4 rounded-lg shadow-sm">
      {{ message }}
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
