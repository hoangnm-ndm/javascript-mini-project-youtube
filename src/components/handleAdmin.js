import instance from "../apis";

const handleAdmin = () => {
  const productList = document.querySelector("#productList");

  const handleDelete = (productId) => {
    // Call your API to delete the product
    console.log(`Deleting product with ID: ${productId}`);
    // After deletion, refresh the admin panel
    // handleAdmin();
  };

  // Function to handle product editing
  const handleEdit = (productId) => {
    // Implement your edit logic here
    console.log(`Editing product with ID: ${productId}`);
  };

  productList.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("btn-edit")) {
      const productId = target.dataset.productId;
      handleEdit(productId);
    }

    if (target.classList.contains("btn-delete")) {
      const productId = target.dataset.productId;
      handleDelete(productId);
    }
  });

  instance.get("/products").then(({ data }) => {
    console.log(data);
    const html = data
      .map((product) => {
        return `
        <tr>
          <td>${product.id}</td>
          <td>${product.title}</td>
          <td>${product.price}</td>
          <td>${product.thumbnail}</td>
          <td>${product.description}</td>
          <td>
          <button class="btn btn-warning btn-edit" data-product-id="${product.id}">Edit</button>
        <button class="btn btn-danger btn-delete" data-product-id="${product.id}">Delete</button>
          </td>
        </tr>
        `;
      })
      .join("");

    productList.innerHTML = /*html*/ `
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Image</th>
          <th scope="col">Description</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        ${html}
      </tbody>
    </table>
    
    `;
  });

  const hello = document.getElementById("hello");
  console.log(hello);
};

export default handleAdmin;
