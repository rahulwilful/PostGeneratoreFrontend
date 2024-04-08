<template>
  <nav class="navbar navbar-expand-lg w-100" style="background-color: white">
    <div class="container-fluid w-100">
      <div class="navbar-brand">
        <img src="../assets/CircularLogo_gn_noBg.png" class="img-fluid border-0 bg-transparent" alt="..." style="height: 50px" />
      </div>
      <button v-if="user" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div v-if="user" class="collapse navbar-collapse w-100" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/postgeneration">General Posts</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/breaking_news">Breaking News</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/duo">Dual Image Post</router-link>
          </li>
        </ul>
        <button type="button" class="btn btn-primary float-end" v-if="user" @click.prevent="handleLogout">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script>
import axiosClient from "../axiosClient";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  name: "Header",
  data() {
    return {
      user: false,
      id: "",
    };
  },

  async created() {
    console.log("Created");
    const auth = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    try {
      const token = await axiosClient.get("user/getcurrentuser/");
      /*  .catch((err) => {
          console.log(err);
          if (err.response.status == 401) {
            this.$router.push("/login");
          }
        }); */
      if (token) {
        this.user = true;
      }

      /* console.log(this.profile_url); */
    } catch (e) {
      console.log("error: ", e);
    }
  },
  methods: {
    handleLogout() {
      localStorage.removeItem("token");
      this.$router.go(0);
    },
  },
};
</script>
