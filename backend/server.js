import Issue from './models/Issue';

const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');

const app = express();
const PORT = 4000;
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:9006/tareas', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('[INFO] MongoDB conectado');
});

app.use('/', router);

app.listen(PORT, () => console.log(`[INFO] Express disponible en 'http://localhost:` + PORT + `'`));
