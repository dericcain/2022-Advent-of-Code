const { promisify } = require('util');
const { exec } = require ('child_process');


const members = ['deric', 'dylan', 'hunter', 'jacob', 'vkdur', 'zach'];
const ex = promisify(exec);

const runAll = async () => {
  for await (member of members) {
    await ex(`node ./${member}.js`);
  }
};

(async () => await runAll());
