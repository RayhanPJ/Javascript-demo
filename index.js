// let obj = {
//   num: [2, 8, 100, 23, 7],
//   zoo: ["kambing", "kucing", "kelinci", "ayam"],
// };

// let b = "kambing";
// let a = Object.values(obj.num).includes(b) || Object.values(obj.zoo).includes(b) ? b + " adalah " + typeof b : " Data tidak ada";
// console.log(a);

let i, a, jam, menit, detik;

i = 15436;
a = i % 3600;

jam = i / 3600;

menit = a / 60;

detik = a % 60;

console.log("Konversi jarak dar kota A ke B selama " + i + "s adalah : ");
console.log(Math.floor(jam) + " Jam ", Math.floor(menit) + " menit ", detik + " detik");
