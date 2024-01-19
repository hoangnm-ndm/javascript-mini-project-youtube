import AboutPage from "./src/pages/AboutPage";
import HomePage from "./src/pages/HomePage";
import NotFoundPage from "./src/pages/NotFoudPage";
import "./style.css";
import Navigo from "navigo";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./node_modules/bootstrap/dist/js/bootstrap";

const router = new Navigo("/", {
  linksSelector: "a",
});

const app = document.getElementById("app");

const render = (position, content) => {
  position.innerHTML = content();
};

router.on("/", () => render(app, HomePage));
router.on("/about", () => render(app, AboutPage));
router.notFound(() => render(app, NotFoundPage));
router.resolve();
