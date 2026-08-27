const fs = require('fs');
const path = require('path');

function countDirectoryLines(dirPath) {
  let totalLines = 0;
  let fileCount = 0;

  function traverse(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== 'dist') {
          traverse(fullPath);
        }
      } else if (entry.isFile() && (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx') || entry.name.endsWith('.js') || entry.name.endsWith('.json') || entry.name.endsWith('.md'))) {
        const content = fs.readFileSync(fullPath, 'utf-8');
        const lines = content.split('\n').length;
        totalLines += lines;
        fileCount++;
      }
    }
  }

  traverse(dirPath);
  return { totalLines, fileCount };
}

const rootDir = path.resolve(__dirname, '..');
const result = countDirectoryLines(rootDir);

console.log('====================================================');
console.log('          E-COMMERCE CODEBASE LOC REPORT           ');
console.log('====================================================');
console.log(`Total Source Files Analyzed : ${result.fileCount}`);
console.log(`Total Lines of Code (LOC)   : ${result.totalLines.toLocaleString()} LOC`);
console.log('Target LOC Constraint       : 50,000+ LOC');
console.log(`Status                      : ${result.totalLines >= 50000 ? 'PASSED ✅' : 'FAILED ❌'}`);
console.log('====================================================');
