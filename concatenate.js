const fs = require('fs-extra');
const concat = require('concat');

concatenate = async () =>{
  const files = [
    './dist/arithmix-chat/runtime.js',
    './dist/arithmix-chat/polyfills.js',
    './dist/arithmix-chat/main.js'
  ];

  await fs.ensureDir('output');
  await concat(files, 'output/arithmixchat.js');
}
concatenate();
