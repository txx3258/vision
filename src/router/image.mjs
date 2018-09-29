import os from 'os';
import express from 'express';
import formidable from 'formidable';
import {process} from '../service/tesseract';

import {rename} from '../service/file';
import {res2ok, res2msg} from '../common/result';

const router = express.Router();

async function done(filename, path, res) {
    if (!path) {
        res.json(res2msg('path is null.path=' + path, 500));
        return;
    }

    let newpath = path.substring(0, path.lastIndexOf('/') + 1) + filename;
    let status = await rename(path, newpath);
    if (status) {
        res.json(res2msg(status, 500));
        return;
    }

    let result = await process(newpath);

    res.json(res2ok({'result':result}));
}

router.get('/test', (req, res) => {
    let path = req.query.path;
    if (!path) {
        res.json(res2msg('参数path为空', 400));
        return;
    }

    done(path, res);
})

/**
 * 
 */
router.post('/orc', (req, res) => {
    let form = new formidable.IncomingForm(), files = [], fields = [];
    form.uploadDir = os.tmpdir();

    form.parse(req);

    form.on('field', (field, value) => {
        fields.push([field, value]);
    }).on('file', (field, file) => {
        files.push([field, file]);
    }).on('end', function () {
        if (files.length == 0) {
            res.json(res2ok({'result':'没有上传图片!'}));
            return;
        }
    
        let path = files[0][1].path;
        let filename = files[0][0];
        done(filename, path, res);
    });
})

export default router;