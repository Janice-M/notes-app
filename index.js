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
sequelize.sync({ force: true })
    .then(() => {
    console.log(`Database & tables created!`);
    });


    sequelize.sync({ force: true })
    .then(() => {
        console.log(`Database & tables created!`);

        Note.bulkCreate([
        { note: 'pick up some bread after work', tag: 'shopping' },
        { note: 'remember to write up meeting notes', tag: 'work' },
        { note: 'learn how to use node orm', tag: 'work' }
        ]).then(function() {
        return Note.findAll();
        }).then(function(notes) {
        console.log(notes);
        });
    });
