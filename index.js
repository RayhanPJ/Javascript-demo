var obj = {
    num: [2, 8, 100, 23, 7],
    zoo: ["kambing", "kucing", "kelinci", "ayam"]
};

var b = "kambing";
var a = Object.values(obj.num).includes(b) || Object.values(obj.zoo).includes(b) ? b + " adalah " + typeof b : " Data tidak ada";
console.log(a);