const { exec, execSync, spawn } = require("child_process");

const start_commands = [
  `Set-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings" -Name ProxyEnable -Value 1`,
  `Set-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings" -Name ProxyServer -Value "127.0.0.1:10809"`,
  `v2ray run -config v2ray-config.json`,
];
const stop_commands =
  'Set-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings" -Name ProxyEnable -Value 0';

function start() {
  start_commands.forEach((cmd) => {
    exec(cmd, { shell: "powershell.exe" });
  });
}
function stop() {
  exec(stop_commands, { shell: "powershell.exe" });
}

const action = process.argv[2];

if (action === "start") {
  start();
} else if (action === "stop") {
  stop();
} else {
  console.log("用法: node v2ray-run.js [start|stop]");
}
