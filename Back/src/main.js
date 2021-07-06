const express = require('express');
const sequelize = require('./database/db');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api', require('./routes/driver.route'));
app.use('/api', require('./routes/supplier.route'));

app.listen(app.get('port'), async () => {
    console.log('Server on port: ', app.get('port'));
    try {
        await sequelize.authenticate();
        await sequelize.sync({force:false});
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});