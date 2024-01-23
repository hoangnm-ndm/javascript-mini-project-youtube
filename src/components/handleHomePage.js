const handleHomePage = () => {
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
};

export default handleHomePage;
