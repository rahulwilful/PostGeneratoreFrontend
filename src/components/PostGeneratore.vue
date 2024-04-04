<style scoped>
.main {
  width: 100%;
  min-height: 100vh;
}

.submit-btn {
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: scale(1.05);
}

.preview-image {
  width: 80%;
}

.preview {
  background: url("../assets/slideImg9.jpg");
  background-size: cover;
}
@media (max-width: 576px) {
  .form-container {
    background: linear-gradient(to right, #00b09b, #2cf7df);
    border-radius: 10px;
    padding: 20px;
    width: 90%;
    height: auto;
  }
  .preview {
    width: 90%;
  }
}

@media (min-width: 576px) {
  .form-container {
    background: linear-gradient(to right, #00b09b, #2cf7df);
    border-radius: 10px;
    padding: 20px;
    width: 90%;
    height: auto;
  }
  .preview {
    width: 90%;
  }
}

@media (min-width: 768px) {
  .form-container {
    background: linear-gradient(to right, #00b09b, #2cf7df);
    border-radius: 10px;
    padding: 20px;
    width: 50%;
    max-width: 700px;
    height: auto;
  }
  .preview {
    width: 50%;
    max-width: 700px;
  }
}

@media (min-width: 992px) {
}

@media (min-width: 1200px) {
}
</style>

<template>
  <div class="main">
    <div class="main2 py-3">
      <div v-auto-animate class="container">
        <div class="w-100 d-flex justify-content-center">
          <div id="app" class="mt-5 form-container shadow-lg">
            <div class="row">
              <div class="col-md-6 offset-md-3">
                <h2 class="mb-4">Generate Post</h2>
                <form @submit.prevent="handleSubmit" enctype="multipart/form-data" class="">
                  <div class="mb-3">
                    <label for="details" class="form-label fw-semibold">Details</label>
                    <textarea class="form-control" placeholder="Enter Details/News" id="floatingTextarea" v-model="formData.details" />
                    <!--   <input type="text" class="form-control" id="details" v-model="formData.details" /> -->
                  </div>
                  <div class="mb-3">
                    <label for="image" class="form-label fw-semibold">Image</label>
                    <input type="file" class="form-control" id="image" @change="handleImageChange" />
                  </div>
                  <div class="">
                    <button type="submit" class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
        <div v-auto-animate v-if="submited" class="preview-area w-100 mt-5">
          <div class="preview-container w-100 d-flex justify-content-center">
            <div class="preview py-3">
              <div class="preview-body mt-1 d-flex justify-content-center">
                <div class="preview-image">
                  <div v-auto-animate class="w-100 h-100 p-1 rounded-top-3 bg-light">
                    <img :src="formData.image" class="border-0 rounded-3 w-100 h-100" alt="..." />
                  </div>
                </div>
              </div>
              <div v-auto-animate class="preview-details px-4 text-dark bg-light mx-2 py-4 rounded">
                <div class="">
                  <span class="bg-danger px-2 rounded text-light fw-semibold">NEWS </span>
                </div>
                <div class="d-flex justify-content-center">
                  <span>
                    <h5 style="text-align: justify">{{ formData.details }}</h5>
                  </span>
                </div>
              </div>
              <div class="preview-footer my-1 text-light mt-3">
                <div class="d-flex justify-content-evenly">
                  <img src="../assets/CircularLogo_gn.png " class="img-thumbnail mx-2" alt="..." style="width: 50px; height: 50px" />

                  <img src="../assets/Footerbanner.png" class="img-thumbnail mx-2" alt="..." style="height: 50px" />
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center mt-3">
            <button @click="downloadPreview" class="btn btn-primary submit-btn">Download Preview</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import html2canvas from "html2canvas";

export default {
  name: "PostGeneratore",

  data() {
    return {
      submited: false,
      formData: {
        details: "",
        image: null,
      },
    };
  },
  methods: {
    handleImageChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.formData.image = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    handleSubmit() {
      console.log("handleSubmit Called");
      if (this.formData.details == "") {
        toast.error(`Enter Details`, {
          autoClose: 1500,
        });
        return;
      }

      if (this.formData.image == null) {
        toast.error(`Select Image`, {
          autoClose: 1500,
        });
        return;
      }

      this.submited = true;
      // You can perform form submission logic here
      console.log("Form submitted:", this.formData);
      // Example: Send form data to the server using axios or fetch API
    },

    downloadPreview() {
      console.log("downloadPreview Called");

      // Select the preview area
      const preview = document.querySelector(".preview");

      // Use html2canvas to capture the preview area
      html2canvas(preview).then((canvas) => {
        // Convert canvas to data URL
        const dataURL = canvas.toDataURL("image/png");

        // Create a link element
        const link = document.createElement("a");
        // Set link attributes
        link.href = dataURL;
        link.download = "preview.png";
        // Simulate click on the link to trigger download
        link.click();
      });

      console.log("downloadPreview Ended");
    },
  },
};
</script>
