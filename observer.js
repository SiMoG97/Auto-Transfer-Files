const { basename } = require("path");
const { existsSync } = require("fs");
const mv = require("mv");
const chokidar = require("chokidar");

const transferFiles = (from, to) => {
  if (!existsSync(from))
    return console.log(`no such directory with this path ${from}`);
  if (!existsSync(to))
    return console.log(`no such directory with this path ${to}`);
  const watcher = chokidar.watch(from, {
    ignored: /(^|[\/\\])\../,
    persistent: true,
  });
  watcher
    .on("add", (path) => {
      mv(path, `${to}\\${basename(path)}`, (e) => {
        if (e) throw e;
      });
      console.log("File", basename(path), "has been added to ", to);
    })
    .on("error", (error) => {
      console.error("Error happened", error);
    });
};

module.exports = {
  transferFiles,
};
