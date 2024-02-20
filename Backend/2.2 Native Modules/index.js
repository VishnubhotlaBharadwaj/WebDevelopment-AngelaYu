const fs = require("fs");

fs.writeFile("messages.txt", "Hello", (err) => {
    if (err) throw err;
    console.log("file is saved");
})