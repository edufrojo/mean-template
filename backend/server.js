const express = require('express'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:9006/tareas', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('[INFO] Conectado a la base de datos MongoDB');
});

app.use('/', router);

app.listen(4000, () =>
  console.log(`[INFO] Servidor Express desplegado en 'http://localhost:4000'`),
);
