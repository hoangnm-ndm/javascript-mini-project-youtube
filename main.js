import "./style.css";
import { render, router } from "./src/utils";
import HomePage from "./src/pages/HomePage";
import AboutPage from "./src/pages/AboutPage";
import DetailPage from "./src/pages/DetailPage";
import handlerProductList from "./src/components/handlerProductList";

const app = document.getElementById("app");

router.on("/", () => render(app, HomePage), {
  after() {
    handlerProductList();
  },
});
router.on("/home", () => router.navigate("/"));
router.on("/detail/:id/:code", (data) => render(app, () => DetailPage(data)));
router.on("/about", () => render(app, AboutPage));
//http:localhost:5173/about

router.resolve();
