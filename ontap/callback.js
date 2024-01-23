//! Là hàm gọi lại (là 1 hàm được truyền vào làm đối số của hàm khác)

function nhan(a, b) {
  return a * b;
}

function chia(a, b) {
  return a / b;
}

function cong(a, b) {
  return a + b;
}

function xuLy(a, b, myCallback) {
  return myCallback(a, b);
}

console.log(xuLy(3, 6, chia));
