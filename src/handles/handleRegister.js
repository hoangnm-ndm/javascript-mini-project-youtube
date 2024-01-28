import api from "../apis";
import { router } from "../utils";
import { validRegister } from "../validations/auth";

const handleRegister = () => {
  const registerBtn = document.querySelector("#registerBtn");
  registerBtn.addEventListener("click", register);
};

async function register() {
  try {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirmPass = document.querySelector("#confirmPass").value;

    const user = {
      email,
      password,
    };

    if (validRegister({ ...user, confirmPass })) {
      const { data } = await api.post("/register", {
        ...user,
        role: "member",
        address: "",
        phoneNumber: "",
      });

      // spread operator !== rest parameter
      if (data) {
        const confirmValue = confirm(
          `Đăng ký thành công, bạn có muốn đăng nhập ngay không?, ${data.user.email}`
        );
        if (confirmValue) {
          router.navigate("/login");
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export default handleRegister;
