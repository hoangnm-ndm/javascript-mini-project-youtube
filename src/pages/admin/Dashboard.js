import Header from "../../components/Header";

const Dashboard = () => {
  return /*html*/ `
  ${Header()}
  <div class="container">
    <h1>Hello, Admin</h1>
    <button class="btn btn-primary" id="addNew">Add new</button>
    <div id="productList"></div>
  </div>
  
  `;
};

export default Dashboard;
