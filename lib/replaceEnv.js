const fs = require('fs');
const path = require('path');

function substitute(file, key, value) {
    try {
        const original = fs.readFileSync(file).toString();
        const replace = original.replace(`process.env.${key}`, value);
        fs.writeFileSync(file, replace);
    } catch (err) {
        console.log('substitution failed ', err);
    }
}

substitute(
    path.join(__dirname, '../public/button.js'),
    'data',
    process.env.data
)