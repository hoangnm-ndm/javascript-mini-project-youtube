import showToast from "../utils/toastMessage";
import { validLogin } from "../valid/auth";

function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  if (!email || !password) {
    return;
  }

  var userInfor = {
    email,
    password,
  };

  if (validLogin(userInfor)) {
    var dataUsers = JSON.parse(localStorage.getItem("users"));
    if (dataUsers && dataUsers.length > 0) {
      dataUsers.some((item) => {
        if (item.email === email && item.password === password) {
          showToast("Login successfully!", 3000, "success");
          return;
        }
      });
    }
  }
}

export default login;
