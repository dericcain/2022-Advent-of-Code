require('@babel/register')({
  extensions: ['.js', '.ts'],
})

import { promisify } from 'util';
import { exec } from 'child_process';


const members = ['deric', 'dylan', 'hunter', 'jacob', 'vkdur', 'zach'];
const ex = promisify(exec);

const runAll = async () => {
  for await (let member of members) {
    await ex(`node ./${member}.js`);
  }
};

(async () => await runAll());
