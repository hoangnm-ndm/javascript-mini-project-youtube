import instance from "../apis";
import { router } from "../utils";
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
    instance
      .post("/register", userInfor)
      .then(({ data }) => {
        showToast(`Register successfully, ${data.user.email}`, 5000, "success");
        setTimeout(() => {
          const confirmValue = confirm(
            "Do you want to redirect to loging now?"
          );
          if (confirmValue) {
            router.navigate("/login");
          }
        }, 3000);
      })
      .catch(({ response }) => {
        console.log(response);
        showToast(response.data, 5000, "warning");
      });
  }
};

const handleRegister = () => {
  const registerBtn = document.getElementById("registerBtn");
  registerBtn.addEventListener("click", register);
};
export default handleRegister;
