import express from 'express';

const router = express.Router();

router.get('/index', (req, res, next) => {
    
    res.send('hello world');
});

router.post('/img/orc', (req, res) => {
    let form = new formidable.IncomingForm(), files = [], fields = [];
    form.uploadDir = os.tmpdir();

    form.parse(req);

    form.on('field', (field, value) => {
        console.log(field, value);
        fields.push([field, value]);
    }).on('file', (field, file) => {
        console.log(field, file);
        files.push([field, file]);
    }).on('end', function () {
        console.log('-> upload done');
        res.json()
    });
})

export default router;