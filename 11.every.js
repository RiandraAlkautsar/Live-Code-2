
// let products = [
//     {name: "Apple", type:"fruit"},
//     {name: "Monitor", type:"computer"},
//     {name: "Mango", type:"fruit"},
//     {name: "Table", type:"Furnitute"}
// ];

// console.log(
//     products.every(produk => produk.type === "fruit")
// );

//kalo some mengecek apakah salah satu tipe produk ada yang bernilai fruit, jika ada bernilai true.
let products = [
    {name: "Apple", type:"fruit"},
    {name: "Monitor", type:"computer"},
    {name: "Mango", type:"fruit"},
    {name: "Table", type:"Furnitute"}
];

console.log(
    products.some(produk => produk.type === "fruit")
);

