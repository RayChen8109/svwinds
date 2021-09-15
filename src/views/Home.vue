<template>
  <!-- https://github.com/shershen08/vue-masonry?ref=madewithvuejs.com -->
  <!-- https://w3c.hexschool.com/blog/16432a4f -->
  <div class="container-fluid">
    <div class="row mt-4">
      <div class="d-flex justify-content-center">
        <div class="carousel slide carousel-top pe-0" id="carousel" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button
              type="button"
              v-for="(item, index) in data.carouselData"
              :key="index"
              data-bs-target="#carousel"
              :data-bs-slide-to="index"
              aria-current="true"
              :aria-label="'Slide' + item.id"
              :class="{ active: index === 0 }"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item" v-for="(item, index) in data.carouselData" :key="index" :class="{ active: index === 0 }">
              <img :src="item.image" class="d-block w-100" alt="pic" />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="col-12 mt-5">
        <div class="row">
          <div class="col-lg-6 col-12 d-flex justify-content-lg-end justify-content-center">
            <div class="card border-0 card-news">
              <div class="card-body">
                <blockquote>
                  <h4 class="card-title">最新消息</h4>
                </blockquote>
                <div class="row">
                  <div class="col-12 border-bottom" v-for="(item, index) in data.newsMsgData.slice(0, 5)" :key="index">
                    <div class="row my-2 card-font-size">
                      <div class="col-9 d-flex align-items-center">
                        <div class="text-truncate">{{ item.title }}</div>
                      </div>
                      <div class="col-3 d-flex justify-content-end">
                        <div>{{ item.date }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center mt-3">
                    <button type="button" class="get-more-btn">
                      <p>more</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-12 d-flex justify-content-lg-start justify-content-center">
            <div class="card border-0 card-recruit">
              <div class="card-body">
                <blockquote>
                  <h4 class="card-title">招聲訊息</h4>
                </blockquote>
                <div class="row">
                  <div class="col-12 border-bottom" v-for="(item, index) in data.recruitMsgData.slice(0, 5)" :key="index">
                    <div class="row my-2 card-font-size">
                      <div class="col-9 d-flex align-items-center">
                        <div class="text-truncate">{{ item.title }}</div>
                      </div>
                      <div class="col-3 d-flex justify-content-end">
                        <div>{{ item.date }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center mt-3">
                    <button type="button" class="get-more-btn">
                      <p>more</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="spacing mt-5">
        <div class="fixed-image"></div>
        <figure>
          <p>我們用音樂藝術這個能跨越疆界的語言，搭配戲劇文學的自我反照功能，去思索我們一般用文字語言難以觸碰的敏感議題，來建立對話的可能，突破迷思的僵局，面對我們真實的自己。</p>
          <figcaption>
            <p>黃子修 <small>指揮</small></p>
          </figcaption>
        </figure>
      </div>
      <div class="public-performance">
        <blockquote>
          <h4>近期演出</h4>
        </blockquote>
      </div>
      <div class="d-flex justify-content-center my-5">
        <Carousel :settings="settings" :breakpoints="breakpoints">
          <Slide v-for="(item, index) in data.performanceInfo.slice().reverse()" :key="index">
            <div class="carousel__item">
              <img class="image" :src="item.image" alt="pic" />
              <p class="title">{{ item.title }}</p>
              <p class="subtitle">{{ item.subtitle }}</p>
            </div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { data } from "../util/data/data.js";
import { appPath } from "../app-path.const";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      data: data,
      appPath: appPath,
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        576: {
          itemsToShow: 2.5,
          snapAlign: "center",
        },
        // 1024 and up
        992: {
          itemsToShow: 3.5,
          snapAlign: "start",
        },
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>

.carousel__item {
  width: 100%;
  white-space: pre-line;

  .image {
    width: auto;
    max-height: 20rem;
    object-fit: contain;
  }

  .title {
    font-size: 1rem;
    margin-top: 5%;
  }

  .subtitle {
    font-size: 0.75rem;
    font-style: italic;
    color: rgb(163, 163, 163);
  }
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

.carousel-top {
  width: 90%;
}

.carousel-inner {
  max-height: 35rem;
  width: 100%;
}

.spacing {
  position: relative;

  .fixed-image {
    background-image: url("../assets/20200830-453.jpg");
    background-attachment: fixed;
    background-size: cover;
    background-position: 15%;
    opacity: 0.2;
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  figure {
    position: absolute;
    top: 50%;
    left: 20%;
    width: 60%;
    transform: translateY(-50%);

    p {
      font-size: 1.2rem;
      font-style: italic;
      line-height: 2rem;
    }

    figcaption {
      position: absolute;
      bottom: 0%;
      right: 0%;
      transform: translateY(50%);
      p {
        font-size: 1rem;
      }
    }
  }
}

.public-performance {
  margin-left: 10%;
  margin-top: 5%;
  width: 80%;
}

.card-news,
.card-recruit {
  width: 90%;
  // padding-left: 3%;

  & .card-font-size {
    font-size: 0.9rem;
  }
}

blockquote {
  border-left-style: solid;
  border-left-width: 0.5rem;
  padding-left: 1.5rem;
  border-color: #ffcc47;
}

.get-more-btn {
  font-size: 0.75rem;
  margin-top: 1rem;
  color: white;
  background-color: #ffcc47;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-self: center;
  border-radius: 1rem;
  border: 0;
  height: 1.5rem;
}

.animate__animated.animate__fadeInLeft .animate__animated.animate__fadeInRight {
  --animate-duration: 1.5s;
}

@media screen and (max-width: 992px) {
  .content {
    width: 80%;
    height: 90%;
    background-color: red;
    display: grid;
    grid-auto-flow: column dense;
    grid-template-rows: repeat(4, 1fr);

    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      .image {
        width: 40%;
        height: auto;
      }
    }

    .arrow {
      display: none;
    }
    .get-more-btn {
      display: block;
    }
  }
}
</style>
