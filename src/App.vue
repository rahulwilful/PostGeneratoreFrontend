<script setup>
import Header from "./components/Header.vue";
/* import BreakingNews from "./pages/BreakingNews.vue";
import Duo from "./pages/Duo.vue"; */
import Login from "./pages/Login.vue";
</script>

<template>
  <div class="position-relative">
    <!-- <PostGeneratore class="pt-5" /> -->
    <!-- <BreakingNews class="pt-5" /> -->
    <!-- <Duo class="pt-5" /> -->
    <!--  <Login class="pt-5" /> -->
    <router-view class="pt-5" />
  </div>
</template>

<style scoped></style>
