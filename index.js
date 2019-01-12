const express = require('express');

const app = express();

app.get('', (req, res) => {});

const port = process.env.PORT || 5678;
app.listen(port, () => console.log(`The Server is listening on port ${port}.`));