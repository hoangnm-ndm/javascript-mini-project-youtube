import instance from "../apis";
import { router } from "../utils";
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
    instance
      .post("/login", userInfor)
      .then(({ data }) => {
        sessionStorage.setItem("user", JSON.stringify(data));
        showToast(`Login successfully, ${data.user.email}`, 5000, "success");
        setTimeout(() => {
          const confirmValue = confirm("Do you want to redirect to home page?");
          if (confirmValue) {
            router.navigate("/");
          }
        }, 3000);
      })
      .catch(({ response }) => {
        showToast(response.data, 5000, "warning");
      });
  }
};

const handleLogin = () => {
  const loginBtn = document.getElementById("loginBtn");
  loginBtn.addEventListener("click", login);
};
export default handleLogin;
