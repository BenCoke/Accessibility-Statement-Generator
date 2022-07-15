const express = require('express');
const app = express();
const port = 3000;


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/background', (req, res) => {
  res.render('background');
});

app.get('/improving-accessibility', (req, res) => {
  res.render('improving-accessibility');
});

app.get('/outside-scope', (req, res) => {
  res.render('outside-scope');
});

app.get('/non-accessible-content', (req, res) => {
  res.render('non-accessible-content');
});

app.get('/disproportionate-burden', (req, res) => {
  res.render('disproportionate-burden');
});

app.get('/compliance', (req, res) => {
  res.render('compliance');
});

app.use('/public', express.static('public'));
app.use('/dist', express.static('node_modules/@scottish-government/pattern-library/dist'));
app.use('/src', express.static('node_modules/@scottish-government/pattern-library/src'));
app.use('/library', express.static('node_modules/@scottish-government/pattern-library'));
