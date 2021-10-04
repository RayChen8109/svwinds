<template>
  <div class="row">
    <div class="col-12">
      <h3>{{ shownMsg.title }}</h3>
      <p class="date">{{ shownMsg.date }}</p>
    </div>
    <hr />
    <div class="col-12">
      <p class="content">{{ shownMsg.content }}</p>
    </div>
    <div class="col-12">
      <div class="row">
        <div class="col img-panel" v-for="(path, index) in shownMsg.image" :key="index" data-bs-toggle="modal" data-bs-target="#imageModal" @click="image_zoomin(path)">
          <img class="content-img" :src="path" alt="" />
          <div class="middle">
            <i class="bi bi-search"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-center mt-5">
    <div class="back-to-list d-flex justify-content-center align-items-center" type="button" @click="$router.go(-1)">回上一頁</div>
  </div>
  <div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img class="modal-img" :src="zoomInImgPath" alt="" />
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
      zoomInImgPath: "",
    };
  },
  methods: {
    image_zoomin(path) {
      this.zoomInImgPath = "";
      this.zoomInImgPath = path;
    },
  },
  computed: {
    shownMsg() {
      if (this.$route.path.includes("recruit")) {
        return data.recruitMsgData.find((x) => x.id == this.$route.query.id);
      } else {
        return data.newsMsgData.find((x) => x.id == this.$route.query.id);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.date {
  font-size: 0.85rem;
  color: rgb(145, 145, 145);
}

.content {
  white-space: pre-line;
}

.img-panel {
  position: relative;
  cursor: pointer;
  max-width: 20rem;

  .content-img {
    width: 100%;
    opacity: 1;
    transition: 0.5s ease;
  }

  .middle {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 2rem;
  }
}

.img-panel:hover .content-img {
  opacity: 0.3;
}

.img-panel:hover .middle {
  opacity: 1;
}

.modal-img {
  width: 100%;
}

.back-to-list {
  width: 8rem;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: #ffcc47;
  color: #fff;
}
</style>
