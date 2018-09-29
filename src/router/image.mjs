import os from 'os';
import express from 'express';
import formidable from 'formidable';
import {process} from '../service/tesseract';

import {res2ok, res2msg} from '../common/result';

const router = express.Router();

async function done(path, res) {
    let result = await process(path);

    res.json(res2ok({'result':result}));
}

router.post('/test', (req, res) => {
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
        done(path, res);
    });
})

export default router;