let a = prompt("Nhập giá trị a: ");
let b = prompt("Nhập giá trị b: ");
let c = prompt("Nhập giá trị c: ");

let delta = b * b - 4 * a * c;

if (delta < 0) {
  console.log("Phương trình vô nghiệm.");
} else if (delta === 0) {
  let x = -b / (2 * a);
  console.log("Phương trình có nghiệm kép x =", x);
} else {
  let x1 = (-b + Math.sqrt(delta)) / (2 * a);
  let x2 = (-b - Math.sqrt(delta)) / (2 * a);
  console.log("Phương trình có 2 nghiệm phân biệt:");
  console.log("x1 =", x1);
  console.log("x2 =", x2);
}





