<template>
  <svg
    width="50"
    height="40"
    viewBox="0 0 50 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="50" height="40" rx="8" :fill="iconsFill" fill-opacity="0.3" />
    <line y1="12.5" x2="18" y2="12.5" :stroke="chipLine" />
    <line x1="33" y1="12.5" x2="50" y2="12.5" :stroke="chipLine" />
    <line x1="32.5" y1="5.46392e-08" x2="32.5" y2="40" :stroke="chipLine" />
    <line y1="26.5" x2="18" y2="26.5" :stroke="chipLine" />
    <line x1="32" y1="26.5" x2="50" y2="26.5" :stroke="chipLine" />
    <line x1="18.5" y1="5.46392e-08" x2="18.5" y2="40" :stroke="chipLine" />
  </svg>
</template>
<script>
export default {
  props: ["iconsFill", "chipLine"],
};
</script>
