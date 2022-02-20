const express = require('express');
const app = express();

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });


  app.use(express.static('public'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());