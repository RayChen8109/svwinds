<template>
  <div class="container mt-4">
    <!-- on desktop -->
    <div class="row d-md-block d-none">
      <div class="row">
        <div class="col-lg-4 offset-lg-4 col-md-6 offset-md-3 d-flex justify-content-center">
          <img class="w-50 h-100" src="../assets/svlogo.png" alt="logo" />
        </div>
        <div class="offset-lg-0 offset-md-4 col-md-4 d-flex justify-content-lg-end justify-content-md-center align-items-center">
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link bi bi-instagram" href="https://www.instagram.com/svwinds/"></a>
            </li>
            <li class="nav-item">
              <a class="nav-link bi bi-facebook" href="https://www.facebook.com/SVWINDS"></a>
            </li>
            <li class="nav-item">
              <a class="nav-link bi bi-youtube" href="https://www.youtube.com/channel/UC_XA3xjKpm9a61XSlKZe8xw"></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-12">
        <div class="row mt-4">
          <div class="col-lg-6 col-md-12 offset-lg-3">
            <ul class="nav d-flex justify-content-around">
              <li class="nav-item">
                <router-link class="nav-link link-underscore active" :to="'/' + appPath.home">首頁</router-link>
              </li>
              <li class="nav-item">
                <!-- <router-link class="nav-link link-underscore" :to="'/' + appPath.introduceband">關於樂團</router-link> -->
                <div class="nav-link my-dropdown link-underscore active">
                  <span>關於樂團</span>
                  <div class="my-dropdown-content">
                    <router-link class="text-decoration-none text-reset fs-6 my-dropdown-content-link d-block py-2 ps-2" :to="'/' + appPath.introduceband">樂團簡介</router-link>
                    <router-link class="text-decoration-none text-reset fs-6 my-dropdown-content-link d-block py-2 ps-2" :to="'/' + appPath.introduceteam">行政團隊</router-link>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <router-link class="nav-link link-underscore" :to="'/' + appPath.performanceinfo">演出資訊</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link link-underscore" :to="'/' + appPath.news">最新消息</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link link-underscore" :to="'/' + appPath.recruit">招聲資訊</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- on mobile -->

  <div class="row d-flex d-md-none">
    <div class="col-2 col-sm-3">
      <button class="border border-0 bg-transparent ms-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#slidecanvas" aria-controls="slidecanvas">
        <i class="bi bi-list fs-1"></i>
      </button>
    </div>
    <div class="col-8 col-sm-6 d-flex justify-content-center">
      <img class="w-50 h-100" src="../assets/svlogo.png" alt="logo" />
    </div>

    <div class="offcanvas offcanvas-start px-0 w-50" tabindex="-1" id="slidecanvas" aria-labelledby="slidecanvaslabel">
      <div class="offcanvas-body">
        <div class="row mx-1 d-flex align-items-start flex-column h-100">
          <div class="col-12">
            <div class="row border-bottom py-3">
              <router-link class="text-decoration-none text-reset fs-5" :to="'/' + appPath.home">首頁</router-link>
            </div>
          </div>
          <div class="col-12">
            <div class="row border-bottom py-3" @click="isOpen = !isOpen">
              <div class="col-9 d-flex align-items-center">
                <div class="fs-5">關於樂團</div>
              </div>
              <div class="col-3" :class="[isOpen ? 'rotate-open' : 'rotate-close']">
                <i class="bi bi-chevron-down"></i>
              </div>
            </div>
          </div>
          <div class="col-12 collaspe" :class="[isOpen ? 'collaspe-open' : 'collaspe-close']">
            <button class="w-100 border-0 bg-transparent my-2 d-flex justify-content-center align-items-center" type="button">
              <router-link class="text-decoration-none text-reset fs-6 my-1" :to="'/' + appPath.introduceband">樂團簡介</router-link>
            </button>
            <button class="w-100 border-0 bg-transparent my-2 d-flex justify-content-center align-items-center" type="button">
              <router-link class="text-decoration-none text-reset fs-6 my-1" :to="'/' + appPath.introduceteam">行政團隊</router-link>
            </button>
          </div>
          <div class="col-12">
            <div class="row border-bottom py-3">
              <router-link class="text-decoration-none text-reset fs-5" :to="'/' + appPath.performanceinfo">演出資訊</router-link>
            </div>
          </div>
          <div class="col-12">
            <div class="row border-bottom py-3">
              <router-link class="text-decoration-none text-reset fs-5" :to="'/' + appPath.news">最新消息</router-link>
            </div>
          </div>
          <div class="col-12">
            <div class="row border-bottom py-3">
              <router-link class="text-decoration-none text-reset fs-5" :to="'/' + appPath.recruit">招聲訊息</router-link>
            </div>
          </div>
          <div class="border-bottom py-3">
            <a class="fs-5 text-reset text-decoration-none" href="https://www.instagram.com/svwinds/">Instagram</a>
          </div>
          <div class="border-bottom py-3">
            <a class="fs-5 text-reset text-decoration-none" href="https://www.facebook.com/SVWINDS">Facebook</a>
          </div>
          <div class="border-bottom py-3">
            <a class="fs-5 text-reset text-decoration-none" href="https://www.youtube.com/channel/UC_XA3xjKpm9a61XSlKZe8xw">Youtube</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { appPath } from "../app-path.const";
export default {
  data() {
    return {
      isOpen: false,
      appPath: appPath,
    };
  },
};
</script>

<style lang="scss" scoped>
$stretchHeight: 6rem;

.my-dropdown {
  position: relative;
  display: inline-block;
  overflow: visible;
  z-index: 10;
}

.my-dropdown-content {
  margin-top: 12%;
  border: 1px rgb(238, 238, 238) solid;
  position: absolute;
  background-color: rgb(245, 245, 245);
  min-width: 10rem;
  transform: scaleY(0) translateX(-30%);
  transform-origin: top;
  transition: transform 0.2s ease;
}

.my-dropdown:hover .my-dropdown-content {
  transform: scaleY(1) translateX(-30%);
}

.my-dropdown-content-link:hover {
  background-color: #ffcc47;
  color: white;
}

.bi {
  font-size: 1.2rem;
}

.nav-link,
.nav-link:link,
.nav-link:visited {
  text-decoration: none;
  color: black;
  transition: transform 0.25s ease-out;
  transform-origin: center;
  transform: scale(1);
}

.nav-link:hover {
  text-decoration: none;
  color: black;

  &.bi-facebook {
    color: #2d609b;
    transform: scale(1.2);
  }

  &.bi-youtube:hover {
    color: red;
    transform: scale(1.2);
  }

  &.bi-instagram:hover {
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%);
    -webkit-background-clip: text;
    /* Also define standard property for compatibility */
    background-clip: text;
    -webkit-text-fill-color: transparent;
    transform: scale(1.2);
  }
}

.link-underscore {
  display: inline-block;
  position: relative;
}

.link-underscore::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 0.15rem;
  bottom: 0;
  left: 0;
  background-color: #ffcc47;
  transform-origin: center;
  transition: transform 0.25s ease-out;
}

.link-underscore:hover::after {
  content: '';
  transform: scaleX(1);
  transform-origin: center;
}

.link-underscore::after .active {
  content: '';
  transform: scaleX(1);
  transform-origin: center;
}

.collaspe-open {
  background-color: #f8f8f8;
  overflow: hidden;
  animation-name: stretchHeight-open;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

@keyframes stretchHeight-open {
  from {
    height: 0rem;
  }
  to {
    height: $stretchHeight;
  }
}

.collaspe-close {
  background-color: #f8f8f8;
  overflow: hidden;
  animation-name: stretchHeight-close;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

@keyframes stretchHeight-close {
  from {
    height: $stretchHeight;
  }
  to {
    height: 0rem;
  }
}

.rotate-open {
  animation-name: rotate-180;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

@keyframes rotate-180 {
  from {
    transform: rotateX(0deg);
  }
  to {
    transform: rotateX(180deg);
  }
}

.rotate-close {
  animation-name: rotate-0;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

@keyframes rotate-0 {
  from {
    transform: rotateX(180deg);
  }
  to {
    transform: rotateX(0deg);
  }
}
</style>
