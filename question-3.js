// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword) {
  if (userPassword.length < 6) {
    return "Weak";
  } else if (userPassword.length >= 6 && userPassword.length < 10) {
    return "Medium";
  } else {
    return "Strong";
  }
}

// ถ้า userPassword มีค่าเป็น "swnalWadqQ" ฟังก์ชันจะ Return ค่า "Strong"
userPassword = "swnalWadqQ";
console.log(checkPasswordStrength(userPassword));

// ถ้า userPassword มีค่าเป็น "TechUp" ฟังก์ชันจะ Return ค่า "Medium"
userPassword = "TechUp";
console.log(checkPasswordStrength(userPassword));

// ถ้า userPassword มีค่าเป็น "abcde" ฟังก์ชันจะ Return ค่า "Weak"
userPassword = "abcde";
console.log(checkPasswordStrength(userPassword));
