import fs from 'fs';

export function rename(oPath, nPath) {
    return new Promise((resolve, rejects) => {
        fs.rename(oPath, nPath,(err) => {
            resolve(err);
        })
    });
}

