<template>
  <div class="container-fluid p-0">
    <Header class="header1"></Header>
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../util/styles.scss";
.header {
  z-index: 1000;
}
</style>
