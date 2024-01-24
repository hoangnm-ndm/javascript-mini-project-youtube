import Header from "../../components/Header";

const Dashboard = () => {
  return /*html*/ `
  ${Header()}
  <div class="container">
    <h1>Hello, Admin</h1>
    <div id="productList"></div>
  </div>
  
  `;
};

export default Dashboard;
