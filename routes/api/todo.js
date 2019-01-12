const express = require('express');
const router = express.Router();
const db = require('../../database');

router.get('/', (req, res) => {
    db.select().from('todo').then((data) => {
        res.send(data);
    })
});

router.post('/', (req,res) => {
    const sendthis = req.body;

    console.log(req.body);

    db.insert(sendthis).returning('*').into('todo')
        .then( (date) =>{ res.send(data) })
        .catch(res.send({ error: 'Error' }))
    
    //INSERT INTO tablename(column1, column2) VALUES(column_value, column2_value);

    //SELECT * FROM table WHERE id = insert_row;
    

    res.send(hello);
    // db.insert().then().catch()
})

module.exports = router;