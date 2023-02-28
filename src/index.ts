import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// import { apiRouter } from './routes/apiRouter';

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Mount API router
// app.use('/api', apiRouter);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});