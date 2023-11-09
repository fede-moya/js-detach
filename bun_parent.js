const proc = Bun.spawn(["bun", "bun_child.js"]);
proc.unref();
console.log('Parent process is exiting.');
