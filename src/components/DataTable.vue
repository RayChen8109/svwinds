<template>
  <div class="row">
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th class="w-75" scope="col">
              <div class="d-flex justify-content-center">標題</div>
            </th>
            <th class="w-25" scope="col">
              <div class="d-flex justify-content-center">日期</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="table-content"
            v-for="(item, index) in parentData.slice(
              pageStart,
              pageStart + offset
            )"
            :key="index"
            @click="intoContent(item)"
          >
            <td>
              <div class="my-2">
                {{ item.title }}
              </div>
            </td>
            <td>
              <div class="d-flex justify-content-center my-2">
                {{ item.date }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="d-flex justify-content-center mt-3">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li
            class="page-item mx-2"
            :class="['page-item', { disabled: currentPage === 1 }]"
            @click.prevent="setPage(currentPage - 1)"
          >
            <a class="page-link page-arrow" href="#" aria-label="Previous">
              <i class="bi bi-chevron-left"></i>
            </a>
          </li>
          <li
            class="page-item mx-2"
            v-for="(item, index) in totalPage"
            :key="index"
            :class="['page-item', { active: currentPage === item }]"
            @click.prevent="setPage(item)"
          >
            <a class="page-link" href="javascript:;">{{ item }}</a>
          </li>
          <li
            class="page-item mx-2"
            :class="['page-item', { disabled: currentPage === totalPage }]"
            @click.prevent="setPage(currentPage + 1)"
          >
            <a class="page-link page-arrow" href="#" aria-label="Next">
              <i class="bi bi-chevron-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { appPath } from "../app-path.const";
export default {
  props: {
    parentData: {
      type: Array,
    },
  },
  data() {
    return {
      currentPage: 1,
      offset: 10,
    };
  },
  methods: {
    setPage(idx) {
      if (idx <= 0 || idx > this.totalPage) {
        return;
      }
      this.currentPage = idx;
    },
    intoContent(item) {
      if (this.$route.path.includes("recruit")) {
        this.$router.push({ path: appPath.recruit, query: { id: item.id } });
      } else {
        this.$router.push({ path: appPath.news, query: { id: item.id } });
      }
      // this.$router.push({ name: "newscontent", params: { id: idx } });
    },
  },
  computed: {
    pageStart() {
      return (this.currentPage - 1) * this.offset;
    },
    totalPage() {
      return Math.ceil(this.parentData.length / this.offset);
    },
  },
};
</script>

<style lang="scss" scoped>
.page-arrow {
  border: 0;
}

.pagination > .page-item > .page-link,
.pagination > .page-item > .page-link > i {
  border-radius: 100%;
  border-width: 0;
  color: #000;
  max-width: 2.5rem;
  max-height: 2.5rem;
}

.page-item.active .page-link {
  background-color: #ffcc47;
  border-radius: 100%;
  color: #fff;
}

.page-link:focus {
  box-shadow: none;
}

.page-item:disabled > .page-link > .bi {
  color: gray;
}

// .page-item>.page-link,
// .page-item>.page-link>i {
//     border-radius: 50%;
//     border-color: #FFCC47;
//     color: #FFCC47;
//     max-width: 2.5rem;
//     max-height: 2.5rem;
// }

.table-content:hover {
  color: #eba800;
  background-color: rgb(240, 240, 240);
  cursor: pointer;
}
</style>
