const express = require('express');
require('dotenv').config();
const sequelize = require('./database');

const PORT = process.env.PORT || 5000;

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});

//initialize express
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api/users', require('./routes/userRoute'));


