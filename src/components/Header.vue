<template>
  <nav class="navbar navbar-expand-lg bg-transparent">
    <div class="container-fluid">
      <div class="navbar-brand">
        <img src="../assets/CircularLogo_gn_noBg.png" class="img-fluid border-0 bg-transparent" alt="..." style="height: 50px" />
      </div>
      <button v-if="user" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div v-if="user" class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/postgeneration">Post</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/breaking_news">Breaking News</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/duo">Duo</router-link>
          </li>
        </ul>
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
      const token = await axiosClient.get("user/getcurrentuser/").catch((err) => {
        console.log(err);
        if (err.response.status == 401) {
          this.$router.push("/login");
        }
      });
      if (token) {
        this.user = true;
      }

      /* console.log(this.profile_url); */
    } catch (e) {
      console.log("error: ", e);
    }
  },
};
</script>
