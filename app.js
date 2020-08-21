const yargs = require("yargs");
const { transferFiles } = require("./observer");

yargs.command({
  command: "auto_transfer_files",
  describe: "transfer files from a folder to another automatically",
  builder: {
    from: {
      describe: "original folder",
      demandOption: true,
      type: String,
    },
    to: {
      describe: "destination folder",
      demandOption: true,
      type: String,
    },
  },
  handler: ({ from, to }) => {
    transferFiles(from, to);
  },
});
yargs.parse();
