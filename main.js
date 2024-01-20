import AboutPage from "./src/pages/AboutPage";
import HomePage from "./src/pages/HomePage";
import NotFoundPage from "./src/pages/NotFoudPage";
import "./src/styles/style.css";
import "./src/styles/product.css";
import "./src/styles/toastMessage.css";
import Navigo from "navigo";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./node_modules/bootstrap/dist/js/bootstrap";
import getProductList from "./src/components/ProductList";
import login from "./src/components/Login";
import SignUpPage from "./src/pages/SignUpPage";
import SignInPage from "./src/pages/SignInPage";
import register from "./src/components/Register";

const router = new Navigo("/", {
  linksSelector: "a",
});

const app = document.getElementById("app");

const render = (position, content) => {
  position.innerHTML = content();
};

router.on("/", () => render(app, HomePage), {
  after() {
    getProductList();
  },
});
router.on("/about", () => render(app, AboutPage));
router.on("/signup", () => render(app, SignUpPage), {
  after() {
    register();
  },
});
router.on("/login", () => render(app, SignInPage), {
  after() {
    login();
  },
});
router.notFound(() => render(app, NotFoundPage));
router.resolve();
