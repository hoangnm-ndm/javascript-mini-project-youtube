import Header from "../components/Header";

const NotFoundPage = () => {
  return /*html*/ `
  ${Header()}

  <div class="container">
  <h1>Không tìm thấy đường dẫn</h1>
  <a href="/">Quay lại trang chủ</a>
  </div>
  `;
};
export default NotFoundPage;
