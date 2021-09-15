<template>
  <div class="container-fluid p-0">
    <div class="row vh-25">
      <div class="col-3 d-flex justify-content-center align-items-center">
        <img class="logo" src="../assets/svlogo.png" alt="pic" />
      </div>
      <div class="col-4 d-flex align-items-center">
        <div class="row ms-4">
          <p>連絡電話: 0912425223</p>
          <p>連絡地址: 臺中市北區三民路三段129號</p>
          <p>E-mail: f22512530@gmail.com</p>
        </div>
      </div>
      <div class="col-5 d-flex justify-content-center align-items-center">
        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7281.166282813705!2d120.67869278567508!3d24.151273467019756!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xec4241634587bdb3!2z5Y-w5Lit56eR5oqA5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1631713866010!5m2!1szh-TW!2stw" allowfullscreen="true" loading="lazy"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
};
</script>

<style lang="scss" scoped>
.container-fluid {
  background-color: rgb(240, 240, 240);
  width: 95%;
}

.logo {
  width: 12rem;
  object-fit: contain !important;
}

.map {
  width: 90%;
  height: 90%;
}
</style>
