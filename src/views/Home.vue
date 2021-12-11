<template>
  <div>
    <div class="box">🔔 {{ billboard }}</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      billboard: "土豆社区第一个公告",
    };
  },
};
</script>
