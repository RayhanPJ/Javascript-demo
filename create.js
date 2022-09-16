const fs = require("fs");
const createPerson = function(person) {
    fs.writeFileSync("./person.json", JSON.stringify(person));
    return person;
};

const sabrina = createPerson({
    name: "sabrina",
    age: 22,
    address: "BSD",
});

module.exports = createPerson;