import api from "../apis";

const handleProductList = async () => {
  const productList = document.getElementById("productList");
  try {
    const { data } = await api.get("/products");
    console.log(data);

    const contentHTML = data
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
  } catch (error) {
    console.log(error);
  }
};

export default handleProductList;
