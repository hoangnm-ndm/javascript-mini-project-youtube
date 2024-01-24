import "./src/styles/style.css";
import "./src/styles/toast.css";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./node_modules/bootstrap/dist/js/bootstrap";
import AboutPage from "./src/pages/AboutPage";
import HomePage from "./src/pages/HomePage";
import NotFoundPage from "./src/pages/NotFoudPage";
import SignUpPage from "./src/pages/SignUpPage";
import handleRegister from "./src/components/handleRegister";
import SignInPage from "./src/pages/SignInPage";
import handleLogin from "./src/components/handleLogin";
import ProductList from "./src/components/ProductList";
import { render, router } from "./src/utils";
import Dashboard from "./src/pages/admin/Dashboard";
const app = document.getElementById("app");

const role = JSON.parse(sessionStorage.getItem("user"))?.user?.role;
console.log(role);

if (role === "admin") {
  router.on("/admin", () => render(app, Dashboard), {
    after() {
      // handleAdmin();
    },
  });
  router.notFound(() => render(app, NotFoundPage));
  router.resolve();
} else {
  router.on("/", () => render(app, HomePage), {
    after() {
      ProductList();
    },
  });
  router.on("/about", () => render(app, AboutPage));
  router.on("/register", () => render(app, SignUpPage), {
    after() {
      handleRegister();
    },
  });
  router.on("/login", () => render(app, SignInPage), {
    after() {
      handleLogin();
    },
  });
  router.notFound(() => render(app, NotFoundPage));
  router.resolve();
}
