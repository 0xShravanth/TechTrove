import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export default function paths(){ 
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);


console.log("Path Module Demonstration");

console.log("Current Directory:", path.dirname(__filename));
console.log("File name", path.basename(__filename));

console.log("file extension", path.extname(__filename));

const joinPath = path.join("/user", "documents", "node", "projects");
console.log("Joined path", joinPath);

const resolvePath = path.resolve("user", "documents", "node", "project");
console.log("Resolve path:", resolvePath);

const normalizePath = path.normalize("/user/.documents/../node/projects");
console.log("normalizePath", normalizePath);

}