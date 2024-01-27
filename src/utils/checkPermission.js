import { router } from ".";

export const checkAdmin = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (user?.user?.role === "admin") {
    return true;
  } else {
    return false;
  }
};
