// Khởi tạo mảng ban đầu
let arr = ["Tue", "Thu", "Sat", "Nine"];

// Thêm các phần tử mới
arr.unshift("Mon");    // Thêm "Mon" vào đầu mảng
arr.splice(2, 0, "Wed"); // Thêm "Wed" vào vị trí thứ 2
arr.splice(5, 0, "Fri"); // Thêm "Fri" vào vị trí thứ 5
arr.push("Sun");        // Thêm "Sun" vào cuối mảng

// Xóa phần tử "Nine"
arr.splice(arr.indexOf("Nine"), 1);

// Sắp xếp lại mảng theo thứ tự đúng
arr.sort(function(a, b) {
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return days.indexOf(a) - days.indexOf(b);
});
