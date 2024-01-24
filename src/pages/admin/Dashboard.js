import Header from "../../components/Header";

const Dashboard = () => {
  return /*html*/ `
  ${Header()}
  <div class="container">
    <h1>Hello, Admin</h1>
    <a href="/admin/add-new" class="btn btn-primary">Add new</a>
    <div id="productList"></div>
  </div>
  
  `;
};

export default Dashboard;
