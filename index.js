const express = require ('express');
const app = express();
const port = 3000;

const Sequelize = require ('sequelize');

const sequelize = new Sequelize({

    dialect: 'sqlite',
    storage: './database.sqlite'

})
sequelize.authenticate().then

app.get('/', (req,res)=> res.send('Notes App'));

app.listen(port, () => console.log(`notes-app listening on port ${3000}!`));