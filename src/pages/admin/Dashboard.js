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
      <tbody id="productList">
        
      </tbody>
    </table>
  </div>
  
  `;
};

export default Dashboard;
