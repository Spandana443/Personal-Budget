const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

const budget = {
    myBudget:[
    {
        title: 'ELECTRICITY BILL',
        budget: 300
    },
    {
        title: 'Rent',
        budget: 350
    },
    {
        title: 'GROCERIES',
        budget: 85
    }
   
    
]
};

app.get('/', (req, res) => {
    res.send('hello world!');
});

app.use('/budget', (req, res) => {
    res.json(budget);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});