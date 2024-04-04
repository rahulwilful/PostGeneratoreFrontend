<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 48px);
  background-color: #ffffff; /* Background color */
}

.login-box {
  width: 300px;
  padding: 20px;
  border-radius: 15px;
  background-color: #f0f0f0; /* Background color */
  box-shadow: 8px 8px 16px #d9d9d9, -8px -8px 16px #ffffff; /* Soft shadow */
  transition: all 0.3s ease-in-out;
}

.login-header {
  margin-bottom: 20px;
  text-align: center;
}

.login-form .form-group {
  margin-bottom: 20px;
}

.login-form .form-control {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  background-color: #f0f0f0; /* Background color */
  box-shadow: inset 5px 5px 10px #d9d9d9, inset -5px -5px 10px #ffffff; /* Inner shadow */
  transition: all 0.3s ease-in-out;
}

.login-form .btn {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  background-color: #4caf50; /* Green button color */
  color: white;
  box-shadow: 8px 8px 16px #d9d9d9, -8px -8px 16px #ffffff; /* Soft shadow */
  transition: all 0.3s ease-in-out;
}

.login-form .btn:hover {
  background-color: #45a049; /* Darken button color on hover */
  cursor: pointer;
}
</style>

<template>
  <div class="login-container">
    <div class="login-box border">
      <h2 class="login-header">Post Generator</h2>
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="username" class="form-label">Email</label>
          <input type="text" class="form-control" id="username" v-model="form.email" />
        </div>
        <div class="form-group">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" v-model="form.password" />
        </div>
        <button type="submit" class="btn btn-primary btn-block">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import axiosClient from "../axiosClient";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async handleLogin() {
      this.error = [];
      for (const item in this.form) {
        if (this.form[item] === "" || this.form[item].length === 0) {
          this.error.push(item);
        }
      }

      if (this.error.length === 0) {
        const response = await axiosClient.post("user/login", this.form).catch((err) => {
          console.log(err);
          if (err.response.status == 404) {
            toast.error("User does not exist", {
              autoClose: 1500,
            });
          } else if (err.response.status == 401) {
            toast.error("Inavlid password", {
              autoClose: 1500,
            });
          } else {
            console.error("Error , cannot loggin", err);
            toast.error("Something Went wrong", {
              autoClose: 1500,
            });
          }
        });
        console.log("User loggedin successfully", response.data);
        console.log("User loggedin successfully", response.data.token);
        localStorage.setItem("token", response.data.token);
        toast.success("Log In Successfull", {
          autoClose: 1500,
        });
        setTimeout(() => {
          this.$router.push("/postgeneration");
        }, 1500);
      } else {
        console.log("Form Values Are ", this.form, this.error);
        for (let i in this.error) {
          toast.error(`Enter ${this.error[i]}`, {
            autoClose: 1500,
          });
        }
      }
      console.log("Logging in...");
    },
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
