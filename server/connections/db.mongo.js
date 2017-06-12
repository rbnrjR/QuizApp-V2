const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/myQuiz');

module.exports = mongoose.connection;
