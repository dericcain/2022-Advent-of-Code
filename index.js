const { readdir } from require('fs');  
const { promisify } = from 'utils';
const { resolve } = require('path');

const read = promisify(readdir);
const root = resolve(__dirname, '.');

const runAll = async () => {
  const dirs = await read(root);
  console.log(dirs);
};

(async () => await runAll())();
