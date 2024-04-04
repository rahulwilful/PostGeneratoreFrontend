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
  background: url("../assets/bgImg.jpg");
  background-size: cover;
  background-position: bottom;
}

@media (max-width: 529px) {
  .form-container {
    background: linear-gradient(to right, #00b09b, #2cf7df);
    border-radius: 10px;
    padding: 20px;
    width: 90%;
    height: auto;
  }
  .preview {
    width: 90%;
    min-width: 400px;
    min-height: 570px;
    max-width: 400px;
  }

  .preview-image {
    width: 90%;
    height: 50%;
  }

  .preview-details-body {
    max-height: 9rem;
    width: 80%;
    min-height: 17rem;
  }

  .preview-details {
    position: absolute;
    top: 43%;
    width: 100%;
  }

  .preview-content {
    height: 77%;
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
  .preview {
    width: 90%;
    min-width: 529px;
    min-height: 620px;
  }

  .preview-image {
    width: 80%;
    height: 60%;
  }

  .preview-details-body {
    width: 70%;
    min-height: 8rem;
    max-height: 15rem;
  }

  .preview-details {
    position: absolute;
    top: 56%;
    width: 100%;
  }

  .preview-content {
    height: 77%;
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
    min-height: 640px;
  }

  .preview-image {
    width: 80%;
    height: 70%;
  }

  .preview-details-body {
    width: 70%;
    min-height: 8rem;
    max-height: 15rem;
  }

  .preview-details {
    position: absolute;
    top: 64%;
    width: 100%;
  }

  .preview-content {
    height: 77%;
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
    width: 80%;
    max-width: 700px;
    min-height: 650px;
  }
  .preview-image {
    width: 80%;
    height: 70%;
  }

  .preview-details-body {
    width: 70%;
    min-height: 8rem;
    max-height: 15rem;
  }

  .preview-details {
    position: absolute;
    top: 65%;
    width: 100%;
  }

  .preview-content {
    height: 77%;
  }
}

@media (min-width: 992px) {
  .preview {
    min-height: 650px;
    max-height: 650px;
  }
  .preview-image {
    width: 80%;
  }

  .preview-details-body {
    width: 70%;
    min-height: 8rem;
    max-height: 14rem;
  }

  .preview-details {
    position: absolute;
    top: 64%;
    width: 100%;
  }

  .preview-content {
    height: 77%;
  }
}

@media (min-width: 1200px) {
  .preview {
    min-height: 590px;
    max-width: 660px;
  }
  .preview-image {
    width: 80%;
    height: 60%;
  }

  .preview-details-body {
    width: 70%;
    min-height: 8rem;
    max-height: 15rem;
  }

  .preview-details {
    position: absolute;
    top: 55%;
    width: 100%;
  }

  .preview-content {
    height: 77%;
  }
}

.preview2 {
  background: url("../assets/bgImg.jpg");
  background-size: cover;
  background-position: bottom;
}

.preview2 {
  min-height: 700px;
  min-width: 700px;
  max-height: 700px;
  max-width: 700px;
}
.preview2-image {
  width: 90%;
  height: 50%;
}
.uploadedImg1 {
}

.preview2-details-body {
  width: 70%;
  min-height: 8rem;
  max-height: 17rem;
}

.preview2-details {
  position: absolute;
  top: 46%;
  width: 100%;
}

.preview2-content {
  height: 77%;
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
                <h2 class="mb-4">Generate Post</h2>
                <form @submit.prevent="handleSubmit" enctype="multipart/form-data" class="">
                  <div class="mb-3">
                    <label for="image" class="form-label fw-semibold">Image</label>
                    <input type="file" class="form-control" id="image" @change="handleImageChange" />
                  </div>

                  <div class="mb-3">
                    <select class="form-select" aria-label="Default select example" v-model="position">
                      <option value="0">Position</option>
                      <option :value="item" v-for="item in positionOptions" :key="item">{{ item }}</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="details" class="form-label fw-semibold">Details</label>
                    <textarea class="form-control" placeholder="Enter Details" id="floatingTextarea" v-model="formData.details" maxlength="250"></textarea>
                    <div class="text-muted mt-1">{{ formData.details.length }} / 250</div>
                  </div>

                  <div class="mb-3">
                    <label for="details" class="form-label fw-semibold">Tag</label>
                    <input class="form-control text-capitalize" placeholder="Sports/News/Politics/Notice" id="floatingTextarea" v-model="formData.tag" />
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

      <!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
      <div v-if="submited" v-auto-animate>
        <div class="row">
          <div class="col-12 col-xl-6 d-flex justify-content-center align-items-center">
            <div class="w-100 d-flex justify-content-center d-flex align-items-center">
              <div id="app" class="form-container shadow-lg d-flex align-items-center justify-content-center flex-shrink" style="width: 90%">
                <div class="row w-100">
                  <div class="col-md-7 offset-md-3">
                    <h2 class="mb-4">Generate Post</h2>
                    <form @submit.prevent="handleSubmit" enctype="multipart/form-data" class="">
                      <div class="mb-3">
                        <label for="image" class="form-label fw-semibold">Image</label>
                        <input type="file" class="form-control" id="image" @change="handleImageChange" />
                      </div>
                      <div class="mb-3">
                        <select class="form-select" aria-label="Default select example" v-model="position">
                          <option value="0">Position</option>
                          <option :value="item" v-for="item in positionOptions" :key="item">{{ item }}</option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <label for="details" class="form-label fw-semibold">Details</label>
                        <textarea class="form-control" placeholder="Enter Details" id="floatingTextarea" v-model="formData.details" maxlength="250"></textarea>
                        <div class="text-muted mt-1">{{ formData.details.length }} / 250</div>
                      </div>
                      <div class="mb-3">
                        <label for="details" class="form-label fw-semibold">Tag</label>
                        <input class="form-control text-capitalize" placeholder="Sports/News/Politics/Notice" id="floatingTextarea" v-model="formData.tag" />
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
            <div v-auto-animate v-if="submited" class="preview-area w-100 mt-3 mt-xl-0">
              <div class="preview-container w-100 d-flex justify-content-center">
                <div class="preview py-3 position-relative mt-1">
                  <div class="position-relative preview-content">
                    <div class="preview-body mt-1 h-100 d-flex justify-content-center">
                      <div class="preview-image">
                        <div v-auto-animate class="w-100 h-100 p-2 bg-light">
                          <div v-auto-animate class="w-100 h-100 p-2 bg-light position-relative" :style="{ backgroundImage: 'url(' + formData.image + ')', backgroundSize: 'cover', backgroundPosition: position }">
                            <!--

                            <img :src="formData.image" class="border-0 w-100 h-100 object-fit-cover" alt="..." />
                          -->
                            <div class="position-absolute top-0 end-0 mt-2 me-2">
                              <img src="../assets/CircularLogo_gn_noBg.png" class="img-thumbnail bg-transparent border-0 opacity-50 float-end" alt="..." style="width: 20%; height: auto" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-auto-animate class="preview-details text-dark d-flex justify-content-center">
                      <div class="preview-details-body bg-light rounded py-2 px-2">
                        <!-- Set min-height -->
                        <div class="h-100 position-relative">
                          <div class="d-flex justify-content-center" style="height: 100%">
                            <img src="../assets/CircularLogo_gn_noBg.png" class="img-thumbnail bg-transparent border-0 opacity-25" alt="..." style="width: auto; height: 100%" />
                          </div>
                          <div class="h-100 w-100 position-absolute start-0 top-0 preview-details-body-content">
                            <div class="d-flex justify-content-between preview-details-body-content-header mb-1">
                              <span class="bg-danger px-2 rounded text-light fw-semibold text-capitalize">{{ formData.tag }}</span>
                              <span class="fw-semibold text-primary" style="text-decoration: underline">{{ formData.day }},{{ formData.date }}</span>
                            </div>
                            <div class="d-flex preview-details-body-content-body justify-content-center px-2" style="height: calc(100% - 25px)">
                              <span class="d-flex align-items-center" style="height: 100%">
                                <div>
                                  <span v-if="isMobile">
                                    <!-- Render h6 when screen width is less than or equal to 529px -->
                                    <h6 class="fw-bold" style="text-align: center">{{ formData.details }}</h6>
                                  </span>
                                  <span v-else>
                                    <!-- Render h5 when screen width is greater than 529px -->
                                    <h5 class="fw-bold" style="text-align: center">{{ formData.details }}</h5>
                                  </span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="preview-footer my-1 text-light mb-3 position-absolute bottom-0 w-100">
                    <div class="d-flex justify-content-between px-2">
                      <img src="../assets/Footerbanner.png" class="img-thumbnail bg-transparent border-0 mx-2" alt="..." style="height: 50px" />
                      <img src="../assets/SocialMediaGroup.png " class="img-thumbnail mx-2 bg-transparent border-0" alt="..." style="width: auto; height: 50px" />
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
      </div>

      <!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->

      <div v-if="downloaded" class="h-100 w-100">
        <div class="preview2-area w-100 mt-5 h-100">
          <div class="preview2-container w-100 d-flex justify-content-center h-100">
            <div class="preview2 py-2 position-relative h-100">
              <div class="position-relative preview2-content h-100">
                <div class="preview2-body mt-3 d-flex justify-content-center h-100">
                  <div class="preview2-image">
                    <div v-auto-animate class="w-100 h-100 p-2 bg-light">
                      <div v-auto-animate class="w-100 h-100 bg-light uploadedImg1 position-relative" :style="{ backgroundImage: 'url(' + formData.image + ')', backgroundSize: 'cover', backgroundPosition: position }">
                        <!-- <img :src="formData.image" class="border-0 w-100 uploadedImg1 h-100" alt="..." /> -->
                        <div class="position-absolute top-0 end-0 mt-2 me-2">
                          <img src="../assets/CircularLogo_gn_noBg.png" class="img-thumbnail bg-transparent border-0 opacity-50 float-end" alt="..." style="width: 20%; height: auto" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-auto-animate class="preview2-details text-dark d-flex justify-content-center">
                  <div class="preview2-details-body bg-light rounded py-2 px-2">
                    <div class="h-100 position-relative">
                      <div class="d-flex justify-content-center" style="height: 100%">
                        <img src="../assets/CircularLogo_gn_noBg.png" class="img-thumbnail bg-transparent border-0 opacity-25" alt="..." style="width: auto; height: 100%" />
                      </div>
                      <div class="h-100 w-100 position-absolute start-0 top-0 preview2-details-body-content">
                        <div class="d-flex justify-content-between preview2-details-body-content-header mb-1">
                          <span class="bg-danger px-2 rounded text-light fw-semibold text-capitalize">{{ formData.tag }}</span>
                          <span class="fw-semibold text-primary" style="text-decoration: underline">{{ formData.day }},{{ formData.date }}</span>
                        </div>
                        <div class="d-flex preview2-details-body-content-body justify-content-center px-2" style="height: calc(100% - 25px)">
                          <span class="d-flex align-items-center" style="height: 100%">
                            <span>
                              <h4 class="fw-bold" style="text-align: center">{{ formData.details }}</h4>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="preview2-footer my-1 text-light mb-3 position-absolute bottom-0 w-100">
                <div class="d-flex justify-content-between align-items-center px-2">
                  <img src="../assets/Footerbanner.png" class="img-thumbnail bg-transparent border-0 mx-2" alt="..." style="height: 70px" />
                  <img src="../assets/SocialMediaGroup.png " class="img-thumbnail mx-2 bg-transparent border-0" alt="..." style="width: auto; height: 50px" />
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
  name: "PostGeneratore",

  data() {
    return {
      post: true,
      id: "",
      positionOptions: ["top", "center", "bottom", "left", "right"],
      position: "0",
      clash: false,
      isMobile: false,
      submited: false,
      downloaded: false,
      formData: {
        details: "",
        image: null,
        tag: "",
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
      const token = await axiosClient.get("user/getcurrentuser/").catch((err) => {
        console.log(err);
        if (err.response.status == 401) {
          this.$router.push("/login");
        }
      });

      /* console.log(this.profile_url); */
    } catch (e) {
      console.log("error: ", e);
    }
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
      this.isMobile = window.innerWidth <= 529;
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
