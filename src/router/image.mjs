import os from 'os';
import express from 'express';
import formidable from 'formidable';

import {res2ok, res2msg} from '../common/result';

const router = express.Router();

/**
 * 
 */
router.post('/orc', (req, res) => {
    let form = new formidable.IncomingForm(), files = [], fields = [];
    form.uploadDir = os.tmpdir();

    form.parse(req);

    form.on('field', (field, value) => {
        //console.log(field, value);
        fields.push([field, value]);
    }).on('file', (field, file) => {
        //console.log(field, file);
        files.push([field, file]);
    }).on('end', function () {
        files.forEach((group) => {
            console.log(`filename=${group[0]},path=${group[1].path}`);
        });
        res.json(res2ok({'result':'hello world!'}));
    });
})

export default router;