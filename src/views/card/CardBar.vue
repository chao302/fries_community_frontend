<template>
  <section>
    <!--是否登录-->
    <login-welcome />
  </section>
</template>

<script>
import LoginWelcome from "@/views/card/LoginWelcome";
export default {
  name: "CardBar",
  components: { LoginWelcome },
};
</script>

<style scoped></style>
