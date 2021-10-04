<template>
  <div class="container">
    <div class="row">
      <blockquote class="mt-4">
        <h4>最新消息</h4>
      </blockquote>
      <DataTable
        :parentData="newsData"
        v-if="this.$route.query.id === undefined"
      ></DataTable>
      <TableContent v-else></TableContent>
    </div>
  </div>
</template>

<script>
import { data } from "../util/data/data";
export default {
  data() {
    return {
      newsData: data.newsMsgData,
    };
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
</style>
