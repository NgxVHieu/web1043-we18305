// Nhập vào họ tên
const fullName = prompt("Nhập vào họ và tên:");

// Nhập vào giới tính
const gender = prompt("Nhập vào giới tính của bạn (Nam/Nữ):");

// Tách chuỗi họ tên thành 3 phần: họ, tên đệm và tên riêng
const nameParts = fullName.split(" ");
const lastName = nameParts[0];
const middleName = nameParts.length > 2 ? nameParts[1] : "";
const firstName = nameParts[nameParts.length - 1];

// In ra 3 giá trị họ, tên đệm và tên riêng
console.log(`Họ: ${lastName}`);
console.log(`Tên đệm: ${middleName}`);
console.log(`Tên riêng: ${firstName}`);

// Tạo biến để lưu tên mới
let newMiddleName = "";

// Kiểm tra giới tính để đặt tên đệm mới
if (gender === "Nam") {
  newMiddleName = "Văn";
} else if (gender === "Nữ") {
  newMiddleName = "Vẽ";
}

// In ra kết quả tên mới
console.log(`Tên mới: ${lastName} ${newMiddleName} ${firstName}`);
