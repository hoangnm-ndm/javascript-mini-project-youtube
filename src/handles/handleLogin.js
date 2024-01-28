import api from "../apis";
import { router } from "../utils";
import { validLogin } from "../validations/auth";

const handleLogin = () => {
  const loginBtn = document.querySelector("#loginBtn");
  console.log(loginBtn);
  loginBtn.addEventListener("click", login);
};

async function login() {
  try {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const user = {
      email,
      password,
    };

    if (validLogin(user)) {
      const { data } = await api.post("/login", user);
      if (data) {
        sessionStorage.setItem("user", JSON.stringify(data));
        const confirmValue = confirm(
          `Đăng nhập thành công, bạn có muốn chuyển sang trang mua sắm không?, ${data.user.email}`
        );
        if (confirmValue) {
          router.navigate("/");
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export default handleLogin;
