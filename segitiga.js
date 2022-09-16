const { setgroups } = require("process");

function segitia(alas, tinggi) {
    return (alas * tinggi) / 2;
}

module.exports = segitia;