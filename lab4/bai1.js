// Khai báo class Student
class Student {
    constructor(id, first_name, last_name, class_id, email, phone_number, dob) {
      this.id = id;
      this.first_name = first_name;
      this.last_name = last_name;
      this.class_id = class_id;
      this.email = email;
      this.phone_number = phone_number;
      this.dob = dob;
    }
  
    // Phương thức lấy tên đầy đủ
    getFullName() {
      return `${this.last_name} ${this.first_name}`;
    }
  
    // Phương thức tính số tuổi hiện tại theo năm
    getAgeByYear() {
      const dob = new Date(this.dob);
      const now = new Date();
      const age = now.getFullYear() - dob.getFullYear();
      if (
        now.getMonth() < dob.getMonth() ||
        (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate())
      ) {
        return age - 1;
      }
      return age;
    }
  
    // Phương thức tính số tuổi hiện tại theo ngày
    getAgeByDay() {
      const dob = new Date(this.dob);
      const now = new Date();
      const diff = now.getTime() - dob.getTime();
      const age = Math.floor(diff / (1000 * 3600 * 24));
      return age;
    }
  }
  
  // Tạo danh sách sinh viên
  const students = [
    new Student(1, "Nguyen", "Van A", "A01", "vana@gmail.com", "0123456789", "2000-01-01"),
    new Student(2, "Tran", "Thi B", "A01", "thib@gmail.com", "0123456789", "2000-02-02"),
    new Student(3, "Le", "Van C", "A02", "vanc@gmail.com", "0123456789", "2001-03-03"),
    new Student(4, "Pham", "Thi D", "A02", "thid@gmail.com", "0123456789", "2001-04-04"),
    new Student(5, "Hoang", "Van E", "A03", "vane@gmail.com", "0123456789", "2002-05-05"),
  ];
  
  // Sắp xếp danh sách sinh viên theo tuổi từ thấp đến cao
  students.sort((a, b) => a.getAgeByDay() - b.getAgeByDay());
  
  // In ra danh sách sinh viên đã sắp xếp
  console.log("Danh sách sinh viên theo thứ tự tuổi từ thấp đến cao:");
  students.forEach((student) =>
    console.log(`${student.getFullName()} - Tuổi: ${student.getAgeByDay()} ngày`)
  );
  
  // In ra width và height của màn hình
  console.log(`Width: ${window.innerWidth}px - Height: ${window.innerHeight}px`);
  