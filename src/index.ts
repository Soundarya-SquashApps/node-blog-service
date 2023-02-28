import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sequelize from './config/database';
import router from './routes/route';


const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/', router);

app.listen(3000, () => {
  sequelize.sync().then(() => {
    console.log('DB connected')
  }).catch((error) => {
    console.error('Error while connecting to database', error);
  });
  console.log('Server listening on port 3000');
});