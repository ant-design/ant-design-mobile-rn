const exec = require('shell-utils').exec;


function run() {
  exec.killPort(8081);
  exec.execSync('watchman watch-del-all || true');
  exec.execSync('adb reverse tcp:8081 tcp:8081 || true');
  exec.execSync('npx react-native start');
}

run();
