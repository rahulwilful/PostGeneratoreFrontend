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
  background: url("../assets/bgImg.jpg");
  background-size: cover;
  background-position: bottom;
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

.post,
.post * {
  box-sizing: border-box;
}
.post {
  border-style: solid;
  border-color: #000000;
  border-width: 1px;
  height: 569px;
  position: relative;
  overflow: hidden;
}
.bg-medical-store-1 {
  width: 431px;
  height: 569px;
  position: absolute;
  left: 0px;
  top: 0px;
  object-fit: cover;
}
.image-container {
  background: #ffffff;
  border-style: solid;
  border-color: #ffffff;
  border-width: 1px;
  padding: 9px 10px 9px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  left: calc(50% - 185.5px);
  top: 49px;
  overflow: hidden;
}
.group-15 {
  flex-shrink: 0;
  width: 351px;
  height: 236px;
  position: static;
}
.camera-1 {
  width: 351px;
  height: 236px;
  position: absolute;
  left: 10px;
  top: 9px;
  object-fit: cover;
}
.circular-logo-gn-1 {
  width: 75px;
  height: 75px;
  position: absolute;
  left: 279px;
  top: 16px;
  object-fit: cover;
}
.image-container {
  background: #ffffff;
  border-style: solid;
  border-color: #ffffff;
  border-width: 1px;
  padding: 9px 10px 9px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  left: calc(50% - 185.5px);
  top: 49px;
  overflow: hidden;
}
.frame-11 {
  background: #ffffff;
  border-radius: 5px;
  border-style: solid;
  border-color: #ffffff;
  border-width: 1px;
  width: 334px;
  height: 175px;
  position: absolute;
  left: calc(50% - 167.5px);
  top: 285px;
  overflow: hidden;
}
.group-16 {
  position: absolute;
  inset: 0;
}
.rectangle-8 {
  background: #ff5c5c;
  border-radius: 5px;
  width: 65px;
  height: 22px;
  position: absolute;
  left: 6px;
  top: 4px;
}
.tag {
  position: absolute;
  left: 14px;
  top: 5px;
}
.tue-12-03-2024 {
  color: #5041ff;
  text-align: left;
  font-family: "Inter-Medium", sans-serif;
  font-size: 11px;
  font-weight: 500;
  position: absolute;
  left: 228px;
  top: 8px;
}
.circular-logo-gn-2 {
  width: 120px;
  height: 120px;
  position: absolute;
  left: calc(50% - 60px);
  top: calc(50% - 59.5px);
  object-fit: cover;
}
.text-area-to-display {
  color: #000000;
  text-align: justified;
  font-family: "Inter-Medium", sans-serif;
  font-size: 11px;
  font-weight: 500;
  position: absolute;
  left: calc(50% - 148px);
  top: 43px;
  width: 296px;
  height: 119px;
  display: flex;
  align-items: center;
}
.footerbanner-1 {
  width: 205px;
  height: 50.87px;
  position: absolute;
  left: 30px;
  top: 535.87px;
  transform-origin: 0 0;
  transform: rotate(0deg) scale(1, -1);
  object-fit: cover;
}
.circular-logo-gn-3 {
  width: 54px;
  height: 54px;
  position: absolute;
  left: 311px;
  top: 482px;
  object-fit: cover;
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
                    <label for="image" class="form-label fw-semibold">Image</label>
                    <input type="file" class="form-control" id="image" @change="handleImageChange" />
                  </div>
                  <div class="mb-3">
                    <label for="details" class="form-label fw-semibold">Details</label>
                    <textarea class="form-control" placeholder="Enter Details" id="floatingTextarea" v-model="formData.details"></textarea>
                  </div>
                  <div class="mb-3">
                    <label for="details" class="form-label fw-semibold">Tag</label>
                    <input class="form-control" placeholder="Sports/News/Politics/Notice" id="floatingTextarea" v-model="formData.tag" />
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
            <div class="preview py-3 post position-relative">
              <!-- <img class="bg-medical-store-1 img-fluid" src="../assets/bgImg.jpg" alt="Background Image" /> -->
              <div class="image-container border border-primary">
                <div class="group-15 d-flex flex-column">
                  <img class="camera-1 img-fluid" :src="formData.image" alt="Uploaded Image" />
                  <img class="circular-logo-gn-1 img-fluid opacity-50" src="../assets/CircularLogo_gn_noBg.png" alt="Circular Logo" />
                </div>
              </div>

              <div class="frame-11">
                <div class="rectangle-8"></div>
                <div class="tag text-capitalize text-light fw-semibold d-flex justify-content-center">
                  <span class="border">
                    {{ formData.tag }}
                  </span>
                </div>
                <div class="tue-12-03-2024">Tue, 12-03-2024</div>
                <img class="circular-logo-gn-2 img-fluid opacity-25" src="../assets/CircularLogo_gn_noBg.png" alt="Circular Logo" />
                <div class="text-area-to-display">
                  <span>
                    <h5 class="text-justify">{{ formData.details }}</h5>
                  </span>
                </div>
              </div>
              <div class="position-absolute bottom-0 w-100 d-flex justify-content-evenly pb-3">
                <img class="img-fluid" src="../assets/Footerbanner.png" alt="" style="height: 50px" />
                <i class="bi bi-facebook"></i>
                <!-- <div class="border">
                  <i class="bi bi-facebook text-warning"></i>
                  <i class="bi bi-instagram text-warning"></i>
                  <i class="bi bi-twitter-x text-warning"></i>
                  <i class="bi bi-youtube text-warning"></i>
                </div> -->
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
        tag: "",
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

      if (this.formData.tag == "") {
        toast.error(`Enter Tag`, {
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
