import os from "os"
import QR from "qrcode-terminal"

const url = os.networkInterfaces().WLAN[0].address;//以wifi联网时用这条，在局域网中发布。
const QRs = (src, size = "Q") => {
    return new Promise((res, rej) => {
        try {
            QR.setErrorLevel(size);
            QR.generate(src, function (QRcode) {
                res(QRcode);
            });
        } catch (err) {
            rej(err);
        }
    });
}

const loadPublic = async () => {
    const _public = readdir(join(__dirname, "public"));
}

export { url, QRs }