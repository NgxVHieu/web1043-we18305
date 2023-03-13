let a = parseFloat(prompt("Nhập cạnh a: "));
let b = parseFloat(prompt("Nhập cạnh b: "));
let c = parseFloat(prompt("Nhập cạnh c: "));

if (a + b > c && b + c > a && a + c > b) {
  if (a**2 + b**2 === c**2 || a**2 + c**2 === b**2 || b**2 + c**2 === a**2) {
    console.log("Tam giác vuông");
    if (a === b || b === c || a === c) {
      console.log("Tam giác vuông cân");
    } else {
      console.log("Tam giác vuông thường");
    }
  } else if (a === b && b === c) {
    console.log("Tam giác đều");
  } else if (a === b || b === c || a === c) {
    console.log("Tam giác cân");
  } else {
    console.log("Tam giác thường");
  }
} else {
  console.log("Đây không phải là 3 cạnh của một tam giác");
}