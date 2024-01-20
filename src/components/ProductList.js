const getProductList = () => {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then(({ products }) => {
      const productList = document.querySelector(".product-list");
      const contentHTML = products
        .map((product) => {
          return `
              <div class="product-card">
                <img src="${product.thumbnail}" />
                <div class="product-infor">
                  <h3>${product.title}</h3>
                  <p>Gía: ${product.price}</p>
                  <div>${product.description}</div>
                </div>
              </div>
              `;
        })
        .join("");

      productList.innerHTML = contentHTML;
    });
};

export default getProductList;
