let flag = "";

function log(word) {
  process.stdout.write(word);
}

function clearLog() {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
}

function intervalLog() {
  let i = "加载中";
  flag = setInterval(() => {
    clearLog();
    log(i);
    i = i + ".";
  }, 100);
}

function clearIntervalLog() {
  clearInterval(flag);
  clearLog();
}

module.exports.log = log;
module.exports.clearLog = clearLog;
module.exports.intervalLog = intervalLog;
module.exports.clearIntervalLog = clearIntervalLog;
