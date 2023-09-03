const mongoose = require('mongoose');

const db = `mongodb+srv://gocode:yJFpWJSDsWA3g9WP@cluster0.gpflg.mongodb.net/`;

const connect = async () => {
    await mongoose.connect(db);
};

module.exports = connect;