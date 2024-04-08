<style scoped>
.main {
  width: 100%;
  height: 100vh;
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

.preview-details-body {
  width: 70%;
}

.preview-details {
  position: absolute;
  top: 77%;
  width: 100%;
}

.preview-content {
  height: 77%;
}

.preview {
  background: linear-gradient(to right, rgb(88, 12, 14), rgb(90, 15, 18));
  /* url("../assets/bgImg.jpg"); */
  /* background-size: cover;
  background-position: bottom; */
}

@media (max-width: 529px) {
  .news-heading {
    font-size: 0.8rem;
  }
  .form-container {
    background: linear-gradient(to right, #00b09b, #2cf7df);
    border-radius: 10px;
    padding: 20px;
    width: 90%;
    height: auto;
  }
  .preview-header {
    height: 60px;
  }
  .preview {
    width: 90%;
    min-width: 400px;
    min-height: 570px;
    max-width: 400px;
  }

  .preview-image {
    width: 90%;
    height: 100%;
  }

  .preview-details-body {
    width: 80%;
    min-height: 2rem;
  }

  .preview-details {
    position: absolute;
    top: 93%;
    width: 100%;
  }

  .preview-content {
    height: 45%;
  }
}

@media (min-width: 529px) {
  .form-container {
    background: linear-gradient(to right, #00b09b, #2cf7df);
    border-radius: 10px;
    padding: 20px;
    width: 90%;
    height: auto;
  }
  .preview-header {
    height: 60px;
  }
  .preview {
    width: 90%;
    min-width: 529px;
    min-height: 620px;
  }

  .preview-image {
    width: 80%;
    height: 100%;
  }

  .preview-details-body {
    width: 70%;
    min-height: 2rem;
  }

  .preview-details {
    position: absolute;
    top: 93%;
    width: 100%;
  }

  .preview-content {
    height: 45%;
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
  .preview-header {
    height: 60px;
  }
  .preview {
    width: 90%;
    min-height: 640px;
  }

  .preview-image {
    width: 80%;
    height: 100%;
  }

  .preview-details-body {
    width: 70%;
    min-height: 2rem;
  }

  .preview-details {
    position: absolute;
    top: 93%;
    width: 100%;
  }

  .preview-content {
    height: 45%;
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
  .preview-header {
    height: 60px;
  }
  .preview {
    width: 80%;
    max-width: 700px;
    min-height: 650px;
  }
  .preview-image {
    width: 80%;
    height: 100%;
  }

  .preview-details-body {
    width: 70%;
    min-height: 2rem;
  }

  .preview-details {
    position: absolute;
    top: 93%;
    width: 100%;
  }

  .preview-content {
    height: 45%;
  }
}

@media (min-width: 992px) {
  .preview {
    min-height: 650px;
    max-height: 650px;
  }
  .preview-header {
    height: 60px;
  }
  .preview-image {
    width: 80%;
    height: 100%;
  }

  .preview-details-body {
    width: 70%;
    min-height: 2.5rem;
  }

  .preview-details {
    position: absolute;
    top: 93%;
    width: 100%;
  }

  .preview-content {
    height: 45%;
  }
}

@media (min-width: 1200px) {
  .preview {
    min-height: 660px;
    max-width: 660px;
  }
  .preview-image {
    height: 100%;
  }

  .preview-details-body {
    width: 70%;
    min-height: 2.5rem;
  }

  .preview-details {
    position: absolute;
    top: 93%;
    width: 100%;
  }

  .preview-content {
    height: 45%;
  }
}

.preview2-header {
  height: 80px;
}
.preview2 {
  background: linear-gradient(to right, rgb(88, 12, 14), rgb(90, 15, 18));
}

.preview2 {
  min-height: 700px;
  min-width: 700px;
  max-height: 700px;
  max-width: 700px;
}
.preview2-image {
  width: 100%;
  height: 100%;
}
.uploadedImg1 {
}

.preview2-details-body {
  width: 70%;
  min-height: 2rem;
}

.preview2-details {
  position: absolute;
  top: 93%;
  width: 100%;
}

.preview2-content {
  height: 45%;
}

.preview2-content-area {
  background: linear-gradient(to right, rgba(88, 12, 14, 0.5), rgba(90, 15, 18, 0.5)), url("../assets/CircularLogo_gn_noBg.png");

  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: center;
}
</style>

<template>
  <div class="main">
    <div v-auto-animate class="main2 py-2 h-100">
      <div v-if="!submited" class="d-flex justify-content-center align-items-center">
        <div class="w-100 d-flex justify-content-center d-flex align-items-center">
          <div id="app" class="form-container shadow-lg d-flex align-items-center justify-content-center flex-shrink" style="width: 90%">
            <div class="row w-100">
              <div class="col-md-7 offset-md-3">
                <h2 class="mb-4 text-light">Duo</h2>
                <form @submit.prevent="handleSubmit" enctype="multipart/form-data" class="text-light">
                  <div class="mb-3">
                    <label for="image" class="form-label fw-semibold">Image 1</label>
                    <input type="file" class="form-control" id="image" @change="handleImageChange" />
                  </div>
                  <div class="mb-3">
                    <select class="form-select" aria-label="Default select example" v-model="position">
                      <option value="0">Position</option>
                      <option :value="item" v-for="item in positionOptions" :key="item">{{ item }}</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="image" class="form-label fw-semibold">Image 2</label>
                    <input type="file" class="form-control" id="image" @change="handleImageChange2" />
                  </div>
                  <div class="mb-3">
                    <select class="form-select" aria-label="Default select example" v-model="position2">
                      <option value="0">Position</option>
                      <option :value="item" v-for="item in positionOptions" :key="item">{{ item }}</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="details" class="form-label fw-semibold">News Heading</label>
                    <input class="form-control text-capitalize" placeholder="Sports/News/Politics/Notice" id="floatingTextarea" v-model="formData.heading" maxlength="48" />
                    <div class="text-muted mt-1 text-light" style="color: white !important; font-weight: 500">{{ formData.heading ? formData.heading.length : 0 }} / 48</div>
                  </div>
                  <div class="mb-3">
                    <label for="details" class="form-label fw-semibold">Details</label>
                    <textarea class="form-control" placeholder="Enter Details" id="floatingTextarea" v-model="formData.details" maxlength="250"></textarea>
                    <div class="text-muted mt-1 text-light" style="color: white !important; font-weight: 500">{{ formData.details ? formData.details.length : 0 }} / 250</div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 col-6">
                      <label for="details" class="form-label fw-semibold" style="color: white; font-weight: 600 !important; text-transform: uppercase">Text Size</label>
                      <input class="form-control text-capitalize" type="number" id="floatingTextarea" v-model="textSize" />
                    </div>
                    <!-- <div class="col-md-6 col-6">
                      <label for="details" class="form-label fw-semibold"
                        >Text Size</label
                      >
                      <input
                        class="form-control text-capitalize"
                        type="number"
                        id="floatingTextarea"
                        v-model="textSize"
                      />
                    </div> -->
                  </div>

                  <div class="">
                    <button type="submit" class="btn btn-primary submit-btn">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="submited" v-auto-animate class="row">
        <div class="col-12 col-xl-6 d-flex justify-content-center align-items-center">
          <div class="w-100 d-flex justify-content-center d-flex align-items-center">
            <div id="app" class="form-container shadow-lg d-flex align-items-center justify-content-center flex-shrink" style="width: 90%">
              <div class="row w-100">
                <div class="col-md-7 offset-md-3">
                  <h2 class="mb-4 text-light">Duo</h2>
                  <form @submit.prevent="handleSubmit" enctype="multipart/form-data" class="text-light">
                    <div class="mb-3">
                      <label for="image" class="form-label fw-semibold">Image 1</label>
                      <input type="file" class="form-control" id="image" @change="handleImageChange" />
                    </div>
                    <div class="mb-3">
                      <select class="form-select" aria-label="Default select example" v-model="position">
                        <option value="0">Position</option>
                        <option :value="item" v-for="item in positionOptions" :key="item">{{ item }}</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="image" class="form-label fw-semibold">Image 2</label>
                      <input type="file" class="form-control" id="image" @change="handleImageChange2" />
                    </div>
                    <div class="mb-3">
                      <select class="form-select" aria-label="Default select example" v-model="position2">
                        <option value="0">Position</option>
                        <option :value="item" v-for="item in positionOptions" :key="item">{{ item }}</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="details" class="form-label fw-semibold">News Heading</label>
                      <input class="form-control text-capitalize" placeholder="Sports/News/Politics/Notice" id="floatingTextarea" v-model="formData.heading" maxlength="48" />
                      <div class="text-muted mt-1 text-light" style="color: white !important; font-weight: 500">{{ formData.heading ? formData.heading.length : 0 }} / 48</div>
                    </div>
                    <div class="mb-3">
                      <label for="details" class="form-label fw-semibold">Details</label>
                      <textarea class="form-control" placeholder="Enter Details" id="floatingTextarea" v-model="formData.details" maxlength="250"></textarea>
                      <div class="text-muted mt-1 text-light" style="color: white !important; font-weight: 500">{{ formData.details ? formData.details.length : 0 }} / 250</div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 col-6">
                        <label for="details" class="form-label fw-semibold" style="color: white; font-weight: 600 !important; text-transform: uppercase">Text Size</label>
                        <input class="form-control text-capitalize" type="number" id="floatingTextarea" v-model="textSize" />
                      </div>
                      <!-- <div class="col-md-6 col-6">
                      <label for="details" class="form-label fw-semibold"
                        >Text Size</label
                      >
                      <input
                        class="form-control text-capitalize"
                        type="number"
                        id="floatingTextarea"
                        v-model="textSize"
                      />
                    </div> -->
                    </div>

                    <div class="">
                      <button type="submit" class="btn btn-primary submit-btn">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

        <div class="col-12 col-xl-6">
          <div v-auto-animate class="preview-area w-100 mt-3 mt-xl-0">
            <div class="preview-container w-100 d-flex justify-content-center">
              <div class="preview position-relative mt-1 border border-success">
                <div class="preview-header w-100 bg-transparent d-flex position-relative">
                  <div class="position-absolute h-100 d-flex align-items-center start-0 end-0">
                    <img src="../assets/CircularLogo_gn.png" class="img-thumbnail bg-transparent border-0 opacity-100" alt="..." style="width: 50px; height: auto" />
                  </div>
                  <div class="w-100 d-flex align-items-center justify-content-center">
                    <span class="border border-2 border-light px-3 bg-warning shadow-lg">
                      <h3 class="fw-bolder">Breaking News</h3>
                    </span>
                  </div>
                </div>
                <div class="position-relative preview-content border">
                  <div class="preview-body h-100 d-flex justify-content-center">
                    <div class="preview-image w-100">
                      <div v-auto-animate class="w-100 h-100 bg-transparent">
                        <div v-auto-animate class="w-100 h-100 bg-light position-relative border border-warning">
                          <!--                           <img src="../assets/camera.jpg" class="border-0 w-100 h-100 object-fit-cover" alt="..." /> -->
                          <!-- <img :src="formData.image" class="border-0 w-100 h-100 object-fit-cover" alt="..." /> -->
                          <div class="w-100 h-100 bg-danger d-flex">
                            <div class="h-100 w-50 bg-light border-end border-warning">
                              <div class="h-100 w-100" :style="{ backgroundImage: 'url(' + formData.image + ')', backgroundSize: 'cover', backgroundPosition: position }"></div>
                              <!-- <img :src="formData.image" class="border-0 w-100 h-100 object-fit-cover" alt="..." /> -->
                            </div>
                            <div class="h-100 w-50 bg-success">
                              <div class="h-100 w-100" :style="{ backgroundImage: 'url(' + formData.image2 + ')', backgroundSize: 'cover', backgroundPosition: position2 }"></div>
                              <!--  <img :src="formData.image2" class="border-0 w-100 h-100 object-fit-cover" alt="..." /> -->
                            </div>
                          </div>

                          <!-- <div class="position-absolute top-0 end-0 mt-2 me-2">
                            <img src="../assets/CircularLogo_gn_noBg.png" class="img-thumbnail bg-transparent border-0 opacity-50 float-end" alt="..." style="width: 20%; height: auto" />
                          </div> -->
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-auto-animate class="preview-details text-dark d-flex justify-content-center">
                    <div class="preview-details-body bg-light rounded py-2 px-2 text-center border border-warning overflow-x-hidden overflow-y-auto">
                      <h6 v-if="isMobile <= 529" class="fw-bold news-heading text-uppercase" :style="{ fontSize: textSize + 'px' }">{{ formData.heading }}</h6>
                      <h5 v-if="isMobile > 529" class="fw-bold news-heading text-uppercase" :style="{ fontSize: textSize + 'px' }">{{ formData.heading }}</h5>
                    </div>
                  </div>
                </div>
                <div class="preview-content-area mt-4 p-4">
                  <div class="preview-content-details text-light">
                    <span v-if="isMobile <= 529">
                      <!-- Render h6 when screen width is less than or equal to 529px -->
                      <h6 class="fw-bolder" style="text-align: center" :style="{ fontSize: textSize + 'px' }">{{ formData.details }}</h6>
                    </span>
                    <span v-if="isMobile > 529">
                      <!-- Render h5 when screen width is greater than 529px -->
                      <h5 class="fw-bold" style="text-align: center" :style="{ fontSize: textSize + 'px' }">{{ formData.details }}</h5>
                    </span>
                  </div>
                </div>
                <div class="preview-footer my-1 text-light mb-3 position-absolute bottom-0 w-100">
                  <div class="d-flex justify-content-between">
                    <img src="../assets/Footerbanner.png" class="img-thumbnail bg-transparent border-0 mx-2" alt="..." style="height: 50px" />
                    <img src="../assets/SocialMediaGroupWhite.png " class="img-thumbnail mx-2 bg-transparent border-0" alt="..." style="width: auto; height: 50px" />
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center my-3">
              <button @click="handleDownload" class="btn btn-primary submit-btn">Download Preview</button>
            </div>
          </div>
        </div>
      </div>

      <!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

      <div v-if="downloaded" class="h-100 w-100">
        <div v-auto-animate v-if="submited" class="preview2-area w-100 mt-3 mt-xl-0">
          <div class="preview2-container w-100 d-flex justify-content-center">
            <div class="preview2 position-relative mt-1">
              <div class="preview2-header w-100 bg-transparent d-flex position-relative">
                <div class="position-absolute h-100 d-flex align-items-center start-0 end-0">
                  <img src="../assets/CircularLogo_gn.png" class="img-thumbnail bg-transparent border-0 opacity-100" alt="..." style="width: 70px; height: auto" />
                </div>
                <div class="w-100 d-flex align-items-center justify-content-center">
                  <span class="border border-2 border-light px-5 bg-warning shadow-lg d-flex align-items-center">
                    <h3 class="fw-bolder px-5">Breaking News</h3>
                  </span>
                </div>
              </div>
              <div class="position-relative preview2-content border borde-2 border-warning">
                <div class="preview2-body h-100 d-flex justify-content-center">
                  <div class="preview2-image w-100">
                    <div v-auto-animate class="w-100 h-100 bg-transparent">
                      <div v-auto-animate class="w-100 h-100 bg-light position-relative">
                        <!--  <img src="../assets/camera.jpg" class="border-0 w-100 h-100 object-fit-cover" alt="..." /> -->
                        <div class="w-100 h-100 bg-danger d-flex">
                          <div class="h-100 w-50 bg-light border-end border-2 border-warning" :style="{ backgroundImage: 'url(' + formData.image + ')', backgroundSize: 'cover', backgroundPosition: position }"></div>
                          <div class="h-100 w-50 bg-success" :style="{ backgroundImage: 'url(' + formData.image2 + ')', backgroundSize: 'cover', backgroundPosition: position2 }"></div>
                        </div>
                        <!-- <div class="position-absolute top-0 end-0 mt-2 me-2">
                          <img src="../assets/CircularLogo_gn_noBg.png" class="img-thumbnail bg-transparent border-0 opacity-50 float-end" alt="..." style="width: 20%; height: auto" />
                        </div> -->
                      </div>
                    </div>
                  </div>
                </div>
                <div v-auto-animate class="preview2-details text-dark d-flex justify-content-center">
                  <div class="preview2-details-body bg-light rounded py-2 px-2 text-center border border-warning">
                    <h6 class="fw-bold text-uppercase">{{ formData.heading }}</h6>
                  </div>
                </div>
              </div>
              <div class="preview2-content-area mt-4 p-4 d-flex align-items-center" style="height: 32.5%">
                <div class="preview2-content-details text-light">
                  <span>
                    <!-- Render h5 when screen width is greater than 529px -->
                    <h5 class="fw-bold" style="text-align: center; opacity: 1" :style="{ fontSize: textSize + 5 + 'px' }">{{ formData.details }}</h5>
                  </span>
                </div>
              </div>
              <div class="preview2-footer my-1 text-light mb-2 position-absolute bottom-0 w-100">
                <div class="d-flex justify-content-between align-items-center">
                  <img src="../assets/Footerbanner.png" class="img-thumbnail bg-transparent border-0 mx-2" alt="..." style="height: 70px" />
                  <img src="../assets/SocialMediaGroupWhite.png " class="img-thumbnail mx-2 bg-transparent border-0" alt="..." style="width: auto; height: 50px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axiosClient from "../axiosClient";

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import html2canvas from "html2canvas";

export default {
  name: "BreakingNews",
  props: {
    details: String,
    tag: String,
    image: String,
  },

  data() {
    return {
      loggedIn: false,
      positionOptions: ["top", "center", "bottom", "left", "right"],
      position: "0",
      post: true,
      position2: "0",
      textSize: 14,
      breaking: true,
      clash: false,
      isMobile: false,
      submited: false,
      downloaded: false,

      formData: {
        details: "",
        image: null,
        image2: null,
        heading: "",
        date: "",
        day: "0",
      },
    };
  },

  async created() {
    const auth = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    try {
      const token = await axiosClient.get("user/getcurrentuser/"); /* .catch((err) => {
        console.log(err);
        if (err.response.status == 401) {
          this.$router.push("/login");
        }
      }); */

      /* console.log(this.profile_url); */
    } catch (e) {
      console.log("error: ", e);
      this.$router.push("/login");
    }

    this.loggedIn = true;
  },

  mounted() {
    // Check screen width on component mount
    this.checkScreenWidth();

    // Listen for window resize event
    window.addEventListener("resize", this.checkScreenWidth);
  },
  beforeDestroy() {
    // Remove window resize event listener when component is destroyed
    window.removeEventListener("resize", this.checkScreenWidth);
  },

  methods: {
    checkScreenWidth() {
      // Set isMobile based on screen width
      this.isMobile = window.innerWidth;
      console.log(this.isMobile);
    },

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
    handleImageChange2(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.formData.image2 = e.target.result;
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

      /*  if (this.formData.day == "0") {
        toast.error(`Select Day`, {
          autoClose: 1500,
        });
        return;
      } */

      let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let currentDate = new Date();
      let currentDay = daysOfWeek[currentDate.getDay()];
      this.formData.day = currentDay;

      let currentDate2 = new Date();
      let day = currentDate2.getDate().toString().padStart(2, "0");
      let month = (currentDate2.getMonth() + 1).toString().padStart(2, "0");
      let year = currentDate2.getFullYear().toString().slice(-2);

      let formattedDate = `${day}-${month}-${year}`;
      this.formData.date = formattedDate;

      this.submited = true;
      // You can perform form submission logic here
      console.log("Form submitted:", this.formData);
      // Example: Send form data to the server using axios or fetch API
    },

    handleDownload() {
      this.downloaded = true;
      setTimeout(() => {
        this.downloadPreview();
      }, 1000);
    },

    downloadPreview() {
      console.log("downloadPreview Called");

      // Select the preview area
      const preview = document.querySelector(".preview2");

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
      this.downloaded = false;
      console.log("downloadPreview Ended");
    },
  },
};
</script>
