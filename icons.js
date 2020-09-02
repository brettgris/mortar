'use strict';

const fs = require('fs');


const parseIntoFile = (input, output) => {
    fs.readFile(input, (err, data) => {
        if (err) throw err;
        const icons = JSON.parse(data);
        const iconStr = icons.icons.reduce((t,v) => {
            t += 
`{
    name: "${v.properties.name}",
    length: ${v.attrs.length}
},`;
            return t;
        }, '');

        const fileStr = 
`export default [
${iconStr.slice(0,-1)}
]`;

        fs.writeFile(output, fileStr, (err) => {
            if (err) {
                throw err;
            } else {
                console.log("ICONS: Wrote "+output);
            }
        })
    })
}

parseIntoFile('src/assets/storybook-icons/selection.json', 'src/components/mortar-icon/icons.js')
parseIntoFile('src/assets/storybook-illustrations/selection.json', 'src/components/mortar-illustration/icons.js')

