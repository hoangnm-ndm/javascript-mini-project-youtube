import instance from "../apis";

const handleProductDetail = (data) => {
  const id = data.id;
  console.log(id);
  const productDetail = document.getElementById("productDetail");
  if (id) {
    instance
      .get(`/products/${id}`)
      .then(({ data }) => {
        console.log(data);
        productDetail.innerHTML = /*html*/ `
          <div class="row">
            <div class="col-6">
              <img src="${data.thumbnail}" alt="${data.title}" />
            </div>
            <div class="col-6">
              <div class="product-infor">
                <h1>${data.title}</h1>
                <div>Giá: ${data.price}</div>
                <p>Sẵn hàng: ${data.stock}</p>
                <p>Đánh giá: ${data.rating}</p>
                <p>Mô tả: ${data.description}</p>
                <button id="addCart" class="btn btn-warning">Thêm vào giỏ hàng</button>
              </div>
            </div>
          </div>
        `;
      })
      .catch(() => {
        productDetail.innerHTML = /*html*/ `
          <h2>Sản phẩm không tồn tại</h2>
          <a href="/">Quay lại trang chủ</a>
        `;
      });
  }
};

export default handleProductDetail;
