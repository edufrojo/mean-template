const Issue = require('./models/Issue');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 4000;
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:9006/issues', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('[INFO] MongoDB conectado');
});

/*
 * Obtener todas las tareas
 */
router.route('/issues').get((req, res) => {
  Issue.find((err, issues) => {
    if (err) console.log(err);
    else res.json(issues);
  });
});

/*
 * Obtener sólo una tarea
 */
router.route('/issues/:id').get((req, res) => {
  Issue.findById(req.params.id, (err, issue) => {
    if (err) console.log(err);
    else res.json(issue);
  });
});

app.use('/', router);

app.listen(PORT, () => console.log(`[INFO] Express disponible en 'http://localhost:` + PORT + `'`));
