import os from "os"
const url = os.networkInterfaces().WLAN[0].address;//以wifi联网时用这条，在局域网中发布。

export { url }