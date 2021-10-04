<template>
  <div class="container">
    <div class="row">
      <blockquote class="mt-4">
        <h4>演出資訊</h4>
      </blockquote>
      <div class="col-12 my-4 d-flex justify-content-center">
        <div class="d-flex justify-content-evenly w-50">
          <div
            class="year-selector-box"
            v-for="(item, index) in allYears"
            :key="index"
            @click="selectYear(item)"
          >
            <a
              class="
                year-selector
                d-flex
                justify-content-center
                align-items-center
              "
              href="javascript:;"
              :class="{ ' year-selector-active': selectorBtn === 'btn' + item }"
            >
              {{ item }}
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div class="col-12 d-flex justify-content-center">
        <div class="row">
          <div
            class="w-100 col-12"
            v-for="(item, index) in shownPerformanceInfo"
            :key="index"
          >
            <div class="row">
              <div
                class="
                  col-lg-3 col-md-4
                  d-flex
                  justify-content-center
                  align-items-center
                "
              >
                <img class="poster" :src="item.image" alt="" />
              </div>
              <div class="col-lg-9 col-md-8 mt-md-0 mt-4 mb-md-0 mb-4">
                <div class="row">
                  <div class="col-12">
                    <div class="row">
                      <div class="col-6">
                        <p class="title">
                          {{ item.title }}
                          <span
                            ><p class="sub-title">{{ item.subtitle }}</p></span
                          >
                        </p>
                      </div>
                      <div class="col-6">
                        <p class="info">
                          <span>時間 : {{ item.time }}</span
                          ><br />
                          <span>地點 : {{ item.location }}</span
                          ><br />
                          <span>指揮 : {{ item.conductor }}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <p class="content">{{ item.content }}</p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { data } from "../util/data/data";

export default {
  data() {
    return {
      data: data,
      shownPerformanceInfo: [],
      allYears: [],
      selectorBtn: "",
    };
  },
  methods: {
    selectYear(year) {
      this.selectorBtn = "btn" + year;
      this.shownPerformanceInfo = data.performanceInfo.filter(
        (x) => new Date(x.time).getFullYear() === year
      );
    },
  },
  mounted() {
    this.allYears = [];
    this.data.performanceInfo.forEach((item) => {
      this.allYears.push(new Date(item.time).getFullYear());
    });
    this.allYears = this.allYears
      .filter((v, i, a) => a.indexOf(v) === i)
      .reverse();
    let biggestYear = Math.max(...this.allYears);
    this.selectorBtn = "btn" + biggestYear;
    this.shownPerformanceInfo = data.performanceInfo.filter(
      (x) => new Date(x.time).getFullYear() === biggestYear
    );
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

.year-selector-box {
  width: 4rem;

  .year-selector {
    color: #ffcc47;
    text-decoration: none;
  }

  .year-selector-active {
    color: #fff;
    background-color: #ffcc47;
    width: 100%;
    border-radius: 1.5rem;
  }

  &:hover {
    transform: scale(1.5);
    transition: transform 0.25s ease;
  }
}

.poster {
  max-width: 14rem;
}

.title {
  font-size: 1.5rem;
}

.sub-title {
  font-style: italic;
  color: #949494;
  font-size: 1rem;
  white-space: pre-line;
}

.content {
  white-space: pre-line;
}

.info {
  font-size: 0.9rem;
}
</style>
