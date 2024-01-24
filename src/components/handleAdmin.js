import instance from "../apis";

const handleAdmin = () => {
  const productList = document.querySelector("#productList");
  instance.get("/products").then(({ data }) => {
    console.log(data);
    const html = data
      .map((product) => {
        return `
        <tr>
          <td>${product.id}</td>
          <td>${product.name}</td>
          <td>${product.price}</td>
          <td>${product.thumbnail}</td>
          <td>${product.description}</td>
          <td>
            <button class="btn btn-warning">Edit</button>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>
        `;
      })
      .join("");

    productList.innerHTML = html;
  });
};

export default handleAdmin;
