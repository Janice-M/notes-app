const express = require ('express');
const app = express();
const port = 3000;

const 
app.get('/', (req,res)=> res.send('Notes App'));

app.listen(port, () => console.log(`notes-app listening on port ${3000}!`));