import express from 'express';
import bodyParser from 'body-parser'

import indexAPI from './src/router/index';
import imageAPI from './src/router/image';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false, limit:'50mb' }))


app.use("/api", indexAPI);
app.use("/image", imageAPI);

app.listen(27095);