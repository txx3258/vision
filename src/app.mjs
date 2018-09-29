import express from 'express';
import bodyParser from 'body-parser'

import indexAPI from './router/index';
import imageAPI from './router/image';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false, limit:'50mb' }))


app.use("/api", indexAPI);
app.use("/image", imageAPI);

app.listen(27095);