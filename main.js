import "./src/styles/style.css";
import "./src/styles/toast.css";
import "boxicons";
import AboutPage from "./src/pages/AboutPage";
import HomePage from "./src/pages/HomePage";
import NotFoundPage from "./src/pages/NotFoudPage";
import Navigo from "navigo";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./node_modules/bootstrap/dist/js/bootstrap";
import SignUpPage from "./src/pages/SignUpPage";
import handleRegister from "./src/components/handleRegister";
import SignInPage from "./src/pages/SignInPage";
import handleLogin from "./src/components/handleLogin";

const router = new Navigo("/", {
  linksSelector: "a",
});

const app = document.getElementById("app");

const render = (position, content) => {
  position.innerHTML = content();
};

router.on("/", () => render(app, HomePage), {
  after() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(({ products }) => {
        const productList = document.querySelector(".product-list");
        const contentHTML = products
          .map((product) => {
            return `
              <div class="product-card">
                <img src="${product.thumbnail}" />
                <div class="product-infor">
                  <h3>${product.title}</h3>
                  <p>Gía: ${product.price}</p>
                  <div>${product.description}</div>
                </div>
              </div>
              `;
          })
          .join("");

        productList.innerHTML = contentHTML;
      });
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
