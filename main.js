import AboutPage from "./src/pages/AboutPage";
import HomePage from "./src/pages/HomePage";
import NotFoundPage from "./src/pages/NotFoudPage";
import "./style.css";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./node_modules/bootstrap/dist/js/bootstrap";
import handleProductList from "./src/handles/handleProductList";
import RegisterPage from "./src/pages/RegisterPage";
import handleRegister from "./src/handles/handleRegister";
import { render, router } from "./src/utils";
import LoginPage from "./src/pages/LoginPage";
import handleLogin from "./src/handles/handleLogin";
const app = document.getElementById("app");

router.on("/", () => render(app, HomePage), {
  after() {
    handleProductList();
  },
});
router.on("/home", () => router.navigate("/"));
router.on("/about", () => render(app, AboutPage));
router.on("/register", () => render(app, RegisterPage), {
  after() {
    handleRegister();
  },
});

router.on("/login", () => render(app, LoginPage), {
  after() {
    handleLogin();
  },
});
router.notFound(() => render(app, NotFoundPage));
router.resolve();
