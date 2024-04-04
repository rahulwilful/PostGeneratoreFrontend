<template>
  <div class="position-relative" v-auto-animate>
    <!-- <PostGeneratore class="pt-5" /> -->
    <!-- <BreakingNews class="pt-5" /> -->
    <!-- <Duo class="pt-5" /> -->
    <!--  <Login class="pt-5" /> -->
    <router-view class="pt-5" />
    <Header class="position-absolute top-0 start-0" />
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
</script>
