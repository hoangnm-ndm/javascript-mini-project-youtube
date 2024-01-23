import instance from "../apis";
import showToast from "../utils/toastMessage";
import { validSignUp } from "../valid/auth";

const register = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPass = document.getElementById("confirmPass").value;
  const userInfor = {
    email,
    password,
  };

  if (validSignUp({ ...userInfor, confirmPass })) {
    instance.post("/register", userInfor).then((res) => console.log(res));
    showToast("Register successfully!", 5000, "success");
  }
};

const handleRegister = () => {
  const registerBtn = document.getElementById("registerBtn");
  registerBtn.addEventListener("click", register);
};
export default handleRegister;
