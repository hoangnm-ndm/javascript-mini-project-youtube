import Header from "../components/Header";

const HomePage = () => {
  return /*html*/ `
  ${Header()}
  <div class="container">
    <h1>Sản phẩm bán chạy</h1>
    <div id="productList">
    </div>
  </div>
  `;
};

export default HomePage;
