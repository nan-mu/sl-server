import path from "path"
import fs from "fs-extra"

(async () => {
    const __dirname = path.resolve();
    console.log(path.dirname(__dirname));
    const dir = await fs.readdir(__dirname);
    console.log(dir);
})();
