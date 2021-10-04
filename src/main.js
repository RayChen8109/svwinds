import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Header from "../src/components/Header.vue";
import Footer from "../src/components/Footer.vue";
import DataTable from "../src/components/DataTable.vue";
import TableContent from "./components/TableContent.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

let app = createApp(App);
app.use(store);
app.use(router);
app.component("Header", Header);
app.component("Footer", Footer);
app.component("DataTable", DataTable);
app.component("TableContent", TableContent), app.mount("#app");
