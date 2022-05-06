const fs = require('fs');
const path = require('path');

module.exports = {
    getProducts: JSON.parse(fs.readFileSync(path.join(__dirname, "/products.json"), "utf-8")),
    writeProducs: (data) => {
        fs.writeFileSync(path.join(__dirname, '/products.json'), JSON.stringify(data));
    },
    usuarios: JSON.parse(fs.readFileSync(path.join(__dirname, '/users.json'), 'utf-8')),
    writeUsers: (data) => {
        fs.writeFileSync(path.join(__dirname, "/users.json"), JSON.stringify(data));
    },
}