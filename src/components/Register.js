import showToast from "../utils/toastMessage";
import { validSignUp } from "../valid/auth";

function handleRegister(userInfor) {
  if (validSignUp(userInfor)) {
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userInfor.email,
        password: userInfor.password,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data?.user?.email) {
          alert(`Success: ${data.user.email}`);
        } else {
          alert(`Failed: ${data}`);
        }
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }
}
const register = () => {
  const btnRegister = document.getElementById("btnRegister");
  console.log(btnRegister);
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPass = document.getElementById("confirmPass").value;
  if (!email || !password || !confirmPass) {
    return;
  }
  const user = {
    email,
    password,
    confirmPass,
  };

  btnRegister.onclick = handleRegister(user);
};
export default register;
