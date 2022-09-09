const express = require('express');
const app = express();
const cors = require('cors');
const { orm } = require(__dirname + '/orm');

app.use(cors({
  origin: '*'
}));
app.use(express.json());

app.route('/api/todos')
  .get((_, res) => {
    orm.findAllEntries().then(data => res.json(data));
  })
  .post((req, res) => {
    if (req.body.text) {
      orm.createEntry(req.body).then(data => res.json(data));
    }
  })
  .patch((req, res) => {
    if (req.body.id && req.body.text) {
      orm.updateEntry(req.body).then(data => res.json(data));
    }
  })
  .delete((req, res) => {
    if (req.body.id) {
      orm.deleteEntry(req.body).then(data => res.json(data));
    }
  });

app.listen(3000, () => console.log('Server running at 3000'));