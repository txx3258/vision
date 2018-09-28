import fs from 'fs';
import tesseract from 'node-tesseract';

/**
 * 指定图片路径，用tesseract识别
 * 
 * @param path 
 */
export function process(path) {
    return new Promise((resolve, rejects) => {
        const options = {
            l: 'chi_sim',
            psm: 3,
            binary: '/usr/local/bin/tesseract'
        };

        tesseract.process(path, options, (err, text) => {
            //删除文件
            fs.unlinkSync(path);

            if (err) {
                resolve(`error:${err}`);
            } else {
                resolve(text)
            }
        });
    });
}