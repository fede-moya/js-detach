const { spawn } = require('child_process');

const subprocess = spawn(process.argv[0], ['child.js'], {
  detached: true,
  stdio: 'ignore',
});

subprocess.unref(); 
console.log("Parent process is exiting.");
