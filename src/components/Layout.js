import Footer from "./Footer";
import Header from "./Header";

const Layout = (mainContent) => {
  return `
  ${Header()}
  <div class="container">
    ${mainContent}
  </div>
  ${Footer()}
  `;
};

export default Layout;
