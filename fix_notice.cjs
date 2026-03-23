const fs = require('fs');
const path = require('path').resolve(__dirname, 'src/sections/Notice.tsx');
let code = fs.readFileSync(path, 'utf8');

const notice6Match = code.match(/,\s*\{\s*id:\s*6,[\s\S]+?아르떼펄스 팀 드림`\r?\n\s*\}/);
if (!notice6Match) {
    console.error("Notice 6 not found");
    process.exit(1);
}

const notice6Block = notice6Match[0];
code = code.replace(notice6Match[0], '');

const notice1Match = code.match(/(artepulse\.official@gmail\.com\r?\n\s*`\r?\n\s*\})/);
if (!notice1Match) {
    console.error("Notice 1 not found");
    process.exit(1);
}

code = code.replace(notice1Match[1], notice1Match[1] + notice6Block);

fs.writeFileSync(path, code, 'utf8');
console.log("SUCCESS");
