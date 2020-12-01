const express = require ('express');
const app = express();
const port = 3000;

const Sequelize = require ('sequelize');

const sequelize = new Sequelize({

    dialect: 'sqlite',
    storage: './database.sqlite'

})
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    })
    .catch(err => {
    console.error('Unable to connect to the database:', err);
});

app.get('/', (req,res)=> res.send('Notes App'));

app.listen(port, () => console.log(`notes-app listening on port ${3000}!`));

const Note = sequelize.define('notes', { note: Sequelize.TEXT, tag: Sequelize.STRING });
