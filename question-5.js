// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(products, promotionCode) {
  let totalProductsPrices = 0;
  for (let index = 0; index < products.length; index++) {
    totalProductsPrices += products[index].price * products[index].quantity;
  }
  if (promotionCode === "SALE20") {
    totalProductsPrices =
      totalProductsPrices - (totalProductsPrices * 20) / 100;
  } else if (promotionCode === "SALE50") {
    totalProductsPrices =
      totalProductsPrices - (totalProductsPrices * 50) / 100;
  } else {
    totalProductsPrices = totalProductsPrices;
  }
  return totalProductsPrices;
}

// ถ้า promotionCode มีค่าเป็น "" ฟังก์ชันจะ Return ค่า 85
console.log(calculateTotalPrice(products, ""));

// ถ้า promotionCode มีค่าเป็น "SALE20" ฟังก์ชันจะ Return ค่า 68
console.log(calculateTotalPrice(products, "SALE20"));

// ถ้า promotionCode มีค่าเป็น "SALE50" ฟังก์ชันจะ Return ค่า 42.5
console.log(calculateTotalPrice(products, "SALE50"));
