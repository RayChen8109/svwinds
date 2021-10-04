<template>
  <div class="container">
    <div class="row">
      <blockquote>
        <h4>行政團隊</h4>
      </blockquote>
      <div class="col-10 offset-1">
        <div class="row">
          <div
            class="col-lg-3 col-sm-6"
            v-for="(item, index) in data.teamInfoData"
            :key="index"
          >
            <!-- <button class="btn btn-primary">{{ index + 1 }}</button> -->
            <a
              class="job-selector"
              :class="{ 'job-selector-active': activeBtn === 'btn' + index }"
              @click="
                selectMember(index);
                activeBtn = 'btn' + index;
              "
              id="selector-btn"
            >
              <img :src="item.image" alt="pic" />
              <div class="title">{{ item.title }}</div>
            </a>
          </div>
        </div>
      </div>
      <div class="card col-12 p-4 my-3 border-0">
        <div ref="contentRef" class="row g-0 content">
          <!-- animation-content-in -->
          <div class="col-md-3 col-12">
            <div class="row w-100">
              <div class="col-md-12 col-5">
                <img class="mb-3 w-75" :src="shownData.image" alt="" />
              </div>
              <div class="col-md-12 col-7">
                <p>{{ shownData.name }}</p>
                <div>
                  {{ shownData.title }}<br />
                  <small>{{ shownData.title_en }}</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-9 col-12 mt-md-0 mt-4" id="content">
            <p>{{ shownData.name }}{{ shownData.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { data } from "../util/data/data";
import { apiPeopleData } from "../service/api.js";

export default {
  data() {
    return {
      data: data,
      shownData: Object,
      activeBtn: "btn0",
    };
  },
  methods: {
    async packageGetData() {
      await apiPeopleData(this.data.teamInfoData.length)
        .then((res) => {
          for (let i = 0; i < this.data.teamInfoData.length; i++) {
            this.data.teamInfoData[i].name = res.data.results[i].name["first"];
            this.data.teamInfoData[i].image =
              res.data.results[i].picture["large"];
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    selectMember(index) {
      this.shownData = this.data.teamInfoData[index];
      // this.$refs.contentRef.classList.remove("animation-content-in");
      // this.$refs.contentRef.classList.add("animation-content-in");
      // console.log(this.$refs.contentRef);
    },
  },
  mounted() {
    this.packageGetData();
    this.selectMember(0);
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 5%;
  margin-bottom: 5%;

  blockquote {
    border-left-style: solid;
    border-left-width: 0.5rem;
    padding-left: 1.5rem;
    border-color: #ffcc47;
    margin-left: 8%;
    margin-bottom: 4%;
  }
}

.content {
  line-height: 2rem;
  text-align: justify;
  text-justify: distribute;
}

.animation-content-in {
  // animation-name: contentIn;
  // animation-duration: 4s;
  // animation-fill-mode: both;
  -webkit-animation: contentIn 4s ease;
  animation: contentIn 4s ease;
}

#selector-btn:visited + .animation-content-in {
  // -webkit-animation-name: none !important;
  // animation-name: none !important;
  -webkit-animation: none !important;
  animation: none !important;
}

@keyframes contentIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.job-selector {
  border: 2px solid #ffcc47;
  border-radius: 99rem;
  display: flex;
  align-items: center;
  background-color: transparent;
  text-decoration: none;
  color: #000000;
  cursor: pointer;

  img {
    border-radius: 99rem;
    height: 3rem;
    width: 3rem;
    padding-left: 0;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8rem;
  }
}

.job-selector-active {
  background-color: #ffcc47;
  color: white;
}

.job-selector:hover {
  background-color: #ffcc47;
  color: white;

  img {
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
  }
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 3%;
    padding-right: 3%;
    width: 8rem;
  }
}

.card {
  height: 50vh;
}

@media screen and (max-width: 992px) {
  .job-selector {
    width: 12rem;
    margin-top: 5%;
  }

  .card {
    height: 100%;
  }
}
</style>
