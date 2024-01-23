const handlerProductList = () => {
  const productList = document.getElementById("productList");
  callAPI(productList);
};

function callAPI(nodeElement) {
  fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((data) => {
      const contentHTML = data
        .map(
          (item) => `
          <div class="product-card">
            <img src="${item.thumbnail}" alt="${item.title}" />
            <div class="product-infor">
              <h2>${item.title}</h2>
              <div>Giá: ${item.price}</div>
              <p>Mô tả: ${item.description}</p>
            </div>
          </div>
          `
        )
        .join("");

      nodeElement.innerHTML = contentHTML;
    });
}

export default handlerProductList;
