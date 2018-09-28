import express from 'express';
import bodyParser from 'body-parser'

import indexAPI from './src/router/index';
import imageAPI from './src/router/image';
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))


app.use("/api", indexAPI);
app.use("/image", imageAPI);

app.listen(27095);