import instance from "../apis";

const handleProductList = () => {
  const productList = document.getElementById("productList");
  callAPI(productList);
};

function callAPI(nodeElement) {
  instance.get("/products").then(({ data }) => {
    console.log(data);
    const contentHTML = data
      .map(
        (item) => `
          <div class="product-card">
            <img src="${item.thumbnail}" alt="${item.title}" />
            <div class="product-infor">
              <h2>${item.title}</h2>
              <div>Giá: ${item.price}</div>
              <p>Mô tả: ${item.description}</p>
              <button class="btn btn-warning" id="addCart">Thêm vào giỏ</button>
              <a class="btn btn-primary" href="detail/${item.id}">Xem chi tiết</a>
            </div>
          </div>
          `
      )
      .join("");

    nodeElement.innerHTML = contentHTML;
  });
}

export default handleProductList;
