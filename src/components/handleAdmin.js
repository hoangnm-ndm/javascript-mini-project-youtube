import instance from "../apis";
import { router } from "../utils";
import showToast from "../utils/toastMessage";

const handleAdmin = () => {
  const productList = document.querySelector("#productList");
  const addNew = document.getElementById("addNew");
  addNew.addEventListener("click", () => {
    router.navigate("/admin/add");
  });
  const handleDelete = (productId) => {
    instance
      .delete(`/products/${productId}`)
      .then((res) => {
        showToast("success", "Delete product successfully");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch(() => {
        showToast("error", "Delete product failed");
      });
  };

  const handleEdit = (productId) => {
    router.navigate(`/admin/add/${productId}`);
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
          <td><img width="100px" src="${product.thumbnail}" /></td>
          <td>${product.description}</td>
          <td>
          <button class="btn btn-warning btn-edit" data-product-id="${
            product.id
          }">Edit</button> ${" "}
        <button class="btn btn-danger btn-delete" data-product-id="${
          product.id
        }">Delete</button>
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
};

export default handleAdmin;
