const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            replaceInDir(fullPath);
        } else if (file.endsWith('.html') || file.endsWith('.txt') || file.endsWith('.json')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;
            
            if (content.includes('Brihat Infotech')) {
                content = content.replace(/Brihat Infotech/g, 'Chagan Paan Bhandar');
                modified = true;
            }
            if (content.includes('brihatinfotech.com')) {
                content = content.replace(/brihatinfotech\.com/g, 'chaganpaanbhandar.com');
                modified = true;
            }
            if (content.includes('BRIHAT INFOTECH')) {
                content = content.replace(/BRIHAT INFOTECH/g, 'CHAGAN PAAN BHANDAR');
                modified = true;
            }
            
            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated: ${fullPath}`);
            }
        }
    }
}

replaceInDir(path.join(__dirname, 'public'));
console.log("Rebranding complete.");
