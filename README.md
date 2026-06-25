## 介绍

这是一个小脚本，用于在windows上使用v2ray核心翻墙。

写这个脚本的起因是nixos上的clash verge rev貌似不支持我正在使用的机场，且v2rayN在linux上并不好用。

## 用法

1. 安装v2ray：可以用**winget**来安装。打开终端运行下面的命令。如果没有winget，可以在微软商店下载。

```powershell
winget install v2ray
```

2. 首先打开手机版v2rayNG(电脑版v2rayN也行，但用了这个也没必要用这个脚本了)。选中一个可用节点的**分享**按钮，点击**导出完整配置至剪贴板**。

![手机操作方式](./asset/手机v2ray.jpg)

3. 复制到当前文件夹下，命名为v2ray-config.json。

4. 在字段`inbounds`下添加:

```json
 "inbounds": [
    //......
    //如果已经存在http策略了，可以不添加下面的内容
    {
      "listen": "127.0.0.1",
      "port": 10809,
      "protocol": "http",
      "tag": "http"
    }
  ],
```

5. 最后在终端运行`node .\v2ray-run.js start`

> 注意，如果直接ctrl+c或者关闭终端会导致系统无法联网，请在终端执行`node .\v2ray-run.js stop`后即可关闭系统代理，正常访问国内网络。
