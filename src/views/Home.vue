<template>
  <!-- https://github.com/shershen08/vue-masonry?ref=madewithvuejs.com -->
  <!-- https://w3c.hexschool.com/blog/16432a4f -->
  <div class="row mt-4">
    <div class="d-flex justify-content-center">
      <div class="carousel slide pe-0" id="carousel" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            v-for="(item, index) in carouselData"
            :key="index"
            data-bs-target="#carousel"
            :data-bs-slide-to="index"
            aria-current="true"
            :aria-label="'Slide' + item.id"
            :class="{ active: index === 0 }"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item" v-for="(item, index) in carouselData" :key="index" :class="{ active: index === 0 }">
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
                <div class="col-12 border-bottom" v-for="(item, index) in newsMsgData.slice(0, 5)" :key="index">
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
                <div class="col-12 border-bottom" v-for="(item, index) in recruitMsgData.slice(0, 5)" :key="index">
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
    <div class="mt-5 fixed-image"></div>
    <div class="public-performance">
      <blockquote>
        <h4>近期演出</h4>
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselData: [
        {
          id: 0,
          image: require("../assets/20200830-204.jpg"),
        },
        {
          id: 1,
          image: require("../assets/20200830-130.jpg"),
        },
        {
          id: 2,
          image: require("../assets/20200830-345.jpg"),
        },
      ],
      newsMsgData: [
        {
          id: 0,
          date: "2021/05/17",
          title: "因疫情影響，本樂季暫停全部團練",
        },
        {
          id: 1,
          date: "2021/05/08",
          title: "「我愛媽咪小音樂會」將於興大附中文薈廳演出123123123123123123123123456",
        },
        {
          id: 2,
          date: "2021/05/02",
          title: "05/02團練公告",
        },
        {
          id: 3,
          date: "2021/04/25",
          title: "04/25團練公告",
        },
        {
          id: 4,
          date: "2021/04/11",
          title: "04/11團練公告",
        },
        {
          id: 5,
          date: "2021/02/17",
          title: "召開2020秋樂季團員大會，請團員務必出席",
        },
      ],
      recruitMsgData: [
        {
          id: 0,
          date: "2021/02/05",
          title: "2021春樂季開始招聲，歡迎志同道合的夥伴加入我們的行列",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.carousel {
  z-index: -1;
  width: 90%;
}

.carousel-inner {
  max-height: 35rem;
  width: 100%;
}
// .carousel-item img {
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// }

.fixed-image {
  background-image: url("../assets/20200830-453.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-position: 15%;
  opacity: 0.8;
  width: 100%;
  height: 70vh;
}

.public-performance {
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
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
</style>
