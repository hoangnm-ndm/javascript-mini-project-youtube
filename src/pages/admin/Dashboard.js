import Header from "../../components/Header";

const Dashboard = () => {
  return /*html*/ `
  ${Header()}
  <div class="container">
    <h1>Hello, Admin</h1>
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
        <tr>
          <th scope="row">1</th>
          <td>San pham 1</td>
          <td>200</td>
          <td>Chua cap nhat</td>
          <td>mo ta san pham</td>
          <td>
            <button class="btn btn-primary">Edit</button>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  
  `;
};

export default Dashboard;
