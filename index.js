const express = require('express');


const app = express();

const port = 3000;

app.use(express.json());

// POST endpoint
app.post('/items', (req, res) => {
  // Access POST data using req.body
  res.json({ message: 'POST request to the homepage', data: req.body });
});

// DELETE endpoint
app.delete('/items/:id', (req, res) => {
  // Access the ID parameter from the URL
  const { id } = req.params;
  res.json({ message: `Item ${id} deleted` });
});

app.get('/items', (req, res) => {
  res.json({ message: 'GET request to the homepage' });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
