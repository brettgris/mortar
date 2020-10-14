const fs = require('fs');

fs.copyFile('angular/index.ts', 'dist/angular/index.ts', (err) => {
    if (err) throw err;
});