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
router.notFound(() => render(app, NotFoundPage));
router.resolve();
