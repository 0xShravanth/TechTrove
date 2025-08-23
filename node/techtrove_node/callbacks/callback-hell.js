import fs from 'fs';

fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
   
   const modifiedData = data.toUpperCase();

   fs.writeFile("output.txt", modifiedData, (err) => {
    if (err){
        console.error("Error writing file:", err);
        return;
    }

    console.log("data written to the new file ");

    fs.readFile("output.txt", "utf-8", (err, newData) => {
        if (err){
            console.log("Error reading  file ", err);
            return;
        }
        console.log("New file content:", newData);
    })
   })
});