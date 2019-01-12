const express = require('express');
const apiRoute =require('./routes/api');
const bodyParser = require('body-parser')

const app = express();
app.use('/api', apiRoute );

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Body parser:
app.use(bodyParser.json());
// without extended you would only have a simple object, 
app.use(bodyParser.urlencoded({extended: true}));
//you would not be able to hav accessth nested objects.
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++


app.get('', (req, res) => {});

const port = process.env.PORT || 3456;
app.listen(port, () => console.log(`The Server is listening on port ${port}.`));