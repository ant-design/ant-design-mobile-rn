const exec = require('shell-utils').exec;


function run() {
  exec.execSync('lsof -i:8081 | grep \'node\' | awk \'{print $2}\' | xargs kill -9');
  exec.execSync('watchman watch-del-all || true');
  exec.execSync('adb reverse tcp:8081 tcp:8081 || true');
  exec.execSync('npx react-native start');
}

run();
