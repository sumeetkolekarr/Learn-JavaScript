const fs = require("fs");
const path = require("path");
const replaceThis = "harry";
const replaceWith = "Bunny";
const preview = true;
const folder = __dirname;

try {
  fs.readdir(folder, (err, data) => {
    console.log(data);
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      let oldFile = path.join(folder, item)
      let newFile = path.join(folder, item.replaceAll(replaceThis, replaceWith));
      if (!preview) {
        fs.rename(oldFile, newFile, () => {
          console.log("Rename Success");
        });
      } else {
        if ("Projects/Bulk Rename/data/" + item !== newFile) {
          console.log(
            "Projects/Bulk Rename/data/" +
              item +
              " will be renamed to " +
              newFile
          );
        }
      }
    }
  });
} catch (error) {
  console.error(error);
}
