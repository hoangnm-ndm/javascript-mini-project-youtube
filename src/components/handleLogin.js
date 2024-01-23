import instance from "../apis";
import showToast from "../utils/toastMessage";
import { validLogin } from "../valid/auth";

const login = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const userInfor = {
    email,
    password,
  };

  if (validLogin(userInfor)) {
    instance.post("/register", userInfor).then((res) => console.log(res));
    showToast("Register successfully!", 5000, "success");
  }
};

const handleLogin = () => {
  const loginBtn = document.getElementById("loginBtn");
  loginBtn.addEventListener("click", login);
};
export default handleLogin;
