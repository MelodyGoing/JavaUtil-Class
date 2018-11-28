var platform = require("os").platform();
const { exec } = require("child_process");

const winCmd = "del /F /Q .\\node_modules\\react-native\\local-cli\\core\\__fixtures__\\files\\package.json";
const linuxCmd = "rm -f ./node_modules/react-native/local-cli/core/__fixtures__/files/package.json";
const cmd = /^win/.test(platform) ? winCmd : linuxCmd;
exec(cmd, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});
