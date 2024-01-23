import AboutPage from "./src/pages/AboutPage";
import HomePage from "./src/pages/HomePage";
import NotFoundPage from "./src/pages/NotFoudPage";
import "./style.css";
import Navigo from "navigo";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./node_modules/bootstrap/dist/js/bootstrap";
import handleHomePage from "./src/components/handleHomePage";
import SignIn from "./src/pages/SignIn";
import SignUp from "./src/pages/SignUp";
import handleSignIn from "./src/components/handleSignIn";
import handleSignUp from "./src/components/handleSignUp";

const router = new Navigo("/", {
  linksSelector: "a",
});

const app = document.getElementById("app");

const render = (position, content) => {
  position.innerHTML = content();
};

router.on("/", () => render(app, HomePage), {
  after() {
    handleHomePage();
  },
});
router.on("/about", () => render(app, AboutPage));
router.on("/signin", () => render(app, SignIn), {
  after() {
    handleSignIn();
  },
});
router.on("/signup", () => render(app, SignUp), {
  after() {
    handleSignUp();
  },
});
router.notFound(() => render(app, NotFoundPage));
router.resolve();
