import Footer from "../components/Footer";
import Header from "../components/Header";

const HomePage = () => {
  return /*html*/ `
  ${Header()}
  <div class="container mg-top-60 mg-bot-40">
    <h1>Sản phẩm bán chạy</h1>
    <div id="productList"></div>
  </div>

  ${Footer()}
  `;
};

export default HomePage;
