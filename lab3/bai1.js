console.log("1. Tính điểm trung bình");
console.log("2. Tính điểm trung bình");
console.log("0. Thoát");
function tinhDiemTrungBinh(diemToan, diemLy, diemHoa, diemSinh) {
    if (diemToan < 0 || diemToan > 10 || diemLy < 0 || diemLy > 10 || diemHoa < 0 || diemHoa > 10 || diemSinh < 0 || diemSinh > 10) {
      return "Điểm nhập vào không hợp lệ!";
    }
    var diemTrungBinh = (diemToan + diemLy + diemHoa + diemSinh) / 4;
    if (diemTrungBinh >= 9 && diemTrungBinh <= 10) {
      return "Giỏi";
    } else if (diemTrungBinh >= 7 && diemTrungBinh < 9) {
      return "Khá";
    } else if (diemTrungBinh >= 5 && diemTrungBinh < 7) {
      return "Trung bình";
    } else if (diemTrungBinh < 5) {
      return "Yếu";
    }
  }
  
  function tinhDiemTrungBinhSwitch(diemToan, diemLy, diemHoa, diemSinh) {
    if (diemToan < 0 || diemToan > 10 || diemLy < 0 || diemLy > 10 || diemHoa < 0 || diemHoa > 10 || diemSinh < 0 || diemSinh > 10) {
      return "Điểm nhập vào không hợp lệ!";
    }
    var diemTrungBinh = (diemToan + diemLy + diemHoa + diemSinh) / 4;
    switch (true) {
      case diemTrungBinh >= 9 && diemTrungBinh <= 10:
        return "Giỏi";
      case diemTrungBinh >= 7 && diemTrungBinh < 9:
        return "Khá";
      case diemTrungBinh >= 5 && diemTrungBinh < 7:
        return "Trung bình";
      case diemTrungBinh < 5:
        return "Yếu";
    }
  }
  
  console.log("1. Tính điểm trung bình");
  console.log("2. Tính điểm trung bình");
  console.log("0. Thoát");
  
  var diemToan = parseFloat(prompt("Nhập điểm Toán:"));
  var diemLy = parseFloat(prompt("Nhập điểm Lý:"));
  var diemHoa = parseFloat(prompt("Nhập điểm Hóa:"));
  var diemSinh = parseFloat(prompt("Nhập điểm Sinh:"));
  
  var luaChon = parseInt(prompt("Nhập lựa chọn của bạn:"));
  
  switch (luaChon) {
    case 1:
      document.write("Điểm trung bình của bạn là: " + tinhDiemTrungBinhSwitch(diemToan, diemLy, diemHoa, diemSinh));
      break;
    case 2:
      document.write("Điểm trung bình của bạn là: " + tinhDiemTrungBinh(diemToan, diemLy, diemHoa, diemSinh));
      break;
    case 0:
      document.write("Cảm ơn bạn đã sử dụng chương trình!");
      break;
    default:
      document.write("Lựa chọn không hợp lệ!");
      break;
  }