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
    const productList = document.getElementById("productList");
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(({ products }) => {
        const contentHTML = products
          .map((item) => {
            return /*html*/ `
            <div class="product-card">
              <img src="${item.thumbnail}" alt="${item.title}"/>
              <div class="product-infor">
                <h3>${item.title}</h3>
                <p>Giá: ${item.price}</p>
                <div>Mô tả: ${item.description}</div>
                <a class="btn btn-primary" href="products/${item.id}">Xem chi tiết</a>
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
