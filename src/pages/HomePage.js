import Footer from "../components/Footer";
import Header from "../components/Header";

const HomePage = () => {
  return /*html*/ `
  ${Header()}
  <div class="container">
  <h1>HomePage</h1>
  </div>

  ${Footer()}
  `;
};

export default HomePage;
