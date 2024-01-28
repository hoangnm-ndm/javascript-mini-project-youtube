export function validRegister(user) {
  if (!user.email || !user.password || !user.confirmPass) {
    return false;
  }
  if (user.password !== user.confirmPass) {
    return false;
  }
  return true;
}

export function validLogin(user) {
  if (!user.email || !user.password) {
    return false;
  }
  return true;
}
