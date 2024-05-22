// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let minQuantity = inventory[0];
for (let index = 0; index < inventory.length; index++) {
  if (inventory[index].quantity < minQuantity.quantity) {
    minQuantity = inventory[index];
  }
}

// ให้เขียนโปรแกรมในการหาสินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้า ผลลัพธ์ของโปรแกรมควรจะแสดงผลดังนี้ สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ Banana ซึ่งมี 50 ชิ้น
console.log(
  `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minQuantity.name} ซึ่งมี ${minQuantity.quantity} ชิ้น`
);
