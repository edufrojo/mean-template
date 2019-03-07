const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Issue = require('./models/Issue');

const app = express();
const PORT = 4000;
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:9006/principal', { useNewUrlParser: true });

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

/*
 * Añadir nuevas tareas
 */
router.route('/issues/add').post((req, res) => {
  let issue = new Issue(req.body);
  issue
    .save()
    .then(issue => {
      res.status(200).json({ issue: 'Added successfully' });
    })
    .catch(err => {
      res.status(400).send('Failed to create new record');
    });
});

/*
 * Actualizar una tarea
 */
router.route('/issues/update/:id').post((req, res) => {
  Issue.findById(req.params.id, (err, issue) => {
    if (!issue) return next(new Error('Could not load Document'));
    else {
      issue.title = req.body.title;
      issue.responsible = req.body.responsible;
      issue.description = req.body.description;
      issue.severity = req.body.severity;
      issue.status = req.body.status;

      issue
        .save()
        .then(issue => {
          res.json('Update done');
        })
        .catch(err => {
          res.status(400).send('Update failed');
        });
    }
  });
});

/*
 * Borrar una tarea
 */
router.route('/issues/delete/:id').get((req, res) => {
  Issue.findByIdAndRemove({ _id: req.params.id }, (err, issue) => {
    if (err) res.json(err);
    else res.json('Removed successfully');
  });
});

app.use('/', router);

app.listen(PORT, () => console.log(`[INFO] Express disponible en 'http://localhost:` + PORT + `'`));
