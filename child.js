const childProcess = require('child_process');

setTimeout(() => {
  childProcess.execSync("open https://puginarug.com/");
}, "3000");
