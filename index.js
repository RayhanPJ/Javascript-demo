// let obj = {
//   num: [2, 8, 100, 23, 7],
//   zoo: ["kambing", "kucing", "kelinci", "ayam"],
// };

// let b = "kambing";
// let a = Object.values(obj.num).includes(b) || Object.values(obj.zoo).includes(b) ? b + " adalah " + typeof b : " Data tidak ada";
// console.log(a);

// Nomer 1

//Psudocode
// input: i, a, jam, menit, detik;
// i = 15436;
// a = i % 3600;
// jam = i / 3600;
// menit = a / 60;
// detik = a % 60;
// print : jam, menit, detik

// let i, a, jam, menit, detik;

// i = 15436;
// a = i % 3600;

// jam = i / 3600;

// menit = a / 60;

// detik = a % 60;

// console.log("Konversi jarak dar kota A ke B selama " + i + "s adalah : ");
// console.log(Math.floor(jam) + " Jam ", Math.floor(menit) + " menit ", detik + " detik");

// Nomer 2

//Psudocode
// input : i = [2, 4, 8, 10, 20, 22, 44];
// input : x;
// for (x = 0; x < i - 1; x++) {
//     print : i[x] , i[x + 1], (i[x + 1] - i[x]));
// }

// let i = [2, 4, 8, 10, 20, 22, 44];
// for (let x = 0; x < i.length - 1; x++) {
//     console.log("Jarak " + i[x], " ke " + i[x + 1], " adalah " + (i[x + 1] - i[x]));
// }

// let num = [2, 8, 100, 23, 7];

// for (let i = 0; i < num.length; i++) {
//     let flag = num.length - i - 1;
//     console.log(flag);
//     for (let j = 0; j < flag; j++) {
//         const x = num[j];
//         const y = num[j + 1];
//         if (x > y) {
//             num[j] = y;
//             num[j + 1] = x;
//         }
//         console.log(num);
//     }
// }

// LATIHAN SOAL

// Nomer 2
// function Nilai(nilai) {
//     switch (true) {
//         case 91 <= nilai && nilai <= 100:
//             console.log("A");
//             break;
//         case 81 <= nilai && nilai <= 90:
//             console.log("B");
//             break;
//         case 71 <= nilai && nilai <= 80:
//             console.log("C");
//             break;
//         case 61 <= nilai && nilai <= 70:
//             console.log("D");
//             break;
//         case nilai <= 60:
//             console.log("E");
//         default:
//             console.log("HOHOHO");
//     }
// }
// Nilai(85);

let i = 0;
while (i <= 10) {
    console.log("Angkot No.", i + " beroperasi dengan baik.");
    i++;
}