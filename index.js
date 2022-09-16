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
//         case nilai >= 91 && nilai <= 100:
//             console.log("A");
//             break;
//         case nilai >= 81 && nilai <= 90:
//             console.log("B");
//             break;
//         case nilai >= 71 && nilai <= 80:
//             console.log("C");
//             break;
//         case nilai >= 61 && nilai <= 70:
//             console.log("D");
//             break;
//         case nilai <= 60:
//             console.log("E");
//             break;
//         case nilai >= 101:
//             console.log("Rank Undifine");
//     }
// }
// Nilai(100);

// let i = 0;
// while (i <= 10) {
//     console.log("Angkot No.", i + " beroperasi dengan baik.");
//     i++;
// }

// let person = { name: "Sabrina", age: 21, ktp: "1234562" };
// let fruits = ["Mango", "Apple", "Orange"];

// person.name = "Agus";
// person.age = 32;
// delete person.ktp;
// let check = "ktp" in person;
// console.log(person.name, check ? "Has KTP" : "Doesn't KTP");

// const maxFloor = 3;
// let floor = 1;

// function getRondomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// while (floor <= maxFloor) {
//     let isSpotless = false;
//     console.log("Ngepel lantai", floor);
//     let godsWill = getRondomInt(0, 1);
//     if (godsWill === 0) isSpotless = true;
//     if (isSpotless) floor++;
// }

// const rumusPersegi = (size) => {
//     return size * size;
// };
// const persegi = rumusPersegi(4);
// console.log(persegi);

// function solution(x, y) {
//     if (x % 5 === 0 && y >= x + 0.5) {
//         return y - (x + 0.5);
//     }
// }
// console.log(solution(40, 100));

// function sumDigits(number) {
//     let sum = 0;
//     let str = number.toString();
//     for (let i = 0; i < str.length; i++) {
//         sum += parseInt(str[i]);
//     }
//     return sum;
// }

// console.log(sumDigits(123));
// console.log(sumDigits(1234));

// function sayHiTo(name) {
//     let halo = "Hi " + name.toUpperCase() + " !";
//     return halo;
// }

// let test1 = sayHiTo("everything");
// console.log(test1);

// function volTabung(r, t) {
//     return 3.14 * r ** 2 * t;
// }
// console.log("Vol Tabung : ", volTabung(10, 4));

// const strArray = ["JavaScript", "Java", "C"];

// function forEach(array, callback) {
//     const newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         newArray.push(callback(array[i]));
//     }
//     return newArray;
// }

// const lenArray = forEach(strArray, (item) => {
//     return item.length;
// });
// console.log(lenArray);

// class bangunDatar {
//     constructor(panjang, lebar) {
//         this.panjang = panjang;
//         this.lebar = lebar;
//     }

//     Luas() {
//         console.log(this.panjang * this.lebar);
//     }
// }

// let bangun = new bangunDatar(2, 2);

// class persegiPanjang extends bangunDatar {
//     constructor(panjang, lebar) {
//         super(panjang, lebar);
//     }

//     Luas() {
//         super.Luas();
//     }

//     Keliling() {
//         console.log(2 * (this.panjang + this.lebar));
//     }
// }

// class Persegi extends bangunDatar {
//     constructor(panjang, lebar) {
//         super(panjang, lebar);
//     }

//     Keliling() {
//         console.log(4 * this.panjang);
//     }
// }

// class Segitiga extends bangunDatar {
//     constructor(panjang, lebar, tinggi) {
//         super(panjang, lebar);
//         this.tinggi = tinggi;
//     }

//     Luas() {
//         console.log((1 / 2) * this.panjang * this.tinggi);
//     }

//     Keliling() {
//         console.log(this.panjang + this.lebar + this.tinggi);
//     }
// }

// let pPanjang = new persegiPanjang(2, 2);
// let persegi = new Persegi(2, 2);
// let segiTiga = new Segitiga(2, 2, 2);

// pPanjang.Luas();
// pPanjang.Keliling();
// persegi.Luas();
// persegi.Keliling();
// segiTiga.Luas();
// segiTiga.Keliling();

function temperatureConverter() {
    var Num = document.getElementById("inputCelsius").value;
    if (Num == "") {
        alert("Tidak boleh kosong");
    } else {
        document.getElementById("outputFahrenheit").innerHTML = Math.ceil(Num * 1.8 + 32);
        document.getElementById("outputKelvin").innerHTML = Math.ceil(Num + 273.15);
        document.getElementById("outputReamur").innerHTML = Math.ceil(Num * (4 / 5));
    }
}

function formReset() {
    document.getElementById("frm1").reset("");
}

function getTextColor() {
    let textColor = document.getElementById("inputTextColor").value;
    document.getElementById("textColor").style.color = textColor;
}

function getBGColor() {
    let BGColor = document.getElementById("inputBGColor").value;
    document.body.style.background = BGColor;
}

function getLinkColor() {
    let linkColor = document.getElementById("inputLinkColor").value;
    document.getElementById("linkColor").style.color = linkColor;
}