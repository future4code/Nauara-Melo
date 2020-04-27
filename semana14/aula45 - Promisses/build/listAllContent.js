"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const handleFileRead = (err, data) => {
    try {
        console.log(data.toString());
    }
    catch (e) {
        console.log(err);
    }
};
fs_1.readdir('./textos', (err, files) => {
    files.forEach((file) => {
        fs_1.readFile(`./textos/${file}`, handleFileRead);
    });
});
//# sourceMappingURL=listAllContent.js.map