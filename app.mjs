import express from 'express';

import indexAPI from './src/router/index';
import imageAPI from './src/router/image';
const app = express();

app.use(express.json());
app.use(express.urlencoded());


app.use("/api", indexAPI);
app.use("/image", imageAPI);

app.listen(27095);